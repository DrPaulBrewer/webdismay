"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.request = request;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global: fetch */

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) return response;
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function stringifyObjects(x) {
    return (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" ? JSON.stringify(x) : x;
}

function tryParseObjects(obj) {
    if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
        var mykeys = Object.keys(obj);
        for (var i = 0, l = mykeys.length; i < l; ++i) {
            var k = mykeys[i];
            var v = obj[k];
            if (typeof v === 'string') {
                try {
                    obj[k] = JSON.parse(v);
                } catch (e) {
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

function request(command) {
    var endPoint = arguments.length <= 1 || arguments[1] === undefined ? "/" : arguments[1];

    return fetch(endPoint, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: command.map(stringifyObjects).map(encodeURIComponent).join("/")
    }).then(checkStatus).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data[command[0]];
    }).then(tryParseObjects);
}

function asPairArray(obj) {
    var mykeys = Object.keys(obj);
    var result = [];
    for (var i = 0, l = mykeys.length; i < l; ++i) {
        result.push(mykeys[i], obj[mykeys[i]]);
    }return result;
}

var Connection = exports.Connection = function () {
    function Connection() {
        var endPoint = arguments.length <= 0 || arguments[0] === undefined ? "/" : arguments[0];

        _classCallCheck(this, Connection);

        this.endPoint = endPoint;
    }

    _createClass(Connection, [{
        key: "r",
        value: function r(cmd) {
            var params = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

            return request([cmd].concat(params), this.endPoint);
        }
    }, {
        key: "auth",
        value: function auth(password) {
            return this.r('AUTH', password);
        }
    }, {
        key: "echo",
        value: function echo(m) {
            return this.r('ECHO', m);
        }
    }, {
        key: "ping",
        value: function ping(m) {
            return this.r('PING', m);
        }
    }, {
        key: "wait",
        value: function wait(numslaves, timeout) {
            return this.r('WAIT', [numslaves, timeout]);
        }
    }]);

    return Connection;
}();

var Generic = exports.Generic = function () {
    function Generic() {
        var endPoint = arguments.length <= 0 || arguments[0] === undefined ? "/" : arguments[0];

        _classCallCheck(this, Generic);

        this.endPoint = endPoint;
    }

    _createClass(Generic, [{
        key: "r",
        value: function r(cmd) {
            var params = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

            return request([cmd].concat(params), this.endPoint);
        }
    }, {
        key: "mget",
        value: function mget() {
            for (var _len = arguments.length, manykeys = Array(_len), _key = 0; _key < _len; _key++) {
                manykeys[_key] = arguments[_key];
            }

            return this.r('MGET', manykeys);
        }
    }, {
        key: "mset",
        value: function mset(obj) {
            return this.r('MSET', asPairArray(obj));
        }
    }, {
        key: "msetnx",
        value: function msetnx(obj) {
            return this.r('MSETNX', asPairArray(obj));
        }
    }, {
        key: "keysMatching",
        value: function keysMatching() {
            var pattern = arguments.length <= 0 || arguments[0] === undefined ? '*' : arguments[0];

            return this.r('KEYS', pattern);
        }
    }, {
        key: "randomKey",
        value: function randomKey() {
            return this.r('RANDOMKEY');
        }
    }, {
        key: "select",
        value: function select(index) {
            return this.r('SELECT', index);
        }
    }]);

    return Generic;
}();

var Key = exports.Key = function () {
    function Key(k) {
        var endPoint = arguments.length <= 1 || arguments[1] === undefined ? "/" : arguments[1];

        _classCallCheck(this, Key);

        this.k = k;
        this.endPoint = endPoint;
    }

    _createClass(Key, [{
        key: "r",
        value: function r() {
            for (var _len2 = arguments.length, cmdparams = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                cmdparams[_key2] = arguments[_key2];
            }

            cmdparams.splice(1, this.k);
            return request(cmdparams, this.endPoint);
        }
    }, {
        key: "append",
        value: function append(v) {
            return this.r('APPEND', v);
        }

        // bitfield operations not implemented

    }, {
        key: "decr",
        value: function decr() {
            return this.r('DECR');
        }
    }, {
        key: "decrBy",
        value: function decrBy(amount) {
            return this.r('DECRBY', amount);
        }
    }, {
        key: "del",
        value: function del() {
            return this.r('DEL');
        }
    }, {
        key: "dump",
        value: function dump() {
            return this.r('DUMP');
        }
    }, {
        key: "exists",
        value: function exists() {
            return this.r('EXISTS');
        }
    }, {
        key: "expire",
        value: function expire(seconds) {
            return this.r('EXPIRE', seconds);
        }
    }, {
        key: "expireAt",
        value: function expireAt(unixts) {
            return this.r('EXPIREAT', unixts);
        }
    }, {
        key: "getRange",
        value: function getRange(starts, ends) {
            return this.r('GETRANGE', starts, ends);
        }
    }, {
        key: "getSet",
        value: function getSet(v) {
            return this.r('GETSET', v);
        }
    }, {
        key: "get",
        value: function get() {
            return this.r('GET');
        }
    }, {
        key: "incr",
        value: function incr() {
            return this.r('INCR');
        }
    }, {
        key: "incrBy",
        value: function incrBy(increment) {
            return this.r('INCRBY', increment);
        }
    }, {
        key: "incrByFloat",
        value: function incrByFloat(increment) {
            return this.r('INCRBYFLOAT', increment);
        }
    }, {
        key: "moveToDB",
        value: function moveToDB(db) {
            return this.r('MOVE', db);
        }
    }, {
        key: "persist",
        value: function persist() {
            return this.r('PERSIST');
        }
    }, {
        key: "pExpire",
        value: function pExpire(ms) {
            return this.r('PEXPIRE', ms);
        }
    }, {
        key: "pExpireAt",
        value: function pExpireAt(jsts) {
            return this.r('PEXPIREAT', jsts);
        }
    }, {
        key: "pSetEx",
        value: function pSetEx(ms, v) {
            return this.r('PSETEX', ms, v);
        }
    }, {
        key: "pTTL",
        value: function pTTL() {
            return this.r('PTTL');
        }
    }, {
        key: "rename",
        value: function rename(newk) {
            var myPromise = this.r('RENAME', newk);
            this.k = newk;
            return myPromise;
        }

        // no RENAMENX
        // need .then clause for RENAMENX to adjust this.k conditionally 

    }, {
        key: "restore",
        value: function restore(ttl, sval) {
            return this.r('RESTORE', ttl, sval);
        }
    }, {
        key: "set",
        value: function set(v) {
            return this.r('SET', v);
        }
    }, {
        key: "setEx",
        value: function setEx(sec, v) {
            return this.r('SETEX', sec, v);
        }
    }, {
        key: "setnx",
        value: function setnx(v) {
            return this.r('SETNX', v);
        }
    }, {
        key: "setrange",
        value: function setrange(offset, v) {
            return this.r('SETRANGE', offset, v);
        }
    }, {
        key: "strlen",
        value: function strlen() {
            return this.r('STRLEN');
        }
    }, {
        key: "ttl",
        value: function ttl() {
            return this.r('TTL');
        }
    }, {
        key: "type",
        value: function type() {
            return this.r('TYPE');
        }
    }]);

    return Key;
}();

var Hash = exports.Hash = function () {
    function Hash(k) {
        var endPoint = arguments.length <= 1 || arguments[1] === undefined ? "/" : arguments[1];

        _classCallCheck(this, Hash);

        this.k = k;
        this.endPoint = endPoint;
    }

    _createClass(Hash, [{
        key: "r",
        value: function r(cmd) {
            var params = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

            return request([cmd, this.k].concat(params), this.endPoint);
        }
    }, {
        key: "deleteAll",
        value: function deleteAll() {
            return this.r('DEL');
        }
    }, {
        key: "del",
        value: function del(f) {
            return this.r('HDEL', f);
        }
    }, {
        key: "getAll",
        value: function getAll() {
            return this.r('HGETALL');
        }
    }, {
        key: "getField",
        value: function getField(f) {
            return this.r('HGET', [f]);
        }
    }, {
        key: "setnx",
        value: function setnx(f, v) {
            return this.r('HSETNX', [f, v]);
        }
    }, {
        key: "setAll",
        value: function setAll(obj) {
            var k = this.k;
            var mycmd = ['MULTI', 'DEL', k, 'HMSET', k].concat(asPairArray(obj), 'EXEC');
            return request(mycmd, this.endPoint);
        }
    }, {
        key: "update",
        value: function update(obj) {
            return this.r('HMSET', asPairArray(obj));
        }
    }, {
        key: "incrby",
        value: function incrby(f, inc) {
            return this.r('HINCRBY', f, inc);
        }
    }, {
        key: "incrbyfloat",
        value: function incrbyfloat(f, floatInc) {
            return this.r('HINCRBYFLOAT', f, floatInc);
        }
    }, {
        key: "hkeys",
        value: function hkeys() {
            return this.r('HKEYS');
        }
    }, {
        key: "hvals",
        value: function hvals() {
            return this.r('HVALS');
        }
    }, {
        key: "len",
        value: function len() {
            return this.r('HLEN');
        }
    }]);

    return Hash;
}();
