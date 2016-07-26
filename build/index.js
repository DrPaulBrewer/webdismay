'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.checkStatus = checkStatus;
exports.stringifyObjects = stringifyObjects;
exports.tryParseObjects = tryParseObjects;
exports.configure = configure;
exports.request = request;
exports.echo = echo;
exports.mget = mget;
exports.mset = mset;
exports.msetnx = msetnx;
exports.del = del;
exports.keysMatching = keysMatching;
exports.randomKey = randomKey;
exports.select = select;
exports.key = key;
exports.hash = hash;
exports.list = list;
exports.rset = rset;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global: fetch */

/**
 *
 * Check for 2xx response.status after fetch; used by request()
 *
 * @param {Object} response, presumably from fetch.then()
 * @return {Object} response if 2xx
 * @throws {Error} with response.statusText if not 2xx
 */

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) return response;
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Pass non-objects unaltered, JSON.stringify objects/arrays.  Shallow.  Used by request preProcessing
 * @param {Object|Array|number|string} x Input
 * @return {number|string} x JSON.stringified input if input is object/array, otherwise pass input
 */

function stringifyObjects(x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === "object" ? JSON.stringify(x) : x;
}

/**
 * JSON.parse stringified response into objects, pass unparseable content as is. Used as default request postProcessing.
 * @param {Object|Array|number|string} x Input
 * @return {Object|Array|number|string} parsed output
 */

function tryParseObjects(x) {
    if (x === null) return null;
    if (x === undefined) return undefined;
    var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
    if (type === 'number') return x;
    if (type === 'string') {
        var result = x;
        try {
            result = JSON.parse(x);
        } catch (e) {
            result = x;
        }
        return result;
    }
    var mykeys = Object.keys(x);
    for (var i = 0, l = mykeys.length; i < l; ++i) {
        var k = mykeys[i];
        var v = tryParseObjects(x[k]);
        x[k] = v;
    }
    return x;
}

var defaults = {
    method: "POST",
    endPoint: "/",
    preProcess: function preProcess(cmdAndParams) {
        return cmdAndParams.map(stringifyObjects).map(encodeURIComponent).join("/");
    },
    postProcess: tryParseObjects,
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

var options = Object.assign({}, defaults);

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

function configure(o) {
    options = Object.assign({}, defaults, o);
    return options;
}

/**
 * send a command array to webdis, return a Promise of a javascript object response.
 * Put each redis command parameter in its own slot in the command array, ideally it will be automatically stringified and encoded as needed.  The response object depends on which redis command was called.
 * @param {Array} command Array of command parameters.
 * @param {string} [endPoint=options.endPoint] endpoint URL for POST to webdis
 * @return {Promise<Object,MyError>} Promise that resolves to webdis requested data or status
 */

function request(commandArray) {
    var endPoint = arguments.length <= 1 || arguments[1] === undefined ? options.endPoint : arguments[1];

    var commandURL = options.preProcess(commandArray);
    var requestOptions = {
        method: options.method,
        credentials: options.credentials,
        headers: options.headers
    };
    if (requestOptions.method === "POST") requestOptions.body = commandURL;
    var webdisPromise = requestOptions.method === "GET" ? fetch(endPoint + commandURL, requestOptions) : fetch(endPoint, requestOptions);
    return webdisPromise.then(checkStatus).then(function (response) {
        return response.json();
    }).then(function (reply) {
        return reply[commandArray[0]];
    }).then(options.postProcess);
}

function asPairArray(obj) {
    var mykeys = Object.keys(obj);
    var result = [];
    for (var i = 0, l = mykeys.length; i < l; ++i) {
        result.push(mykeys[i], obj[mykeys[i]]);
    }return result;
}

/**
 * echo message
 * @param {string} message
 * @return {Promise<string,Error>} a promise resolving to the echoed message as the server returns it
 */

function echo(m) {
    return request(['ECHO', m]);
}

/* ping omitted because does not return same format as others */

/**
 * read multiple redis keys via MGET 
 * @param {...string} redis keys to read
 * @return {Promise<string[],Error>} a promise resolving to an array of values
 */

function mget() {
    for (var _len = arguments.length, manykeys = Array(_len), _key = 0; _key < _len; _key++) {
        manykeys[_key] = arguments[_key];
    }

    var c = manykeys;
    c.unshift('MGET');
    return request(c);
}

/**
 * set multiple redis keys from javascript object via MSET
 * @param {Object} obj An object whose keys and (stringified) values are to be set on the redis server 
 * @return {Promise<Array, Error>} response is an array of [true|false, message]
 */

function mset(obj) {
    var c = asPairArray(obj);
    c.unshift('MSET');
    return request(c);
}

/**
 * set multiple redis keys if and only if none of the keys exist; sets all of the keys or none (via MSETNX)
 * @param {Object} obj An object whose keys and (stringified) values are all to be set or none set.
 * @return {Promise<number, Error>} response is 1 on success, 0 on failure
 */

function msetnx(obj) {
    var c = asPairArray(obj);
    c.unshift('MSETNX');
    return request(c);
}

/**
 * deletes keys on the redis server (via DEL)
 * @param {...string} keys Keys to remove.
 * @return {Promise<number,Error>} response is number of keys actually deleted
 */

function del() {
    for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
    }

    var c = keys;
    c.unshift('DEL');
    return request(c);
}

/**
 * lists all keys or keys matching a pattern (via KEYS)
 * @param {String} [pattern='*'] pattern to match
 * @return {Promise<string[], Error>} response is array of keys
 */

function keysMatching() {
    var pattern = arguments.length <= 0 || arguments[0] === undefined ? '*' : arguments[0];

    return request(['KEYS', pattern]);
}

/**
 * return an existing key at random (via RANDOMKEY)
 * @return {Promise<string, Error>} response is a key chosen at random by the server
 */

function randomKey() {
    return request(['RANDOMKEY']);
}

/**
 * select which redis database to use for this connection (via SELECT). Untested!
 * @param index number of database
 * @return {Promise<Array, Error>} status response
 */

function select(index) {
    return request(['SELECT', index]);
}

/**
 * Methods for manipulating a single key on the redis server 
 */

var Key = exports.Key = function () {

    /**
     * Instantly create a key hander associated with a specific key, sends no requests to the server until a method is called.
     * Includes methods for most redis commands for "Key" and "String"
     * @param k Key
     */

    function Key(k) {
        _classCallCheck(this, Key);

        this.k = k;
    }

    /**
     * splices key into request as 1st parameter of command
     * @private 
     */

    _createClass(Key, [{
        key: 'r',
        value: function r() {
            for (var _len3 = arguments.length, cmdparams = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                cmdparams[_key3] = arguments[_key3];
            }

            cmdparams.splice(1, 0, this.k);
            return request(cmdparams);
        }

        /**
         * string append to the current value (via APPEND)
         * @params v value to append
         * @return {Promise<number, Error>} response is string length of new value
         */

    }, {
        key: 'append',
        value: function append(v) {
            return this.r('APPEND', v);
        }

        // bitfield operations not implemented

        /**
         * decrement integer key value by 1 and return decremented value (via DECR)
         * @return {Promise<number,Error>} response is new value after subtracting 1
         */

    }, {
        key: 'decr',
        value: function decr() {
            return this.r('DECR');
        }

        /**
         * decrement integer key value by integer amount and return decremented value (via DECRBY)
         * @param amount Amount to subtract.
         * @return {Promise<number,Error>} response is new value after subtracting amount
         */

    }, {
        key: 'decrBy',
        value: function decrBy(amount) {
            return this.r('DECRBY', amount);
        }

        /**
         * delete key (via DEL)
         * @return {Promise<number,Error>} response is 1 if key deleted, 0 if non-existent
         */

    }, {
        key: 'del',
        value: function del() {
            return this.r('DEL');
        }

        /*
         * DUMP seems to do nothing on webdis
         */

        /**
         * check key existence (via EXISTS)
         * @return {Promise<number,Error>} response is 1 if key exists, 0 if non-existent
         */

    }, {
        key: 'exists',
        value: function exists() {
            return this.r('EXISTS');
        }

        /**
         * set a delta timer for autodeletion (via EXPIRE) Untested.
         * @param seconds Seconds until auto-deletion, subject to redis expiration rules
         * @return {Promise<number, Error>} response is 1 if timer was set, otherwise 0
         */

    }, {
        key: 'expire',
        value: function expire(seconds) {
            return this.r('EXPIRE', seconds);
        }

        /**
         * set a unix timestamp for autodeletion (not a JS timestamp, needs to be divided by 1000) (EXPIREAT) Untested.
         * @param unixts Unix timetamp for autodeletion in seconds since Jan 1, 1970 00:00 UTC
         * @return {Promise<number,Error>} response is 1 if timer was set, otherwise 0
         */

    }, {
        key: 'expireAt',
        value: function expireAt(unixts) {
            return this.r('EXPIREAT', unixts);
        }

        /**
         * return a substring of the current string value (via GETRANGE)
         * @param [starts=0] beginning index (0 is beginning)
         * @param [ends=-1] ending index (-1 is end of string)
         * @return {Promise<string, Error>} response is requested substring
         */

    }, {
        key: 'getRange',
        value: function getRange() {
            var starts = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
            var ends = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

            return this.r('GETRANGE', starts, ends);
        }

        /**
         * set a new value, return the previous value (via GETSET)
         * @param v new value
         * @return {Promise<string, Error>} response is previous value
         */

    }, {
        key: 'getSet',
        value: function getSet(v) {
            return this.r('GETSET', v);
        }

        /**
         * get the current value (via GET)
         * @return {Promise<string, Error>} response is requested value
         */

    }, {
        key: 'get',
        value: function get() {
            return this.r('GET');
        }

        /**
         * add 1 to the current value and return the new value (via INCR)
         * @return {Promise<number, Error>} response is new value
         */

    }, {
        key: 'incr',
        value: function incr() {
            return this.r('INCR');
        }

        /**
         * add integer amount to the current value and return the new value (via INCRBY)
         * @param {number} amount Integer amount to add
         * @result {Promise<number, Error>} response is new value
         */

    }, {
        key: 'incrBy',
        value: function incrBy(amount) {
            return this.r('INCRBY', amount);
        }

        /**
         * add floating point amount to the curent value and return the new value (via INCRBYFLOAT)
         * @param {number} amount Floating point amount to add
         * @result {Promise<number, Error>} response is new value
         */

    }, {
        key: 'incrByFloat',
        value: function incrByFloat(amount) {
            return this.r('INCRBYFLOAT', amount);
        }
    }, {
        key: 'moveToDB',
        value: function moveToDB(db) {
            return this.r('MOVE', db);
        }
    }, {
        key: 'persist',
        value: function persist() {
            return this.r('PERSIST');
        }
    }, {
        key: 'pExpire',
        value: function pExpire(ms) {
            return this.r('PEXPIRE', ms);
        }
    }, {
        key: 'pExpireAt',
        value: function pExpireAt(jsts) {
            return this.r('PEXPIREAT', jsts);
        }
    }, {
        key: 'pSetEx',
        value: function pSetEx(ms, v) {
            return this.r('PSETEX', ms, v);
        }
    }, {
        key: 'pTTL',
        value: function pTTL() {
            return this.r('PTTL');
        }

        /**
         * rename key, potentially clobbering/overwriting key at new name (via RENAME)
         * @param {string} newk new key
         * @return {Promise<Array, Error>} status response
         */

    }, {
        key: 'rename',
        value: function rename(newk) {
            var myPromise = this.r('RENAME', newk);
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

    }, {
        key: 'set',
        value: function set(v) {
            return this.r('SET', v);
        }
    }, {
        key: 'setEx',
        value: function setEx(sec, v) {
            return this.r('SETEX', sec, v);
        }

        /**
         * set the value only if the key is undefined (via SETNX)
         * @param v Value to set if key is undefined
         * @return {Promise<number, Error>} response is 1 if they key was undefined and the new value was set, 0 if the key was defined and the new vale not set
         */

    }, {
        key: 'setnx',
        value: function setnx(v) {
            return this.r('SETNX', v);
        }

        /** 
         * overwrite string value with new value beginning at character offset
         * @param {number} offset Offset, where 0 is beginning of string
         * @return {Promise<number, Error>} response is string length of new value
         */

    }, {
        key: 'setRange',
        value: function setRange(offset, v) {
            return this.r('SETRANGE', offset, v);
        }

        /**
         * get string length of value
         * @return {Promise<number,Error>} response is string length of value
         */

    }, {
        key: 'strlen',
        value: function strlen() {
            return this.r('STRLEN');
        }
    }, {
        key: 'ttl',
        value: function ttl() {
            return this.r('TTL');
        }
    }, {
        key: 'type',
        value: function type() {
            return this.r('TYPE');
        }
    }]);

    return Key;
}();

/**
 * Convenience function equivalent to new Key(k) to save typing "new" over and over
 * @param {string} k Key name
 * @return {Object} key handler = new Key(k)
 */

function key(k) {
    return new Key(k);
}

var Hash = exports.Hash = function () {
    function Hash(k) {
        _classCallCheck(this, Hash);

        this.k = k;
    }

    _createClass(Hash, [{
        key: 'r',
        value: function r() {
            for (var _len4 = arguments.length, cmdparams = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                cmdparams[_key4] = arguments[_key4];
            }

            cmdparams.splice(1, 0, this.k);
            return request(cmdparams);
        }
    }, {
        key: 'deleteAll',
        value: function deleteAll() {
            return this.r('DEL');
        }
    }, {
        key: 'del',
        value: function del(f) {
            return this.r('HDEL', f);
        }

        // will return {} if key does not exist!

    }, {
        key: 'getAll',
        value: function getAll() {
            return this.r('HGETALL');
        }
    }, {
        key: 'get',
        value: function get(f) {
            return this.r('HGET', f);
        }
    }, {
        key: 'setnx',
        value: function setnx(f, v) {
            return this.r('HSETNX', f, v);
        }
    }, {
        key: 'set',
        value: function set(obj) {
            var that = this;
            return this.deleteAll().then(function () {
                return that.r.apply(that, ['HMSET'].concat(_toConsumableArray(asPairArray(obj))));
            });
        }
    }, {
        key: 'update',
        value: function update(obj) {
            return this.r.apply(this, ['HMSET'].concat(_toConsumableArray(asPairArray(obj))));
        }
    }, {
        key: 'incrBy',
        value: function incrBy(f, inc) {
            return this.r('HINCRBY', f, inc);
        }
    }, {
        key: 'incrByFloat',
        value: function incrByFloat(f, floatInc) {
            return this.r('HINCRBYFLOAT', f, floatInc);
        }
    }, {
        key: 'keys',
        value: function keys() {
            return this.r('HKEYS');
        }
    }, {
        key: 'vals',
        value: function vals() {
            return this.r('HVALS');
        }
    }, {
        key: 'len',
        value: function len() {
            return this.r('HLEN');
        }
    }]);

    return Hash;
}();

function hash(k) {
    return new Hash(k);
}

var List = exports.List = function () {
    function List(k) {
        _classCallCheck(this, List);

        this.k = k;
    }

    _createClass(List, [{
        key: 'r',
        value: function r() {
            for (var _len5 = arguments.length, cmdparams = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                cmdparams[_key5] = arguments[_key5];
            }

            cmdparams.splice(1, 0, this.k);
            return request(cmdparams);
        }
    }, {
        key: 'get',
        value: function get(i) {
            return this.r('LINDEX', i);
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            return this.r('LRANGE', 0, -1);
        }
    }, {
        key: 'insertBefore',
        value: function insertBefore(pivot, v) {
            return this.r('LINSERT', 'BEFORE', pivot, v);
        }
    }, {
        key: 'insertAfter',
        value: function insertAfter(pivot) {
            for (var _len6 = arguments.length, vals = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                vals[_key6 - 1] = arguments[_key6];
            }

            return this.r.apply(this, ['LINSERT', 'AFTER', pivot].concat(vals));
        }
    }, {
        key: 'len',
        value: function len() {
            return this.r('LLEN');
        }
    }, {
        key: 'shift',
        value: function shift() {
            return this.r('LPOP');
        }
    }, {
        key: 'unshift',
        value: function unshift() {
            for (var _len7 = arguments.length, values = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                values[_key7] = arguments[_key7];
            }

            return this.r.apply(this, ['LPUSH'].concat(values));
        }
    }, {
        key: 'slice',
        value: function slice() {
            var from = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
            var to = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

            return this.r('LRANGE', from, to);
        }
    }, {
        key: 'remove',
        value: function remove(v) {
            var count = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

            return this.r('LREM', count, v);
        }
    }, {
        key: 'set',
        value: function set(i, v) {
            return this.r('LSET', i, v);
        }
    }, {
        key: 'setAll',
        value: function setAll() {
            for (var _len8 = arguments.length, values = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                values[_key8] = arguments[_key8];
            }

            var that = this;
            return del(this.k).then(function () {
                return that.push.apply(that, values);
            });
        }
    }, {
        key: 'trim',
        value: function trim() {
            var from = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
            var to = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

            return this.r('LTRIM', from, to);
        }
    }, {
        key: 'pop',
        value: function pop() {
            return this.r('RPOP');
        }
    }, {
        key: 'popTo',
        value: function popTo(destination) {
            return this.r('RPOPLPUSH', destination);
        }
    }, {
        key: 'push',
        value: function push() {
            for (var _len9 = arguments.length, values = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                values[_key9] = arguments[_key9];
            }

            return this.r.apply(this, ['RPUSH'].concat(values));
        }
    }]);

    return List;
}();

function list(k) {
    return new List(k);
}

var Rset = exports.Rset = function () {
    function Rset(k) {
        _classCallCheck(this, Rset);

        this.k = k;
    }

    _createClass(Rset, [{
        key: 'r',
        value: function r() {
            for (var _len10 = arguments.length, cmdparams = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                cmdparams[_key10] = arguments[_key10];
            }

            cmdparams.splice(1, 0, this.k);
            return request(cmdparams);
        }
    }, {
        key: 'members',
        value: function members() {
            return this.r('SMEMBERS');
        }
    }, {
        key: 'keys',
        value: function keys() {
            return this.members();
        }
    }, {
        key: 'vals',
        value: function vals() {
            return this.members();
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            return this.members();
        }
    }, {
        key: 'has',
        value: function has(x) {
            return this.r('SISMEMBER', x);
        }
    }, {
        key: 'isMember',
        value: function isMember(x) {
            return this.has(x);
        }
    }, {
        key: 'clear',
        value: function clear() {
            return this.r('DEL');
        }
    }, {
        key: 'add',
        value: function add() {
            for (var _len11 = arguments.length, vals = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                vals[_key11] = arguments[_key11];
            }

            return this.r.apply(this, ['SADD'].concat(vals));
        }
    }, {
        key: 'set',
        value: function set() {
            var _this = this;

            for (var _len12 = arguments.length, vals = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                vals[_key12] = arguments[_key12];
            }

            return this.clear().then(function () {
                return _this.add.apply(_this, vals);
            });
        }
    }, {
        key: 'remove',
        value: function remove() {
            for (var _len13 = arguments.length, vals = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                vals[_key13] = arguments[_key13];
            }

            return this.r.apply(this, ['SREM'].concat(vals));
        }
    }, {
        key: 'len',
        value: function len() {
            return this.r('SCARD');
        }
    }, {
        key: 'withoutSets',
        value: function withoutSets() {
            for (var _len14 = arguments.length, skeys = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                skeys[_key14] = arguments[_key14];
            }

            return this.r.apply(this, ['SDIFF'].concat(skeys));
        }
    }, {
        key: 'fromDiff',
        value: function fromDiff(x, y) {
            return this.r('SDIFFSTORE', x, y);
        }
    }, {
        key: 'intersection',
        value: function intersection() {
            for (var _len15 = arguments.length, skeys = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                skeys[_key15] = arguments[_key15];
            }

            return this.r.apply(this, ['SINTER'].concat(skeys));
        }
    }, {
        key: 'fromIntersection',
        value: function fromIntersection() {
            for (var _len16 = arguments.length, skeys = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                skeys[_key16] = arguments[_key16];
            }

            return this.r.apply(this, ['SINTERSTORE'].concat(skeys));
        }
    }, {
        key: 'union',
        value: function union() {
            for (var _len17 = arguments.length, skeys = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
                skeys[_key17] = arguments[_key17];
            }

            return this.r.apply(this, ['SUNION'].concat(skeys));
        }
    }, {
        key: 'fromUnion',
        value: function fromUnion() {
            for (var _len18 = arguments.length, skeys = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
                skeys[_key18] = arguments[_key18];
            }

            return this.r.apply(this, ['SUNIONSTORE'].concat(skeys));
        }
    }, {
        key: 'moveTo',
        value: function moveTo(otherSet, member) {
            return this.r('SMOVE', otherSet, member);
        }
    }, {
        key: 'pop',
        value: function pop() {
            return this.r('SPOP');
        }
    }, {
        key: 'sampleWithReplacement',
        value: function sampleWithReplacement() {
            var count = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

            return this.r('SRANDMEMBER', -Math.abs(count));
        }
    }, {
        key: 'sampleSubset',
        value: function sampleSubset() {
            var count = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

            return this.r('SRANDMEMBER', Math.abs(count));
        }
    }]);

    return Rset;
}();

function rset(k) {
    return new Rset(k);
}
