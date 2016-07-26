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
 * @param {Function(cmdAndParams:Array):string} [o.preProcess] function to determine a URL representing an array containing a redis command string and parameters
 * @param {Function(response:Object):Object} [o.postProcess] function to transform response objects received by fetch, after transforming to JSON and dereferencing webdis object return
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
 * @return {Promise<string[],Error>} a promise resolving to an array containing the read keys
 */

export function mget(...manykeys){
    const c = manykeys;
    c.unshift('MGET');
    return request(c);
}

export function mset(obj){ 
    const c = asPairArray(obj);
    c.unshift('MSET');
    return request(c);
}

export function msetnx(obj){
    const c = asPairArray(obj);
    c.unshift('MSETNX');
    return request(c);
}

export function del(...keys){
    const c = keys;
    c.unshift('DEL');
    return request(c);
}

export function keysMatching(pattern='*'){ 
    return request(['KEYS', pattern]);
}

export function randomKey(){
    return request(['RANDOMKEY']);
}

export function select(index){ 
    return request(['SELECT',index]);
}
    
export class Key {
    constructor(k){
        this.k = k;
    }

    r(...cmdparams){
        cmdparams.splice(1,0,this.k);
        return request(cmdparams);
    }
    
    append(v){ 
        return this.r('APPEND',v);
    }

    // bitfield operations not implemented

    decr(){ 
        return this.r('DECR');
    }

    decrBy(amount){
        return this.r('DECRBY',amount);
    }

    del(){ 
        return this.r('DEL');
    }

    /*
     * DUMP seems to do nothing on webdis
     */

    exists(){ 
        return this.r('EXISTS');
    }

    expire(seconds){
        return this.r('EXPIRE',seconds);
    }

    expireAt(unixts){ 
        return this.r('EXPIREAT',unixts);
    }

    getRange(starts,ends){ 
        return this.r('GETRANGE',starts,ends);
    }
    
    getSet(v){ 
        return this.r('GETSET',v);
    }

    get(){ 
        return this.r('GET');
    }

    incr(){
        return this.r('INCR');
    }

    incrBy(increment){ 
        return this.r('INCRBY',increment);
    }

    incrByFloat(increment){ 
        return this.r('INCRBYFLOAT', increment);
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

    rename(newk){ 
        const myPromise =  this.r('RENAME',newk);
        this.k = newk;
        return myPromise;
    }

    // no RENAMENX
    // need .then clause for RENAMENX to adjust this.k conditionally 

    restore(ttl,sval){ 
        return this.r('RESTORE',ttl,sval);
    }

    set(v){ 
        return this.r('SET',v);
    }

    setEx(sec,v){ 
        return this.r('SETEX',sec,v);
    }

    setnx(v){ 
        return this.r('SETNX',v);
    }

    setRange(offset,v){ 
        return this.r('SETRANGE',offset,v);
    }

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

export function key(k){
    return new Key(k);
}

function objectFromKVArray(A){ // eslint-disable-line no-unused-vars
    if (A.length===0) return {};
    const o = {};
    for(let i=1,l=A.length;i<l;i+=2)
        o[i-1]=i;
    return o;
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
