!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(self) {
    'use strict';
    if (self.fetch) {
      return;
    }
    var support = {
      searchParams: 'URLSearchParams' in self,
      iterable: 'Symbol' in self && 'iterator' in Symbol,
      blob: 'FileReader' in self && 'Blob' in self && (function() {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      })(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };
    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
      }
      return name.toLowerCase();
    }
    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }
      return value;
    }
    function iteratorFor(items) {
      var iterator = {next: function() {
          var value = items.shift();
          return {
            done: value === undefined,
            value: value
          };
        }};
      if (support.iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }
      return iterator;
    }
    function Headers(headers) {
      this.map = {};
      if (headers instanceof Headers) {
        headers.forEach(function(value, name) {
          this.append(name, value);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function(name) {
          this.append(name, headers[name]);
        }, this);
      }
    }
    Headers.prototype.append = function(name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var list = this.map[name];
      if (!list) {
        list = [];
        this.map[name] = list;
      }
      list.push(value);
    };
    Headers.prototype['delete'] = function(name) {
      delete this.map[normalizeName(name)];
    };
    Headers.prototype.get = function(name) {
      var values = this.map[normalizeName(name)];
      return values ? values[0] : null;
    };
    Headers.prototype.getAll = function(name) {
      return this.map[normalizeName(name)] || [];
    };
    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers.prototype.set = function(name, value) {
      this.map[normalizeName(name)] = [normalizeValue(value)];
    };
    Headers.prototype.forEach = function(callback, thisArg) {
      Object.getOwnPropertyNames(this.map).forEach(function(name) {
        this.map[name].forEach(function(value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    };
    Headers.prototype.keys = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push(name);
      });
      return iteratorFor(items);
    };
    Headers.prototype.values = function() {
      var items = [];
      this.forEach(function(value) {
        items.push(value);
      });
      return iteratorFor(items);
    };
    Headers.prototype.entries = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
      });
      return iteratorFor(items);
    };
    if (support.iterable) {
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }
      body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
      return new Promise(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      });
    }
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return fileReaderReady(reader);
    }
    function readBlobAsText(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      return fileReaderReady(reader);
    }
    function Body() {
      this.bodyUsed = false;
      this._initBody = function(body) {
        this._bodyInit = body;
        if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (!body) {
          this._bodyText = '';
        } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {} else {
          throw new Error('unsupported BodyInit type');
        }
        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };
      if (support.blob) {
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };
        this.arrayBuffer = function() {
          return this.blob().then(readBlobAsArrayBuffer);
        };
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text');
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
      } else {
        this.text = function() {
          var rejected = consumed(this);
          return rejected ? rejected : Promise.resolve(this._bodyText);
        };
      }
      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode);
        };
      }
      this.json = function() {
        return this.text().then(JSON.parse);
      };
      return this;
    }
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return (methods.indexOf(upcased) > -1) ? upcased : method;
    }
    function Request(input, options) {
      options = options || {};
      var body = options.body;
      if (Request.prototype.isPrototypeOf(input)) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!body) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = input;
      }
      this.credentials = options.credentials || this.credentials || 'omit';
      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.referrer = null;
      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }
      this._initBody(body);
    }
    Request.prototype.clone = function() {
      return new Request(this);
    };
    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }
    function headers(xhr) {
      var head = new Headers();
      var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n');
      pairs.forEach(function(header) {
        var split = header.trim().split(':');
        var key = split.shift().trim();
        var value = split.join(':').trim();
        head.append(key, value);
      });
      return head;
    }
    Body.call(Request.prototype);
    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }
      this.type = 'default';
      this.status = options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText;
      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      this.url = options.url || '';
      this._initBody(bodyInit);
    }
    Body.call(Response.prototype);
    Response.prototype.clone = function() {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };
    Response.error = function() {
      var response = new Response(null, {
        status: 0,
        statusText: ''
      });
      response.type = 'error';
      return response;
    };
    var redirectStatuses = [301, 302, 303, 307, 308];
    Response.redirect = function(url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
      }
      return new Response(null, {
        status: status,
        headers: {location: url}
      });
    };
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
    self.fetch = function(input, init) {
      return new Promise(function(resolve, reject) {
        var request;
        if (Request.prototype.isPrototypeOf(input) && !init) {
          request = input;
        } else {
          request = new Request(input, init);
        }
        var xhr = new XMLHttpRequest();
        function responseURL() {
          if ('responseURL' in xhr) {
            return xhr.responseURL;
          }
          if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
            return xhr.getResponseHeader('X-Request-URL');
          }
          return;
        }
        xhr.onload = function() {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: headers(xhr),
            url: responseURL()
          };
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        };
        xhr.ontimeout = function() {
          reject(new TypeError('Network request failed'));
        };
        xhr.open(request.method, request.url, true);
        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        }
        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    };
    self.fetch.polyfill = true;
  })(typeof self !== 'undefined' ? self : this);
  return module.exports;
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2');
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("5", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('4');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("6", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('5'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("7", ["6"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('6')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('9');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("d", ["c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('c');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("e", ["b", "f", "d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('b'),
      core = $__require('f'),
      ctx = $__require('d'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("10", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("11", ["e", "f", "10"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('e'),
      core = $__require('f'),
      fails = $__require('10');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("12", ["a", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('a');
  $__require('11')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("13", ["12", "f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('12');
  module.exports = $__require('f').Object.keys;
  return module.exports;
});

$__System.registerDynamic("14", ["13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('13'),
    __esModule: true
  };
  return module.exports;
});

$__System.register("15", ["7", "8", "14"], function (_export) {
    var _createClass, _classCallCheck, _Object$keys, Connection, Generic, Key, Hash;

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) return response;
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }

    function stringifyObjects(x) {
        return typeof x === "object" ? JSON.stringify(x) : x;
    }

    function tryParseObjects(obj) {
        if (typeof obj === "object") {
            var mykeys = _Object$keys(obj);
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
        var mykeys = _Object$keys(obj);
        var result = [];
        for (var i = 0, l = mykeys.length; i < l; ++i) {
            result.push(mykeys[i], obj[mykeys[i]]);
        }return result;
    }

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            _Object$keys = _3["default"];
        }],
        execute: function () {
            /* global: fetch */"use strict";

            _export("request", request);

            Connection = (function () {
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
            })();

            _export("Connection", Connection);

            Generic = (function () {
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
            })();

            _export("Generic", Generic);

            Key = (function () {
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

                        cmdparams.splice(1, 0, this.k);
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
            })();

            _export("Key", Key);

            Hash = (function () {
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
            })();

            _export("Hash", Hash);
        }
    };
});
$__System.register("1", ["3", "15"], function (_export) {
    /* eslint no-console:off, newline-per-chained-call:off */
    /* globals QUnit:true */

    "use strict";

    var W;
    return {
        setters: [function (_) {}, function (_2) {
            W = _2;
        }],
        execute: function () {

            QUnit.test("Webdismay W exists", function (assert) {
                assert.expect(1);
                assert.ok(W, "W exists");
            });

            QUnit.test("W has Key, Hash constructors", function (assert) {
                assert.expect(2);
                assert.ok(typeof W.Key === "function", "W.Key");
                assert.ok(typeof W.Hash === "function", "W.Hash");
            });

            QUnit.test("this test intentionally fails", function (assert) {
                assert.expect(1);
                assert.ok(false, "should fail");
            });

            QUnit.test("local CSV create", function (assert) {
                assert.expect(1);
                var done = assert.async();
                new W.Key('test123').set(42)["catch"](function (e) {
                    assert.ok(false, 'promise resolved to error:' + e);
                    done();
                }).then(function (result) {
                    assert.ok(result && result[0], 'promise resolved to array with true as 1st element');
                    done();
                });
            });
        }
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle.js.map