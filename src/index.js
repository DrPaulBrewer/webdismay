/* global: fetch */

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300)
      return response;
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function stringifyObjects(x){
    return (typeof(x)==="object")? JSON.stringify(x): x;
}

function tryParseObjects(obj){
    if (typeof(obj)==="object"){
        const mykeys = Object.keys(obj);
        for(let i=0,l=mykeys.length;i<l;++i){
            let k = mykeys[i];
            let v = obj[k];
            if (typeof(v)==='string'){
                try { 
                    obj[k] = JSON.parse(v);
                } catch(e){ 
                    obj[k] = v;
                }
            }
        }
    }
    return obj;
}

/**
 * send a command array to webdis, return a Promise of a javascript object response.
 * Put each redis command parameter in its own slot in the command array, ideally it will be automatically stringified and encoded by webdisPromise as needed.  The response is JSON parsed 
 * @param {Array} command Array of command parameters.
 * @param {string} [endPoint="/"] endpoint URL for POST to webdis
 * @return {Object} Promise that resolves to webdis requested data or status
 */

export function request(command, endPoint="/"){
    return (fetch(endPoint, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: (command
               .map(stringifyObjects)
               .map(encodeURIComponent)
               .join("/")
              )
    }).then(checkStatus)
            .then((response)=>response.json())
            .then((data)=>data[command[0]])
            .then(tryParseObjects)
           );
}

function asPairArray(obj){
    const mykeys = Object.keys(obj);
    const result = [];
    for(let i=0,l=mykeys.length;i<l;++i)
        result.push(mykeys[i],obj[mykeys[i]]);
    return result;
}

export class Connection {
    constructor(endPoint="/"){
        this.endPoint=endPoint;
    }

    r(cmd,params=[]){ 
        return request([cmd].concat(params),this.endPoint);
    }
    
    auth(password){ 
        return this.r('AUTH',password);
    }

    echo(m){ 
        return this.r('ECHO',m);
    }
    
    ping(m){ 
        return this.r('PING',m);
    }

    wait(numslaves,timeout){
        return this.r('WAIT',[numslaves,timeout]);
    }
        
}

export class Generic {

    constructor(endPoint="/"){
        this.endPoint = endPoint;
    }

    r(cmd,params=[]){
        return request(
            [cmd].concat(params),
            this.endPoint);
    }

    mget(...manykeys){ 
        return this.r('MGET', manykeys);
    }

    mset(obj){ 
        return this.r('MSET', asPairArray(obj));
    }

    msetnx(obj){
        return this.r('MSETNX', asPairArray(obj));
    }

    keysMatching(pattern='*'){ 
        return this.r('KEYS', pattern);
    }

    randomKey(){
        return this.r('RANDOMKEY');
    }

    select(index){ 
        return this.r('SELECT',index);
    }
    
}
    
export class KeyAt {
    constructor(k, endPoint="/"){
        this.k = k;
        this.endPoint = endPoint;
    }

    r(cmd, params=[]){ 
        return request(
            [cmd, this.k].concat(params),
            this.endPoint);
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

    dump(){ 
        return this.r('DUMP');
    }

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
        return this.r('GETRANGE',[starts,ends]);
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
        return this.r('INCR',increment);
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
        return this.r('PSETEX',[ms,v]);
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
        return this.r('RESTORE',[ttl,sval]);
    }

    set(v){ 
        return this.r('SET',v);
    }

    setEx(sec,v){ 
        return this.r('SETEX',[sec,v]);
    }

    setnx(v){ 
        return this.r('SETNX',v);
    }

    setrange(offset,v){ 
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

export class HashAt {
    constructor(k, endPoint="/"){ 
        this.k = k;
        this.endPoint = endPoint;
    }

    r(cmd, params=[]){ 
        return request(
            [cmd, this.k].concat(params),
            this.endPoint);
    }

    deleteAll(){
        return this.r('DEL');
    }

    del(f){
        return this.r('HDEL',f);
    }

    getAll(){
        return this.r('HGETALL');
    }
    
    getField(f){ 
        return this.r('HGET',[f]);
    }

    setnx(f,v){
        return this.r('HSETNX',[f,v]);
    }

    setAll(obj){        
        const k = this.k;
        const mycmd = ['MULTI','DEL',k,'HMSET',k].concat(asPairArray(obj), 'EXEC');
        return request(mycmd, this.endPoint);
    }
    
    update(obj){
        return this.r('HMSET',asPairArray(obj));
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


