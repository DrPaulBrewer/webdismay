/* global: fetch */

/**
 *
 * Check for 2xx response.status after fetch; used by request()
 *
 * @param {Object} response, presumably from fetch.then()
 * @return {Object} response if 2xx
 * @throws {Error} with response.statusText if not 2xx
 */

export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300)
        return response;
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Pass non-objects unaltered, JSON.stringify objects/arrays.  Shallow.  Used by request preProcessing
 * @param {Object|Array|number|string} x Input
 * @return {number|string} x JSON.stringified input if input is object/array, otherwise pass input
 */

export function stringifyObjects(x){
    return (typeof(x)==="object")? JSON.stringify(x): x;
}

/**
 * JSON.parse stringified response into objects, pass unparseable content as is. Used as default request postProcessing.
 * @param {Object|Array|number|string} x Input
 * @return {Object|Array|number|string} parsed output
 */

export function tryParseObjects(x){
    if (x===null) return null;
    if (x===undefined) return undefined;
    const type = typeof(x);
    if (type==='number') return x;
    if (type==='string') {
        let result=x;
        try {
            result = JSON.parse(x);
        } catch(e){
            result = x;
        }
        return result;
    }
    const mykeys = Object.keys(x);
    for(let i=0,l=mykeys.length;i<l;++i){
        let k = mykeys[i];
        let v = tryParseObjects(x[k]);
        x[k] = v;
    }
    return x;
}

const defaults = {
    method: "POST",
    endPoint: "/",
    preProcess: ((cmdAndParams)=>cmdAndParams
                 .map(stringifyObjects)
                 .map(encodeURIComponent)
                 .join("/")),
    postProcess: tryParseObjects,
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    putHeaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/octet-stream'
    }
};

let options = Object.assign({}, defaults);

/**
 * set common options for all webdis/redis requests 
 * @param {Object} o configuration options
 * @param {string} [o.method="POST"] request HTTP method may be set to GET or POST.  Some test frameworks (e.g.karma) seem to have difficulty proxying POST and need GET.  POST is recommended for production to avoid cache issues.
 * @param {string} [o.endPoint="/"] fetch URL where webdis is listening for requests
 * @param {string} [o.credentials="same-origin"] fetch option determining whether to send http-auth or other credentials with each request
 * @param {Object} [o.headers] fetch option setting headers (e.g. accept, content-type) for each fetch.  Default sets headers for 'application/json'
 * @param {function(cmdAndParams:Array):string} [o.preProcess] function to determine a URL-like string representing an array containing a redis command string and parameters. 
 * @param {function(response:Object):Object} [o.postProcess] function to transform response objects received by fetch, after transforming to JSON and dereferencing webdis object return
 * @return {Object} resulting configuration settings
 */

export function configure(o){
    options = Object.assign({},defaults,o);
    return options;
}

/**
 * send a command array to webdis, return a Promise of a javascript object response.
 * Put each redis command parameter in its own slot in the command array, ideally it will be automatically stringified and encoded as needed.  The response object depends on which redis command was called.
 * @param {Array} command Array of command parameters.
 * @param {string} [endPoint=options.endPoint] endpoint URL for POST to webdis
 * @return {Promise<Object,MyError>} Promise that resolves to webdis requested data or status
 */

export function request(commandArray, endPoint=options.endPoint){
    if (!(Array.isArray(commandArray))) return undefined;
    const requestOptions = {
        method: options.method,
        credentials: options.credentials,
        headers: options.headers
    };
    const last = commandArray[commandArray.length-1];
    if (last instanceof Blob){
        commandArray.length -= 1;
        requestOptions.method = "PUT";
        requestOptions.headers = options.putHeaders;
        requestOptions.body = last;
    }
    const commandURL = options.preProcess(commandArray);
    if (requestOptions.method === "POST") 
        requestOptions.body = commandURL;
    const webdisPromise =  (requestOptions.method === "GET")? fetch(endPoint+commandURL, requestOptions) : fetch(endPoint,requestOptions);
    return (webdisPromise
            .then(checkStatus)
            .then((response)=>response.json())
            .then((reply)=>reply[commandArray[0]])
            .then(options.postProcess)
           );
}

function asPairArray(obj){
    const mykeys = Object.keys(obj);
    const result = [];
    for(let i=0,l=mykeys.length;i<l;++i)
        result.push(mykeys[i],obj[mykeys[i]]);
    return result;
}

/**
 * echo message
 * @param {string} message
 * @return {Promise<string,Error>} a promise resolving to the echoed message as the server returns it
 */

export function echo(m){ 
        return request(['ECHO',m]);
}

/* ping omitted because does not return same format as others */

/**
 * read multiple redis keys via MGET 
 * @param {...string} redis keys to read
 * @return {Promise<string[],Error>} a promise resolving to an array of values
 */

export function mget(...manykeys){
    const c = manykeys;
    c.unshift('MGET');
    return request(c);
}

/**
 * set multiple redis keys from javascript object via MSET
 * @param {Object} obj An object whose keys and (stringified) values are to be set on the redis server 
 * @return {Promise<Array, Error>} response is an array of [true|false, message]
 */

export function mset(obj){ 
    const c = asPairArray(obj);
    c.unshift('MSET');
    return request(c);
}

/**
 * set multiple redis keys if and only if none of the keys exist; sets all of the keys or none (via MSETNX)
 * @param {Object} obj An object whose keys and (stringified) values are all to be set or none set.
 * @return {Promise<number, Error>} response is 1 on success, 0 on failure
 */

export function msetnx(obj){
    const c = asPairArray(obj);
    c.unshift('MSETNX');
    return request(c);
}

/**
 * deletes keys on the redis server (via DEL)
 * @param {...string} keys Keys to remove.
 * @return {Promise<number,Error>} response is number of keys actually deleted
 */

export function del(...keys){
    const c = keys;
    c.unshift('DEL');
    return request(c);
}

/**
 * lists all keys or keys matching a pattern (via KEYS)
 * @param {String} [pattern='*'] pattern to match
 * @return {Promise<string[], Error>} response is array of keys
 */

export function keysMatching(pattern='*'){ 
    return request(['KEYS', pattern]);
}

/**
 * return an existing key at random (via RANDOMKEY)
 * @return {Promise<string, Error>} response is a key chosen at random by the server
 */

export function randomKey(){
    return request(['RANDOMKEY']);
}

/**
 * select which redis database to use for this connection (via SELECT). Untested!
 * @param index number of database
 * @return {Promise<Array, Error>} status response
 */ 

export function select(index){ 
    return request(['SELECT',index]);
}

/**
 * Methods for manipulating a single key on the redis server 
 */
    
export class Key {

    /**
     * Instantly create a key hander associated with a specific key, sends no requests to the server until a method is called.
     * Includes methods for most redis commands for "Key" and "String"
     * @param {string} k Key
     */

    constructor(k){
        this.k = k;
    }

    /**
     * splices key into request as 1st parameter of command
     * @private 
     */

    r(...cmdparams){
        cmdparams.splice(1,0,this.k);
        return request(cmdparams);
    }

    /**
     * string append to the current value (via APPEND)
     * @params v value to append
     * @return {Promise<number, Error>} response is string length of new value
     */
    
    append(v){ 
        return this.r('APPEND',v);
    }

    // bitfield operations not implemented

    /**
     * decrement integer key value by 1 and return decremented value (via DECR)
     * @return {Promise<number,Error>} response is new value after subtracting 1
     */

    decr(){ 
        return this.r('DECR');
    }

    /**
     * decrement integer key value by integer amount and return decremented value (via DECRBY)
     * @param amount Amount to subtract.
     * @return {Promise<number,Error>} response is new value after subtracting amount
     */

    decrBy(amount){
        return this.r('DECRBY',amount);
    }

    /**
     * delete key (via DEL)
     * @return {Promise<number,Error>} response is 1 if key deleted, 0 if non-existent
     */
    
    del(){ 
        return this.r('DEL');
    }

    /*
     * DUMP seems to do nothing on webdis
     */

    /**
     * check key existence (via EXISTS)
     * @return {Promise<number,Error>} response is 1 if key exists, 0 if non-existent
     */

    exists(){ 
        return this.r('EXISTS');
    }

    /**
     * set a delta timer for autodeletion (via EXPIRE) Untested.
     * @param seconds Seconds until auto-deletion, subject to redis expiration rules
     * @return {Promise<number, Error>} response is 1 if timer was set, otherwise 0
     */

    expire(seconds){
        return this.r('EXPIRE',seconds);
    }

    /**
     * set a unix timestamp for autodeletion (not a JS timestamp, needs to be divided by 1000) (EXPIREAT) Untested.
     * @param unixts Unix timetamp for autodeletion in seconds since Jan 1, 1970 00:00 UTC
     * @return {Promise<number,Error>} response is 1 if timer was set, otherwise 0
     */

    expireAt(unixts){ 
        return this.r('EXPIREAT',unixts);
    }

    /**
     * return a substring of the current string value (via GETRANGE)
     * @param [starts=0] beginning index (0 is beginning)
     * @param [ends=-1] ending index (-1 is end of string)
     * @return {Promise<string, Error>} response is requested substring
     */
    
    getRange(starts=0,ends=-1){ 
        return this.r('GETRANGE',starts,ends);
    }
    
    /**
     * set a new value, return the previous value (via GETSET)
     * @param v new value
     * @return {Promise<string, Error>} response is previous value
     */
    
    getSet(v){ 
        return this.r('GETSET',v);
    }

    /**
     * get the current value (via GET)
     * @return {Promise<string, Error>} response is requested value
     */

    get(){ 
        return this.r('GET');
    }

    /**
     * add 1 to the current value and return the new value (via INCR)
     * @return {Promise<number, Error>} response is new value
     */

    incr(){
        return this.r('INCR');
    }

    /**
     * add integer amount to the current value and return the new value (via INCRBY)
     * @param {number} amount Integer amount to add
     * @result {Promise<number, Error>} response is new value
     */

    incrBy(amount){ 
        return this.r('INCRBY',amount);
    }

    /**
     * add floating point amount to the curent value and return the new value (via INCRBYFLOAT)
     * @param {number} amount Floating point amount to add
     * @result {Promise<number, Error>} response is new value
     */

    incrByFloat(amount){ 
        return this.r('INCRBYFLOAT', amount);
    }

    moveToDB(db){ 
        return this.r('MOVE',db);
    }
    
    persist(){ 
        return this.r('PERSIST');
    }

    pExpire(ms){ 
        return this.r('PEXPIRE',ms);
    }

    pExpireAt(jsts){
        return this.r('PEXPIREAT',jsts);
    }

    pSetEx(ms,v){ 
        return this.r('PSETEX',ms,v);
    }

    pTTL(){ 
        return this.r('PTTL');
    }

    /**
     * rename key, potentially clobbering/overwriting key at new name (via RENAME)
     * @param {string} newk new key
     * @return {Promise<Array, Error>} status response
     */

    rename(newk){ 
        const myPromise =  this.r('RENAME',newk);
        this.k = newk;
        return myPromise;
    }

    // no RENAMENX
    // need .then clause for RENAMENX to adjust this.k conditionally 

    /**
     * set the value (via SET)
     * @param {string} v New value
     * @return {Promise<Array, Error>} status return
     */

    set(v){ 
        return this.r('SET',v);
    }

    setEx(sec,v){ 
        return this.r('SETEX',sec,v);
    }

    /**
     * set the value only if the key is undefined (via SETNX)
     * @param v Value to set if key is undefined
     * @return {Promise<number, Error>} response is 1 if they key was undefined and the new value was set, 0 if the key was defined and the new vale not set
     */
    
    setnx(v){ 
        return this.r('SETNX',v);
    }

    /** 
     * overwrite string value with new value beginning at character offset
     * @param {number} offset Offset, where 0 is beginning of string
     * @return {Promise<number, Error>} response is string length of new value
     */

    setRange(offset,v){ 
        return this.r('SETRANGE',offset,v);
    }
    
    /**
     * get string length of value
     * @return {Promise<number,Error>} response is string length of value
     */

    strlen(){ 
        return this.r('STRLEN');
    }

    ttl(){ 
        return this.r('TTL');
    }

    type(){
        return this.r('TYPE');
    }
}

/**
 * Convenience function equivalent to new Key(k) to save typing "new" over and over
 * @param {string} k Key name
 * @return {Object} key handler = new Key(k)
 */

export function key(k){
    return new Key(k);
}

/**
 * Methods for manipulating a hash on the redis server
 */

export class Hash {

    /**
     * Instantly create a hash handler associated with a specific hash, via its key, sends no requests to the server until a method is called.
     * @param {string} k Key where a Hash is stored, or to be stored, on the server
     */

    constructor(k){ 
        this.k = k;
    }

    /**
     * splices key into request as 1st parameter of command
     * @private 
     */

    r(...cmdparams){
        cmdparams.splice(1,0,this.k);
        return request(cmdparams);
    }

    /**
     * delete the entire hash (via DEL)
     * @return {Promise<number,Error>} response is 1 if the hash was deleted, 0 if not
     */

    deleteAll(){
        return this.r('DEL');
    }

    /**
     * delete a field from the hash (via HDEL)
     * @param {string} f name of field to be deleted
     * @return {Promise<number,Error>} response is 1 if field is deleted, 0 if non-existent
     */

    del(f){
        return this.r('HDEL',f);
    }
    
    /**
     * returns the entire hash as a javascript Object, and will return {} if the hash does not exist (via HGETALL)
     * @return {Promise<Object, Error>} response is the requested data
     */

    getAll(){
        return this.r('HGETALL');
    }
    
    /** 
     * return the selected field from the hash
     * @param {string} f The field name
     * @return {Promise<string, Error>} response is the requested field's value
     */

    get(f){ 
        return this.r('HGET',f);
    }

    /** 
     * set an undefined field to a value, but has no effect if field exists (via HSETNX)
     * @param {string} f The field name
     * @param {string} v The field value (might be a stringified object, etc.)
     * @return {Promise<number,Error>} response is 1 if field f set to v, 0 if not
     */

    setnx(f,v){
        return this.r('HSETNX',f,v);
    }

    /**
     * set all fields of a hash sourced from a Javascript object, deletes entire hash first and recreates (via DEL and HMSET).
     * Clients reading at the same time may get either an empty object or the entire object.
     * @param obj Object containing fields and values to set hash
     * @return {Promise<Array,Error>} status response
     */
    
    set(obj){ 
        const that = this;
        return this.deleteAll().then(function(){ return that.r('HMSET',...asPairArray(obj)); });
    }

    /**
     * merges fields and values from a Javacript object into the hash (via HMSET)
     * @param obj Object containing fields and values to merge into hash
     * @return {Promise<Array,Error>} status response
     */

    update(obj){
        return this.r('HMSET',...asPairArray(obj));
    }

    /**
     * add amount to value of field f and return the new value (via HINCRBY)
     * @param f field name
     * @param amount Integer amount to add 
     * @return {Promise<number,Error>} response is the new value
     */
    
    incrBy(f,amount){
        return this.r('HINCRBY',f,amount);
    }

    /**
     * add amount to value of field f and return the new value (via HINCRBYFLOAT)
     * @param f field name
     * @param amount Floating-point amount to add 
     * @return {Promise<number,Error>} response is the new value
     */

    incrByFloat(f,amount){
        return this.r('HINCRBYFLOAT',f,amount);
    }

    /**
     * list the fields of this hash (via HKEYS)
     * @return {Promise<string[], Error>} response is array list of fields
     */

    keys(){ 
        return this.r('HKEYS');
    }
    
    /**
     * list the values of this hash (via HVALS)
     * @return {Promise<string[], Error>} response is array list of values
     */

    vals(){
        return this.r('HVALS');
    }

    /**
     * number of fields in the hash (via HLEN)
     * @return {Promise<number, Error>} response is number of fields in the hash
     */

    len(){
        return this.r('HLEN');
    }
}

/** 
 * Convenience function equivalent to new Hash(k)
 * @param {string} k Key name
 * @return {Object} equivalent to new Hash(k)
 */

export function hash(k){
    return new Hash(k);
}

/**
 * Methods for manipulating a List on the server
 */

export class List {

    /**
     * Instantly create a list handler associated with a specific list, via its key, sends no requests to the server until a method is called.
     * @param {string} k Key where a List is stored, or to be stored, on the server
     */

    constructor(k){ 
        this.k = k;
    }

    /**
     * splices key name into command
     * @private
     */

    r(...cmdparams){
        cmdparams.splice(1,0,this.k);
        return request(cmdparams);
    }

    /**
     * get the value of element i (via LINDEX)
     * @param i index to fetch
     * @return {Promise<string, Error>} response is value of element i
     */

    get(i){
        return this.r('LINDEX',i);
    }

    /**
     * get the entire list (via LRANGE)
     * @return {Promise<Array, Error>} response is array containing entire list
     */

    getAll(){
        return this.r('LRANGE',0,-1);
    }

    /**
     * insert an element immediately before the first element equal to pivot  (via LINSERT)
     * @param {string} pivot value to find
     * @param {string} v value to insert
     * @return {Promise<number,Error>} response is new list length
     */

    insertBefore(pivot,v){
        return this.r('LINSERT','BEFORE',pivot,v);
    }

    /**
     * insert an element immediately after the first element equal to pivot  (via LINSERT)
     * @param {string} pivot value to find
     * @param {string} v value to insert
     * @return {Promise<number,Error>} response is new list length
     */

    insertAfter(pivot,v){
        return this.r('LINSERT','AFTER',pivot,v);
    }

    /**
     * length of list (via LLEN)
     * @return {Promise<number,Error>} response is the length of the list
     */

    len(){
        return this.r('LLEN');
    }

    /**
     * remove element 0 from the list and return it, and re-index the list (via LPOP) 
     * @return {Promise<string,Error>} response is the removed element 0
     */
    
    shift(){
        return this.r('LPOP');
    }

    /**
     * append to beginning of list, in reverse order, and re-index the list (via LPUSH)
     * @param {...string} values values to be appeded onto the head of the list
     * @return {Promise<number, Error>} response is the new length of the list
     */

    unshift(...values){
        return this.r('LPUSH',...values);
    }

    /**
     * return all or part of the list, list is unchanged (via LRANGE)
     * @param {number} [from=0] index to begin slice 
     * @param {number} [to=-1] index to end slice
     * @return {Promise<Array, Error>} response is the requested array of data
     */

    slice(from=0,to=-1){
        return this.r('LRANGE',from,to);
    }

    /**
     * remove elements with value v (via LREM)
     * @param {string} v the value to remove
     * @param {nunber} [count=0] 0 for all occurrences, otherwise limit the number of removals
     * @return {Promise<number,Errpr>} response is the number removed
     */

    remove(v,count=0){
        return this.r('LREM',count,v);
    }
    
    /**
     * set element i to value v (via LSET)
     * @param {number} i index of element to set
     * @param {string} v value
     * @return {Promise<Array,Error>} status response
     */

    set(i,v){
        return this.r('LSET',i,v);
    }
    
    /**
     * set list to supplied values (via DEL and RPUSH)
     * @param {...string} values Values to set
     * @return {Promise<number,Error>} response is new length of list
     */

    setAll(...values){
        const that = this;
        return del(this.k).then(()=>(that.push(...values)));
    }

    /**
     * trim list to only the indicated range of indexes and reindex (via LTRIM)
     * @param {number} from the first index of elements to keep
     * @param {number} to the last index of elements to keep, inclusive 
     * @return {Promise<Array,Error>} status response
     */
     
    
    trim(from=0,to=-1){
        return this.r('LTRIM',from,to);
    }

    /**
     * remove the tail from the list and return it (via RPOP)
     * @return {Promise<string,Error>} response is the tail value from the list
     */
     

    pop(){
        return this.r('RPOP');
    }

    /**
     * remove the tail from the list and append (unshift) it as the head of another list (via RPOPLPUSH)
     * @param {string} destination key to List receiving the element
     * @return {Promise<Array,Error>} status response
     */

    popTo(destination){
        return this.r('RPOPLPUSH',destination);
    }

    /**
     * append values to the tail of the list (via RPUSH)
     * @param {...string} values to append to the tail of the list
     * @return {Promise<number,Error>} response is new length of the list
     */

    push(...values){
        return this.r('RPUSH',...values);
    }

}

/**
 * convenience function equivalent to new List(k) to keep from typing "new" all the time
 * @param k Key
 * @return {Object} new List(k)
 */

export function list(k){
    return new List(k);
}

/**
 * Methods for maniplulating Set data on the webdis/redis stack.
 * Not named Set to avoid collision with Javascript Sets 
 */

export class Rset {

    /**
     * Instantly create a list handler associated with a specific list, via its key, sends no requests to the server until a method is called.
     * @param {string} k Key where a List is stored, or to be stored, on the server
     */
    
    constructor(k){ 
        this.k = k;
    }

    /**
     * @private
     */

    r(...cmdparams){
        cmdparams.splice(1,0,this.k);
        return request(cmdparams);
    }

    /**
     * list members of set (via SMEMBERS)
     * @return {Promise<Array,Error>} response is array list of members of the set
     */

    members(){
        return this.r('SMEMBERS');
    }

    /**
     * synonym for .members()
     * @return {Promise<Array,Error>} response is array list of members of the set
     */

    keys(){
        return this.members();
    }

    /**
     * synonym for .members()
     * @return {Promise<Array,Error>} response is array list of members of the set
     */

    vals(){
        return this.members();
    }

    /**
     * synonym for .members()
     * @return {Promise<Array,Error>} response is array list of members of the set
     */

    getAll(){
        return this.members();
    }

    /**
     * test set membership (via SISMEMBER)
     * @param x value to find in the set
     * @return {Promise<number,Error>} response is 1 for member and 0 for not member
     */

    has(x){
        return this.r('SISMEMBER',x);
    }

    /**
     * clone of .has, tests set membership (via SISMEMBER)
     * @param x value to find in the set
     * @return {Promise<number,Error>} response is 1 for member and 0 for not member
     */
     
    isMember(x){
        return this.has(x);
    }

    /**
     * delete all members by deleting key (via DEL)
     * @return {Promise<number,Error>} response is 1 on deletion or 0 if the set does not exist
     */
    
    clear(){
        return this.r('DEL');
    }

    /**
     * add new values to the set
     * @param {...string} vals New values to add to set
     * @return {Promise<number,Error>} response is the number of additional members 
     */

    add(...vals){
        return this.r('SADD', ...vals);
    }

    /**
     * initialize the set to the passed values (via DEL and SADD)
     * @param {...string} vals Values used to initialize the set
     * @return {Promise<number,Error>} response is the number of unique set members
     */
    
    set(...vals){
        return this.clear().then(()=>(this.add(...vals)));
    }

    /**
     * remove values from the set (via SREM)
     * @param {...string} vals Values to remove
     * @return {Promise<number,Error>} response is the number removed
     */

    remove(...vals){
        return this.r('SREM',...vals);
    }

    /**
     * number of members (via SCARD)
     * @return {Promise<number,Error>} response is the number of members in the set
     */
    
    len(){
        return this.r('SCARD');
    }

    /**
     * find the members in the current set not in any of the other sets (by key) (via SDIFF)
     * @param {...string} skeys Keys of other sets
     * @return {Promise<Array, Error>} response is an array giving the values in calculated set difference
     */

    withoutSets(...skeys){
        return this.r('SDIFF',...skeys);
    }

    /**
     * store at this key the set difference of sets at keys given by x and y (via SDIFFSTORE)
     * @param {string} x key for set X
     * @param {string} y key for set Y
     * @return {Promise<number,Error>} response is the number of members stored in this key's set
     */

    fromDiff(x,y){
        return this.r('SDIFFSTORE',x,y);
    }

    /**
     * find the members in the set intersection of the current set and the other listed sets (via SINTER)
     * @param {...string} skeys Keys of other sets for intersection
     * @return {Promise<Array,Error>} response is an array giving the values in the calculated set intersection
     */

    intersection(...skeys){
        return this.r('SINTER', ...skeys);
    }

    /**
     * store at this key the set intersection of the listed sets (via SINTERSTORE)
     * @param {...skeys} skeys Keys of sets for intersection
     * @return {Promise<number,Error>} response is the number of members stored in this key's set
     */

    fromIntersection(...skeys){
        return this.r('SINTERSTORE', ...skeys);
    }

    /**
     * find the members in the set union of the current set and the other listed sets (via SUNION)
     * @param {...string} skeys Keys of other sets for union
     * @return {Promise<Array,Error>} response is an array giving the (unique) values in the calculated set union
     */

    union(...skeys){
        return this.r('SUNION', ...skeys);
    }

    /**
     * store at this key the set union of the listed sets (via SUNIONSTORE)
     * @param {...skeys} skeys Keys of sets for union
     * @return {Promise<number,Error>} response is the number of members stored in this key's set
     */

    fromUnion(...skeys){
        return this.r('SUNIONSTORE', ...skeys);
    }

    /**
     * (always) delete a member from the current set and (potentially) add it to another set (via SMOVE)
     * @param {string} otherSet key to destination set
     * @param {string} member value to move
     * @return {Promise<number,Error>} response is 1 if moved from source set to destination set, 0 if not a member of source set
     */
    
    moveTo(otherSet, member){
        return this.r('SMOVE', otherSet, member);
    }

    /**
     * remove and return a random member of the set
     * @return {Promise<string,Error>} response is the removed member 
     */

    pop(){
        return this.r('SPOP');
    }

    /**
     * generate a random sample from the set, of any length, potentially repeating members
     * @param {number} count desired sample length
     * @return {Promise<Array,Error>} response is the requested random sample
     */

    sampleWithReplacement(count=1){
        return this.r('SRANDMEMBER', -Math.abs(count));
    }

    /**
     * generate a random sample that is a subset, so that the sample has no repetition of memberss
     * @param {number} count desired subset length
     * @param {Promise<Array,Error>} response is the requested random subset
     */

    sampleSubset(count=1){
        return this.r('SRANDMEMBER', Math.abs(count));
    }
}

/**
 * Convenience function equivalent to new Rset(k), to avoid typing "new" over and over
 * @param k Key 
 * @return {Object} new Rset(k)
 */

export function rset(k){
    return new Rset(k);
}
