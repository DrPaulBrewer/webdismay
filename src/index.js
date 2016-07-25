/* global: fetch */

export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300)
        return response;
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export function stringifyObjects(x){
    return (typeof(x)==="object")? JSON.stringify(x): x;
}

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

/**
 * send a command array to webdis, return a Promise of a javascript object response.
 * Put each redis command parameter in its own slot in the command array, ideally it will be automatically stringified and encoded as needed.  The response is JSON parsed 
 * @param {Array} command Array of command parameters.
 * @param {string} [endPoint="/"] endpoint URL for POST to webdis
 * @return {Object} Promise that resolves to webdis requested data or status
 */

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

export function configure(o){
    options = Object.assign(options,o);
}

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

export function echo(m){ 
        return request(['ECHO',m]);
}

/* ping omitted because does not return same format as others */    

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
    
    incrby(f,inc){
        return this.r('HINCRBY',f,inc);
    }

    incrbyfloat(f,floatInc){
        return this.r('HINCRBYFLOAT',f,floatInc);
    }

    hkeys(){ 
        return this.r('HKEYS');
    }

    hvals(){
        return this.r('HVALS');
    }

    len(){
        return this.r('HLEN');
    }
}


