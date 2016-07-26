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
    const commandURL = options.preProcess(commandArray);
    const requestOptions = {
        method: options.method,
        credentials: options.credentials,
        headers: options.headers
    };
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
     * @param k Key
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


export class Hash {
    constructor(k){ 
        this.k = k;
    }

    r(...cmdparams){
        cmdparams.splice(1,0,this.k);
        return request(cmdparams);
    }


    deleteAll(){
        return this.r('DEL');
    }

    del(f){
        return this.r('HDEL',f);
    }

    // will return {} if key does not exist!

    getAll(){
        return this.r('HGETALL');
    }
    
    get(f){ 
        return this.r('HGET',f);
    }

    setnx(f,v){
        return this.r('HSETNX',f,v);
    }

    set(obj){ 
        const that = this;
        return this.deleteAll().then(function(){ return that.r('HMSET',...asPairArray(obj)); });
    }

    update(obj){
        return this.r('HMSET',...asPairArray(obj));
    }
    
    incrBy(f,inc){
        return this.r('HINCRBY',f,inc);
    }

    incrByFloat(f,floatInc){
        return this.r('HINCRBYFLOAT',f,floatInc);
    }

    keys(){ 
        return this.r('HKEYS');
    }

    vals(){
        return this.r('HVALS');
    }

    len(){
        return this.r('HLEN');
    }
}

export function hash(k){
    return new Hash(k);
}


export class List {
    constructor(k){ 
        this.k = k;
    }

    r(...cmdparams){
        cmdparams.splice(1,0,this.k);
        return request(cmdparams);
    }

    get(i){
        return this.r('LINDEX',i);
    }

    getAll(){
        return this.r('LRANGE',0,-1);
    }

    insertBefore(pivot,v){
        return this.r('LINSERT','BEFORE',pivot,v);
    }

    insertAfter(pivot,...vals){
        return this.r('LINSERT','AFTER',pivot,...vals);
    }

    len(){
        return this.r('LLEN');
    }

    shift(){
        return this.r('LPOP');
    }

    unshift(...values){
        return this.r('LPUSH',...values);
    }

    slice(from=0,to=-1){
        return this.r('LRANGE',from,to);
    }

    remove(v,count=0){
        return this.r('LREM',count,v);
    }
    
    set(i,v){
        return this.r('LSET',i,v);
    }

    setAll(...values){
        const that = this;
        return del(this.k).then(()=>(that.push(...values)));
    }
    
    trim(from=0,to=-1){
        return this.r('LTRIM',from,to);
    }

    pop(){
        return this.r('RPOP');
    }

    popTo(destination){
        return this.r('RPOPLPUSH',destination);
    }

    push(...values){
        return this.r('RPUSH',...values);
    }

}

export function list(k){
    return new List(k);
}

export class Rset {
    
    constructor(k){ 
        this.k = k;
    }

    r(...cmdparams){
        cmdparams.splice(1,0,this.k);
        return request(cmdparams);
    }

    members(){
        return this.r('SMEMBERS');
    }

    keys(){
        return this.members();
    }

    vals(){
        return this.members();
    }

    getAll(){
        return this.members();
    }

    has(x){
        return this.r('SISMEMBER',x);
    }

    isMember(x){
        return this.has(x);
    }
    
    clear(){
        return this.r('DEL');
    }

    add(...vals){
        return this.r('SADD', ...vals);
    }

    set(...vals){
        return this.clear().then(()=>(this.add(...vals)));
    }

    remove(...vals){
        return this.r('SREM',...vals);
    }

    len(){
        return this.r('SCARD');
    }

    withoutSets(...skeys){
        return this.r('SDIFF',...skeys);
    }
    
    fromDiff(x,y){
        return this.r('SDIFFSTORE',x,y);
    }

    intersection(...skeys){
        return this.r('SINTER', ...skeys);
    }

    fromIntersection(...skeys){
        return this.r('SINTERSTORE', ...skeys);
    }

    union(...skeys){
        return this.r('SUNION', ...skeys);
    }

    fromUnion(...skeys){
        return this.r('SUNIONSTORE', ...skeys);
    }

    moveTo(otherSet, member){
        return this.r('SMOVE', otherSet, member);
    }

    pop(){
        return this.r('SPOP');
    }

    sampleWithReplacement(count=1){
        return this.r('SRANDMEMBER', -Math.abs(count));
    }

    sampleSubset(count=1){
        return this.r('SRANDMEMBER', Math.abs(count));
    }
}

export function rset(k){
    return new Rset(k);
}
