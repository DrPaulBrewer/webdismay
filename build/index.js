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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global: fetch */

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) return response;
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function stringifyObjects(x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === "object" ? JSON.stringify(x) : x;
}

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

/**
 * send a command array to webdis, return a Promise of a javascript object response.
 * Put each redis command parameter in its own slot in the command array, ideally it will be automatically stringified and encoded as needed.  The response is JSON parsed 
 * @param {Array} command Array of command parameters.
 * @param {string} [endPoint="/"] endpoint URL for POST to webdis
 * @return {Object} Promise that resolves to webdis requested data or status
 */

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

function configure(o) {
    options = Object.assign(options, o);
}

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

function echo(m) {
    return request(['ECHO', m]);
}

/* ping omitted because does not return same format as others */

function mget() {
    for (var _len = arguments.length, manykeys = Array(_len), _key = 0; _key < _len; _key++) {
        manykeys[_key] = arguments[_key];
    }

    var c = manykeys;
    c.unshift('MGET');
    return request(c);
}

function mset(obj) {
    var c = asPairArray(obj);
    c.unshift('MSET');
    return request(c);
}

function msetnx(obj) {
    var c = asPairArray(obj);
    c.unshift('MSETNX');
    return request(c);
}

function del() {
    for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
    }

    var c = keys;
    c.unshift('DEL');
    return request(c);
}

function keysMatching() {
    var pattern = arguments.length <= 0 || arguments[0] === undefined ? '*' : arguments[0];

    return request(['KEYS', pattern]);
}

function randomKey() {
    return request(['RANDOMKEY']);
}

function select(index) {
    return request(['SELECT', index]);
}

var Key = exports.Key = function () {
    function Key(k) {
        _classCallCheck(this, Key);

        this.k = k;
    }

    _createClass(Key, [{
        key: 'r',
        value: function r() {
            for (var _len3 = arguments.length, cmdparams = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                cmdparams[_key3] = arguments[_key3];
            }

            cmdparams.splice(1, 0, this.k);
            return request(cmdparams);
        }
    }, {
        key: 'append',
        value: function append(v) {
            return this.r('APPEND', v);
        }

        // bitfield operations not implemented

    }, {
        key: 'decr',
        value: function decr() {
            return this.r('DECR');
        }
    }, {
        key: 'decrBy',
        value: function decrBy(amount) {
            return this.r('DECRBY', amount);
        }
    }, {
        key: 'del',
        value: function del() {
            return this.r('DEL');
        }

        /*
         * DUMP seems to do nothing on webdis
         */

    }, {
        key: 'exists',
        value: function exists() {
            return this.r('EXISTS');
        }
    }, {
        key: 'expire',
        value: function expire(seconds) {
            return this.r('EXPIRE', seconds);
        }
    }, {
        key: 'expireAt',
        value: function expireAt(unixts) {
            return this.r('EXPIREAT', unixts);
        }
    }, {
        key: 'getRange',
        value: function getRange(starts, ends) {
            return this.r('GETRANGE', starts, ends);
        }
    }, {
        key: 'getSet',
        value: function getSet(v) {
            return this.r('GETSET', v);
        }
    }, {
        key: 'get',
        value: function get() {
            return this.r('GET');
        }
    }, {
        key: 'incr',
        value: function incr() {
            return this.r('INCR');
        }
    }, {
        key: 'incrBy',
        value: function incrBy(increment) {
            return this.r('INCRBY', increment);
        }
    }, {
        key: 'incrByFloat',
        value: function incrByFloat(increment) {
            return this.r('INCRBYFLOAT', increment);
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
    }, {
        key: 'rename',
        value: function rename(newk) {
            var myPromise = this.r('RENAME', newk);
            this.k = newk;
            return myPromise;
        }

        // no RENAMENX
        // need .then clause for RENAMENX to adjust this.k conditionally 

    }, {
        key: 'restore',
        value: function restore(ttl, sval) {
            return this.r('RESTORE', ttl, sval);
        }
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
    }, {
        key: 'setnx',
        value: function setnx(v) {
            return this.r('SETNX', v);
        }
    }, {
        key: 'setRange',
        value: function setRange(offset, v) {
            return this.r('SETRANGE', offset, v);
        }
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

function key(k) {
    return new Key(k);
}

function objectFromKVArray(A) {
    // eslint-disable-line no-unused-vars
    if (A.length === 0) return {};
    var o = {};
    for (var i = 1, l = A.length; i < l; i += 2) {
        o[i - 1] = i;
    }return o;
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
        key: 'incrby',
        value: function incrby(f, inc) {
            return this.r('HINCRBY', f, inc);
        }
    }, {
        key: 'incrbyfloat',
        value: function incrbyfloat(f, floatInc) {
            return this.r('HINCRBYFLOAT', f, floatInc);
        }
    }, {
        key: 'hkeys',
        value: function hkeys() {
            return this.r('HKEYS');
        }
    }, {
        key: 'hvals',
        value: function hvals() {
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
