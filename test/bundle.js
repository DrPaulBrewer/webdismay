!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
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
(function() {
var define = $__System.amdDefine;
(function(global) {
  var QUnit = {};
  var Date = global.Date;
  var now = Date.now || function() {
    return new Date().getTime();
  };
  var setTimeout = global.setTimeout;
  var clearTimeout = global.clearTimeout;
  var window = global.window;
  var defined = {
    document: window && window.document !== undefined,
    setTimeout: setTimeout !== undefined,
    sessionStorage: (function() {
      var x = "qunit-test-string";
      try {
        sessionStorage.setItem(x, x);
        sessionStorage.removeItem(x);
        return true;
      } catch (e) {
        return false;
      }
    }())
  };
  var fileName = (sourceFromStacktrace(0) || "").replace(/(:\d+)+\)?/, "").replace(/.+\//, "");
  var globalStartCalled = false;
  var runStarted = false;
  var autorun = false;
  var toString = Object.prototype.toString,
      hasOwn = Object.prototype.hasOwnProperty;
  function diff(a, b) {
    var i,
        j,
        result = a.slice();
    for (i = 0; i < result.length; i++) {
      for (j = 0; j < b.length; j++) {
        if (result[i] === b[j]) {
          result.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return result;
  }
  function inArray(elem, array) {
    if (array.indexOf) {
      return array.indexOf(elem);
    }
    for (var i = 0,
        length = array.length; i < length; i++) {
      if (array[i] === elem) {
        return i;
      }
    }
    return -1;
  }
  function objectValues(obj) {
    var key,
        val,
        vals = QUnit.is("array", obj) ? [] : {};
    for (key in obj) {
      if (hasOwn.call(obj, key)) {
        val = obj[key];
        vals[key] = val === Object(val) ? objectValues(val) : val;
      }
    }
    return vals;
  }
  function extend(a, b, undefOnly) {
    for (var prop in b) {
      if (hasOwn.call(b, prop)) {
        if (b[prop] === undefined) {
          delete a[prop];
        } else if (!(undefOnly && typeof a[prop] !== "undefined")) {
          a[prop] = b[prop];
        }
      }
    }
    return a;
  }
  function objectType(obj) {
    if (typeof obj === "undefined") {
      return "undefined";
    }
    if (obj === null) {
      return "null";
    }
    var match = toString.call(obj).match(/^\[object\s(.*)\]$/),
        type = match && match[1];
    switch (type) {
      case "Number":
        if (isNaN(obj)) {
          return "nan";
        }
        return "number";
      case "String":
      case "Boolean":
      case "Array":
      case "Set":
      case "Map":
      case "Date":
      case "RegExp":
      case "Function":
      case "Symbol":
        return type.toLowerCase();
    }
    if (typeof obj === "object") {
      return "object";
    }
  }
  function is(type, obj) {
    return QUnit.objectType(obj) === type;
  }
  function extractStacktrace(e, offset) {
    offset = offset === undefined ? 4 : offset;
    var stack,
        include,
        i;
    if (e.stack) {
      stack = e.stack.split("\n");
      if (/^error$/i.test(stack[0])) {
        stack.shift();
      }
      if (fileName) {
        include = [];
        for (i = offset; i < stack.length; i++) {
          if (stack[i].indexOf(fileName) !== -1) {
            break;
          }
          include.push(stack[i]);
        }
        if (include.length) {
          return include.join("\n");
        }
      }
      return stack[offset];
    }
  }
  function sourceFromStacktrace(offset) {
    var error = new Error();
    if (!error.stack) {
      try {
        throw error;
      } catch (err) {
        error = err;
      }
    }
    return extractStacktrace(error, offset);
  }
  var config = {
    queue: [],
    blocking: true,
    reorder: true,
    altertitle: true,
    collapse: true,
    scrolltop: true,
    maxDepth: 5,
    requireExpects: false,
    urlConfig: [],
    modules: [],
    moduleStack: [],
    currentModule: {
      name: "",
      tests: []
    },
    callbacks: {}
  };
  config.modules.push(config.currentModule);
  function registerLoggingCallbacks(obj) {
    var i,
        l,
        key,
        callbackNames = ["begin", "done", "log", "testStart", "testDone", "moduleStart", "moduleDone"];
    function registerLoggingCallback(key) {
      var loggingCallback = function(callback) {
        if (objectType(callback) !== "function") {
          throw new Error("QUnit logging methods require a callback function as their first parameters.");
        }
        config.callbacks[key].push(callback);
      };
      return loggingCallback;
    }
    for (i = 0, l = callbackNames.length; i < l; i++) {
      key = callbackNames[i];
      if (objectType(config.callbacks[key]) === "undefined") {
        config.callbacks[key] = [];
      }
      obj[key] = registerLoggingCallback(key);
    }
  }
  function runLoggingCallbacks(key, args) {
    var i,
        l,
        callbacks;
    callbacks = config.callbacks[key];
    for (i = 0, l = callbacks.length; i < l; i++) {
      callbacks[i](args);
    }
  }
  (function() {
    if (!defined.document) {
      return;
    }
    var onErrorFnPrev = window.onerror;
    window.onerror = function(error, filePath, linerNr) {
      var ret = false;
      if (onErrorFnPrev) {
        ret = onErrorFnPrev(error, filePath, linerNr);
      }
      if (ret !== true) {
        if (QUnit.config.current) {
          if (QUnit.config.current.ignoreGlobalErrors) {
            return true;
          }
          QUnit.pushFailure(error, filePath + ":" + linerNr);
        } else {
          QUnit.test("global failure", extend(function() {
            QUnit.pushFailure(error, filePath + ":" + linerNr);
          }, {validTest: true}));
        }
        return false;
      }
      return ret;
    };
  }());
  QUnit.isLocal = !(defined.document && window.location.protocol !== "file:");
  QUnit.version = "2.0.0";
  extend(QUnit, {
    module: function(name, testEnvironment, executeNow) {
      var module,
          moduleFns;
      var currentModule = config.currentModule;
      if (arguments.length === 2) {
        if (objectType(testEnvironment) === "function") {
          executeNow = testEnvironment;
          testEnvironment = undefined;
        }
      }
      module = createModule();
      if (testEnvironment && (testEnvironment.setup || testEnvironment.teardown)) {
        console.warn("Module's `setup` and `teardown` are not hooks anymore on QUnit 2.0, use " + "`beforeEach` and `afterEach` instead\n" + "Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/");
      }
      moduleFns = {
        before: setHook(module, "before"),
        beforeEach: setHook(module, "beforeEach"),
        afterEach: setHook(module, "afterEach"),
        after: setHook(module, "after")
      };
      if (objectType(executeNow) === "function") {
        config.moduleStack.push(module);
        setCurrentModule(module);
        executeNow.call(module.testEnvironment, moduleFns);
        config.moduleStack.pop();
        module = module.parentModule || currentModule;
      }
      setCurrentModule(module);
      function createModule() {
        var parentModule = config.moduleStack.length ? config.moduleStack.slice(-1)[0] : null;
        var moduleName = parentModule !== null ? [parentModule.name, name].join(" > ") : name;
        var module = {
          name: moduleName,
          parentModule: parentModule,
          tests: [],
          moduleId: generateHash(moduleName),
          testsRun: 0
        };
        var env = {};
        if (parentModule) {
          parentModule.childModule = module;
          extend(env, parentModule.testEnvironment);
          delete env.beforeEach;
          delete env.afterEach;
        }
        extend(env, testEnvironment);
        module.testEnvironment = env;
        config.modules.push(module);
        return module;
      }
      function setCurrentModule(module) {
        config.currentModule = module;
      }
    },
    test: test,
    skip: skip,
    only: only,
    start: function(count) {
      var globalStartAlreadyCalled = globalStartCalled;
      if (!config.current) {
        globalStartCalled = true;
        if (runStarted) {
          throw new Error("Called start() while test already started running");
        } else if (globalStartAlreadyCalled || count > 1) {
          throw new Error("Called start() outside of a test context too many times");
        } else if (config.autostart) {
          throw new Error("Called start() outside of a test context when " + "QUnit.config.autostart was true");
        } else if (!config.pageLoaded) {
          config.autostart = true;
          return;
        }
      } else {
        throw new Error("QUnit.start cannot be called inside a test context. This feature is removed in " + "QUnit 2.0. For async tests, use QUnit.test() with assert.async() instead.\n" + "Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/");
      }
      resumeProcessing();
    },
    config: config,
    is: is,
    objectType: objectType,
    extend: extend,
    load: function() {
      config.pageLoaded = true;
      extend(config, {
        stats: {
          all: 0,
          bad: 0
        },
        moduleStats: {
          all: 0,
          bad: 0
        },
        started: 0,
        updateRate: 1000,
        autostart: true,
        filter: ""
      }, true);
      config.blocking = false;
      if (config.autostart) {
        resumeProcessing();
      }
    },
    stack: function(offset) {
      offset = (offset || 0) + 2;
      return sourceFromStacktrace(offset);
    }
  });
  registerLoggingCallbacks(QUnit);
  function begin() {
    var i,
        l,
        modulesLog = [];
    if (!config.started) {
      config.started = now();
      if (config.modules[0].name === "" && config.modules[0].tests.length === 0) {
        config.modules.shift();
      }
      for (i = 0, l = config.modules.length; i < l; i++) {
        modulesLog.push({
          name: config.modules[i].name,
          tests: config.modules[i].tests
        });
      }
      runLoggingCallbacks("begin", {
        totalTests: Test.count,
        modules: modulesLog
      });
    }
    config.blocking = false;
    process(true);
  }
  function process(last) {
    function next() {
      process(last);
    }
    var start = now();
    config.depth = (config.depth || 0) + 1;
    while (config.queue.length && !config.blocking) {
      if (!defined.setTimeout || config.updateRate <= 0 || ((now() - start) < config.updateRate)) {
        if (config.current) {
          config.current.usedAsync = false;
        }
        config.queue.shift()();
      } else {
        setTimeout(next, 13);
        break;
      }
    }
    config.depth--;
    if (last && !config.blocking && !config.queue.length && config.depth === 0) {
      done();
    }
  }
  function pauseProcessing(test) {
    config.blocking = true;
    if (config.testTimeout && defined.setTimeout) {
      clearTimeout(config.timeout);
      config.timeout = setTimeout(function() {
        test.semaphore = 0;
        QUnit.pushFailure("Test timed out", sourceFromStacktrace(2));
        resumeProcessing(test);
      }, config.testTimeout);
    }
  }
  function resumeProcessing(test) {
    runStarted = true;
    if (defined.setTimeout) {
      setTimeout(function() {
        var current = test || config.current;
        if (current && (current.semaphore > 0 || current.resumed)) {
          return;
        }
        if (config.timeout) {
          clearTimeout(config.timeout);
        }
        if (current) {
          current.resumed = true;
        }
        begin();
      }, 13);
    } else {
      begin();
    }
  }
  function done() {
    var runtime,
        passed;
    autorun = true;
    if (config.previousModule) {
      runLoggingCallbacks("moduleDone", {
        name: config.previousModule.name,
        tests: config.previousModule.tests,
        failed: config.moduleStats.bad,
        passed: config.moduleStats.all - config.moduleStats.bad,
        total: config.moduleStats.all,
        runtime: now() - config.moduleStats.started
      });
    }
    delete config.previousModule;
    runtime = now() - config.started;
    passed = config.stats.all - config.stats.bad;
    runLoggingCallbacks("done", {
      failed: config.stats.bad,
      passed: passed,
      total: config.stats.all,
      runtime: runtime
    });
  }
  function setHook(module, hookName) {
    if (module.testEnvironment === undefined) {
      module.testEnvironment = {};
    }
    return function(callback) {
      module.testEnvironment[hookName] = callback;
    };
  }
  var unitSampler,
      focused = false,
      priorityCount = 0;
  function Test(settings) {
    var i,
        l;
    ++Test.count;
    this.expected = null;
    extend(this, settings);
    this.assertions = [];
    this.semaphore = 0;
    this.usedAsync = false;
    this.module = config.currentModule;
    this.stack = sourceFromStacktrace(3);
    for (i = 0, l = this.module.tests; i < l.length; i++) {
      if (this.module.tests[i].name === this.testName) {
        this.testName += " ";
      }
    }
    this.testId = generateHash(this.module.name, this.testName);
    this.module.tests.push({
      name: this.testName,
      testId: this.testId
    });
    if (settings.skip) {
      this.callback = function() {};
      this.async = false;
      this.expected = 0;
    } else {
      this.assert = new Assert(this);
    }
  }
  Test.count = 0;
  Test.prototype = {
    before: function() {
      if (this.module !== config.previousModule || !hasOwn.call(config, "previousModule")) {
        if (hasOwn.call(config, "previousModule")) {
          runLoggingCallbacks("moduleDone", {
            name: config.previousModule.name,
            tests: config.previousModule.tests,
            failed: config.moduleStats.bad,
            passed: config.moduleStats.all - config.moduleStats.bad,
            total: config.moduleStats.all,
            runtime: now() - config.moduleStats.started
          });
        }
        config.previousModule = this.module;
        config.moduleStats = {
          all: 0,
          bad: 0,
          started: now()
        };
        runLoggingCallbacks("moduleStart", {
          name: this.module.name,
          tests: this.module.tests
        });
      }
      config.current = this;
      if (this.module.testEnvironment) {
        delete this.module.testEnvironment.before;
        delete this.module.testEnvironment.beforeEach;
        delete this.module.testEnvironment.afterEach;
        delete this.module.testEnvironment.after;
      }
      this.testEnvironment = extend({}, this.module.testEnvironment);
      this.started = now();
      runLoggingCallbacks("testStart", {
        name: this.testName,
        module: this.module.name,
        testId: this.testId
      });
      if (!config.pollution) {
        saveGlobal();
      }
    },
    run: function() {
      var promise;
      config.current = this;
      if (this.async) {
        internalStop(this);
      }
      this.callbackStarted = now();
      if (config.notrycatch) {
        runTest(this);
        return;
      }
      try {
        runTest(this);
      } catch (e) {
        this.pushFailure("Died on test #" + (this.assertions.length + 1) + " " + this.stack + ": " + (e.message || e), extractStacktrace(e, 0));
        saveGlobal();
        if (config.blocking) {
          internalStart(this);
        }
      }
      function runTest(test) {
        promise = test.callback.call(test.testEnvironment, test.assert);
        test.resolvePromise(promise);
      }
    },
    after: function() {
      checkPollution();
    },
    queueHook: function(hook, hookName, hookOwner) {
      var promise,
          test = this;
      return function runHook() {
        if (hookName === "before") {
          if (hookOwner.testsRun !== 0) {
            return;
          }
          test.preserveEnvironment = true;
        }
        if (hookName === "after" && hookOwner.testsRun !== numberOfTests(hookOwner) - 1) {
          return;
        }
        config.current = test;
        if (config.notrycatch) {
          callHook();
          return;
        }
        try {
          callHook();
        } catch (error) {
          test.pushFailure(hookName + " failed on " + test.testName + ": " + (error.message || error), extractStacktrace(error, 0));
        }
        function callHook() {
          promise = hook.call(test.testEnvironment, test.assert);
          test.resolvePromise(promise, hookName);
        }
      };
    },
    hooks: function(handler) {
      var hooks = [];
      function processHooks(test, module) {
        if (module.parentModule) {
          processHooks(test, module.parentModule);
        }
        if (module.testEnvironment && QUnit.objectType(module.testEnvironment[handler]) === "function") {
          hooks.push(test.queueHook(module.testEnvironment[handler], handler, module));
        }
      }
      if (!this.skip) {
        processHooks(this, this.module);
      }
      return hooks;
    },
    finish: function() {
      config.current = this;
      if (config.requireExpects && this.expected === null) {
        this.pushFailure("Expected number of assertions to be defined, but expect() was " + "not called.", this.stack);
      } else if (this.expected !== null && this.expected !== this.assertions.length) {
        this.pushFailure("Expected " + this.expected + " assertions, but " + this.assertions.length + " were run", this.stack);
      } else if (this.expected === null && !this.assertions.length) {
        this.pushFailure("Expected at least one assertion, but none were run - call " + "expect(0) to accept zero assertions.", this.stack);
      }
      var i,
          bad = 0;
      this.runtime = now() - this.started;
      config.stats.all += this.assertions.length;
      config.moduleStats.all += this.assertions.length;
      for (i = 0; i < this.assertions.length; i++) {
        if (!this.assertions[i].result) {
          bad++;
          config.stats.bad++;
          config.moduleStats.bad++;
        }
      }
      notifyTestsRan(this.module);
      runLoggingCallbacks("testDone", {
        name: this.testName,
        module: this.module.name,
        skipped: !!this.skip,
        failed: bad,
        passed: this.assertions.length - bad,
        total: this.assertions.length,
        runtime: this.runtime,
        assertions: this.assertions,
        testId: this.testId,
        source: this.stack
      });
      config.current = undefined;
    },
    preserveTestEnvironment: function() {
      if (this.preserveEnvironment) {
        this.module.testEnvironment = this.testEnvironment;
        this.testEnvironment = extend({}, this.module.testEnvironment);
      }
    },
    queue: function() {
      var priority,
          test = this;
      if (!this.valid()) {
        return;
      }
      function run() {
        synchronize([function() {
          test.before();
        }, test.hooks("before"), function() {
          test.preserveTestEnvironment();
        }, test.hooks("beforeEach"), function() {
          test.run();
        }, test.hooks("afterEach").reverse(), test.hooks("after").reverse(), function() {
          test.after();
        }, function() {
          test.finish();
        }]);
      }
      priority = QUnit.config.reorder && defined.sessionStorage && +sessionStorage.getItem("qunit-test-" + this.module.name + "-" + this.testName);
      return synchronize(run, priority, config.seed);
    },
    pushResult: function(resultInfo) {
      var source,
          details = {
            module: this.module.name,
            name: this.testName,
            result: resultInfo.result,
            message: resultInfo.message,
            actual: resultInfo.actual,
            expected: resultInfo.expected,
            testId: this.testId,
            negative: resultInfo.negative || false,
            runtime: now() - this.started
          };
      if (!resultInfo.result) {
        source = sourceFromStacktrace();
        if (source) {
          details.source = source;
        }
      }
      runLoggingCallbacks("log", details);
      this.assertions.push({
        result: !!resultInfo.result,
        message: resultInfo.message
      });
    },
    pushFailure: function(message, source, actual) {
      if (!(this instanceof Test)) {
        throw new Error("pushFailure() assertion outside test context, was " + sourceFromStacktrace(2));
      }
      var details = {
        module: this.module.name,
        name: this.testName,
        result: false,
        message: message || "error",
        actual: actual || null,
        testId: this.testId,
        runtime: now() - this.started
      };
      if (source) {
        details.source = source;
      }
      runLoggingCallbacks("log", details);
      this.assertions.push({
        result: false,
        message: message
      });
    },
    resolvePromise: function(promise, phase) {
      var then,
          message,
          test = this;
      if (promise != null) {
        then = promise.then;
        if (QUnit.objectType(then) === "function") {
          internalStop(test);
          then.call(promise, function() {
            internalStart(test);
          }, function(error) {
            message = "Promise rejected " + (!phase ? "during" : phase.replace(/Each$/, "")) + " " + test.testName + ": " + (error.message || error);
            test.pushFailure(message, extractStacktrace(error, 0));
            saveGlobal();
            internalStart(test);
          });
        }
      }
    },
    valid: function() {
      var filter = config.filter,
          regexFilter = /^(!?)\/([\w\W]*)\/(i?$)/.exec(filter),
          module = config.module && config.module.toLowerCase(),
          fullName = (this.module.name + ": " + this.testName);
      function moduleChainNameMatch(testModule) {
        var testModuleName = testModule.name ? testModule.name.toLowerCase() : null;
        if (testModuleName === module) {
          return true;
        } else if (testModule.parentModule) {
          return moduleChainNameMatch(testModule.parentModule);
        } else {
          return false;
        }
      }
      function moduleChainIdMatch(testModule) {
        return inArray(testModule.moduleId, config.moduleId) > -1 || testModule.parentModule && moduleChainIdMatch(testModule.parentModule);
      }
      if (this.callback && this.callback.validTest) {
        return true;
      }
      if (config.moduleId && config.moduleId.length > 0 && !moduleChainIdMatch(this.module)) {
        return false;
      }
      if (config.testId && config.testId.length > 0 && inArray(this.testId, config.testId) < 0) {
        return false;
      }
      if (module && !moduleChainNameMatch(this.module)) {
        return false;
      }
      if (!filter) {
        return true;
      }
      return regexFilter ? this.regexFilter(!!regexFilter[1], regexFilter[2], regexFilter[3], fullName) : this.stringFilter(filter, fullName);
    },
    regexFilter: function(exclude, pattern, flags, fullName) {
      var regex = new RegExp(pattern, flags);
      var match = regex.test(fullName);
      return match !== exclude;
    },
    stringFilter: function(filter, fullName) {
      filter = filter.toLowerCase();
      fullName = fullName.toLowerCase();
      var include = filter.charAt(0) !== "!";
      if (!include) {
        filter = filter.slice(1);
      }
      if (fullName.indexOf(filter) !== -1) {
        return include;
      }
      return !include;
    }
  };
  QUnit.pushFailure = function() {
    if (!QUnit.config.current) {
      throw new Error("pushFailure() assertion outside test context, in " + sourceFromStacktrace(2));
    }
    var currentTest = QUnit.config.current;
    return currentTest.pushFailure.apply(currentTest, arguments);
  };
  function generateHash(module, testName) {
    var hex,
        i = 0,
        hash = 0,
        str = module + "\x1C" + testName,
        len = str.length;
    for (; i < len; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    hex = (0x100000000 + hash).toString(16);
    if (hex.length < 8) {
      hex = "0000000" + hex;
    }
    return hex.slice(-8);
  }
  function synchronize(callback, priority, seed) {
    var last = !priority,
        index;
    if (QUnit.objectType(callback) === "array") {
      while (callback.length) {
        synchronize(callback.shift());
      }
      return;
    }
    if (priority) {
      config.queue.splice(priorityCount++, 0, callback);
    } else if (seed) {
      if (!unitSampler) {
        unitSampler = unitSamplerGenerator(seed);
      }
      index = Math.floor(unitSampler() * (config.queue.length - priorityCount + 1));
      config.queue.splice(priorityCount + index, 0, callback);
    } else {
      config.queue.push(callback);
    }
    if (autorun && !config.blocking) {
      process(last);
    }
  }
  function unitSamplerGenerator(seed) {
    var sample = parseInt(generateHash(seed), 16) || -1;
    return function() {
      sample ^= sample << 13;
      sample ^= sample >>> 17;
      sample ^= sample << 5;
      if (sample < 0) {
        sample += 0x100000000;
      }
      return sample / 0x100000000;
    };
  }
  function saveGlobal() {
    config.pollution = [];
    if (config.noglobals) {
      for (var key in global) {
        if (hasOwn.call(global, key)) {
          if (/^qunit-test-output/.test(key)) {
            continue;
          }
          config.pollution.push(key);
        }
      }
    }
  }
  function checkPollution() {
    var newGlobals,
        deletedGlobals,
        old = config.pollution;
    saveGlobal();
    newGlobals = diff(config.pollution, old);
    if (newGlobals.length > 0) {
      QUnit.pushFailure("Introduced global variable(s): " + newGlobals.join(", "));
    }
    deletedGlobals = diff(old, config.pollution);
    if (deletedGlobals.length > 0) {
      QUnit.pushFailure("Deleted global variable(s): " + deletedGlobals.join(", "));
    }
  }
  function test(testName, callback) {
    if (focused) {
      return;
    }
    var newTest;
    newTest = new Test({
      testName: testName,
      callback: callback
    });
    newTest.queue();
  }
  function skip(testName) {
    if (focused) {
      return;
    }
    var test = new Test({
      testName: testName,
      skip: true
    });
    test.queue();
  }
  function only(testName, callback) {
    var newTest;
    if (focused) {
      return;
    }
    QUnit.config.queue.length = 0;
    focused = true;
    newTest = new Test({
      testName: testName,
      callback: callback
    });
    newTest.queue();
  }
  function internalStop(test) {
    test.semaphore += 1;
    pauseProcessing(test);
  }
  function internalStart(test) {
    test.semaphore -= 1;
    if (isNaN(test.semaphore)) {
      test.semaphore = 0;
      QUnit.pushFailure("Invalid value on test.semaphore", sourceFromStacktrace(2));
      return;
    }
    if (test.semaphore > 0) {
      return;
    }
    if (test.semaphore < 0) {
      test.semaphore = 0;
      QUnit.pushFailure("Tried to restart test while already started (test's semaphore was 0 already)", sourceFromStacktrace(2));
      return;
    }
    resumeProcessing(test);
  }
  function numberOfTests(module) {
    var count = module.tests.length;
    while (module = module.childModule) {
      count += module.tests.length;
    }
    return count;
  }
  function notifyTestsRan(module) {
    module.testsRun++;
    while (module = module.parentModule) {
      module.testsRun++;
    }
  }
  function Assert(testContext) {
    this.test = testContext;
  }
  QUnit.assert = Assert.prototype = {
    expect: function(asserts) {
      if (arguments.length === 1) {
        this.test.expected = asserts;
      } else {
        return this.test.expected;
      }
    },
    async: function(count) {
      var test = this.test,
          popped = false,
          acceptCallCount = count;
      if (typeof acceptCallCount === "undefined") {
        acceptCallCount = 1;
      }
      test.semaphore += 1;
      test.usedAsync = true;
      pauseProcessing(test);
      return function done() {
        if (popped) {
          test.pushFailure("Too many calls to the `assert.async` callback", sourceFromStacktrace(2));
          return;
        }
        acceptCallCount -= 1;
        if (acceptCallCount > 0) {
          return;
        }
        test.semaphore -= 1;
        popped = true;
        resumeProcessing(test);
      };
    },
    push: function(result, actual, expected, message, negative) {
      var currentAssert = this instanceof Assert ? this : QUnit.config.current.assert;
      return currentAssert.pushResult({
        result: result,
        actual: actual,
        expected: expected,
        message: message,
        negative: negative
      });
    },
    pushResult: function(resultInfo) {
      var assert = this,
          currentTest = (assert instanceof Assert && assert.test) || QUnit.config.current;
      if (!currentTest) {
        throw new Error("assertion outside test context, in " + sourceFromStacktrace(2));
      }
      if (currentTest.usedAsync === true && currentTest.semaphore === 0) {
        currentTest.pushFailure("Assertion after the final `assert.async` was resolved", sourceFromStacktrace(2));
      }
      if (!(assert instanceof Assert)) {
        assert = currentTest.assert;
      }
      return assert.test.pushResult(resultInfo);
    },
    ok: function(result, message) {
      message = message || (result ? "okay" : "failed, expected argument to be truthy, was: " + QUnit.dump.parse(result));
      this.pushResult({
        result: !!result,
        actual: result,
        expected: true,
        message: message
      });
    },
    notOk: function(result, message) {
      message = message || (!result ? "okay" : "failed, expected argument to be falsy, was: " + QUnit.dump.parse(result));
      this.pushResult({
        result: !result,
        actual: result,
        expected: false,
        message: message
      });
    },
    equal: function(actual, expected, message) {
      this.pushResult({
        result: expected == actual,
        actual: actual,
        expected: expected,
        message: message
      });
    },
    notEqual: function(actual, expected, message) {
      this.pushResult({
        result: expected != actual,
        actual: actual,
        expected: expected,
        message: message,
        negative: true
      });
    },
    propEqual: function(actual, expected, message) {
      actual = objectValues(actual);
      expected = objectValues(expected);
      this.pushResult({
        result: QUnit.equiv(actual, expected),
        actual: actual,
        expected: expected,
        message: message
      });
    },
    notPropEqual: function(actual, expected, message) {
      actual = objectValues(actual);
      expected = objectValues(expected);
      this.pushResult({
        result: !QUnit.equiv(actual, expected),
        actual: actual,
        expected: expected,
        message: message,
        negative: true
      });
    },
    deepEqual: function(actual, expected, message) {
      this.pushResult({
        result: QUnit.equiv(actual, expected),
        actual: actual,
        expected: expected,
        message: message
      });
    },
    notDeepEqual: function(actual, expected, message) {
      this.pushResult({
        result: !QUnit.equiv(actual, expected),
        actual: actual,
        expected: expected,
        message: message,
        negative: true
      });
    },
    strictEqual: function(actual, expected, message) {
      this.pushResult({
        result: expected === actual,
        actual: actual,
        expected: expected,
        message: message
      });
    },
    notStrictEqual: function(actual, expected, message) {
      this.pushResult({
        result: expected !== actual,
        actual: actual,
        expected: expected,
        message: message,
        negative: true
      });
    },
    "throws": function(block, expected, message) {
      var actual,
          expectedType,
          expectedOutput = expected,
          ok = false,
          currentTest = (this instanceof Assert && this.test) || QUnit.config.current;
      if (QUnit.objectType(expected) === "string") {
        if (message == null) {
          message = expected;
          expected = null;
        } else {
          throw new Error("throws/raises does not accept a string value for the expected argument.\n" + "Use a non-string object value (e.g. regExp) instead if it's necessary." + "Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/");
        }
      }
      currentTest.ignoreGlobalErrors = true;
      try {
        block.call(currentTest.testEnvironment);
      } catch (e) {
        actual = e;
      }
      currentTest.ignoreGlobalErrors = false;
      if (actual) {
        expectedType = QUnit.objectType(expected);
        if (!expected) {
          ok = true;
          expectedOutput = null;
        } else if (expectedType === "regexp") {
          ok = expected.test(errorString(actual));
        } else if (expectedType === "function" && actual instanceof expected) {
          ok = true;
        } else if (expectedType === "object") {
          ok = actual instanceof expected.constructor && actual.name === expected.name && actual.message === expected.message;
        } else if (expectedType === "function" && expected.call({}, actual) === true) {
          expectedOutput = null;
          ok = true;
        }
      }
      currentTest.assert.pushResult({
        result: ok,
        actual: actual,
        expected: expectedOutput,
        message: message
      });
    }
  };
  (function() {
    Assert.prototype.raises = Assert.prototype["throws"];
  }());
  function errorString(error) {
    var name,
        message,
        resultErrorString = error.toString();
    if (resultErrorString.substring(0, 7) === "[object") {
      name = error.name ? error.name.toString() : "Error";
      message = error.message ? error.message.toString() : "";
      if (name && message) {
        return name + ": " + message;
      } else if (name) {
        return name;
      } else if (message) {
        return message;
      } else {
        return "Error";
      }
    } else {
      return resultErrorString;
    }
  }
  QUnit.equiv = (function() {
    var callers = [];
    var parents = [];
    var parentsB = [];
    var getProto = Object.getPrototypeOf || function(obj) {
      return obj.__proto__;
    };
    function useStrictEquality(b, a) {
      if (typeof a === "object") {
        a = a.valueOf();
      }
      if (typeof b === "object") {
        b = b.valueOf();
      }
      return a === b;
    }
    function compareConstructors(a, b) {
      var protoA = getProto(a);
      var protoB = getProto(b);
      if (a.constructor === b.constructor) {
        return true;
      }
      if (protoA && protoA.constructor === null) {
        protoA = null;
      }
      if (protoB && protoB.constructor === null) {
        protoB = null;
      }
      if ((protoA === null && protoB === Object.prototype) || (protoB === null && protoA === Object.prototype)) {
        return true;
      }
      return false;
    }
    function getRegExpFlags(regexp) {
      return "flags" in regexp ? regexp.flags : regexp.toString().match(/[gimuy]*$/)[0];
    }
    var callbacks = {
      "string": useStrictEquality,
      "boolean": useStrictEquality,
      "number": useStrictEquality,
      "null": useStrictEquality,
      "undefined": useStrictEquality,
      "symbol": useStrictEquality,
      "date": useStrictEquality,
      "nan": function() {
        return true;
      },
      "regexp": function(b, a) {
        return a.source === b.source && getRegExpFlags(a) === getRegExpFlags(b);
      },
      "function": function() {
        var caller = callers[callers.length - 1];
        return caller !== Object && typeof caller !== "undefined";
      },
      "array": function(b, a) {
        var i,
            j,
            len,
            loop,
            aCircular,
            bCircular;
        len = a.length;
        if (len !== b.length) {
          return false;
        }
        parents.push(a);
        parentsB.push(b);
        for (i = 0; i < len; i++) {
          loop = false;
          for (j = 0; j < parents.length; j++) {
            aCircular = parents[j] === a[i];
            bCircular = parentsB[j] === b[i];
            if (aCircular || bCircular) {
              if (a[i] === b[i] || aCircular && bCircular) {
                loop = true;
              } else {
                parents.pop();
                parentsB.pop();
                return false;
              }
            }
          }
          if (!loop && !innerEquiv(a[i], b[i])) {
            parents.pop();
            parentsB.pop();
            return false;
          }
        }
        parents.pop();
        parentsB.pop();
        return true;
      },
      "set": function(b, a) {
        var innerEq,
            outerEq = true;
        if (a.size !== b.size) {
          return false;
        }
        a.forEach(function(aVal) {
          innerEq = false;
          b.forEach(function(bVal) {
            if (innerEquiv(bVal, aVal)) {
              innerEq = true;
            }
          });
          if (!innerEq) {
            outerEq = false;
          }
        });
        return outerEq;
      },
      "map": function(b, a) {
        var innerEq,
            outerEq = true;
        if (a.size !== b.size) {
          return false;
        }
        a.forEach(function(aVal, aKey) {
          innerEq = false;
          b.forEach(function(bVal, bKey) {
            if (innerEquiv([bVal, bKey], [aVal, aKey])) {
              innerEq = true;
            }
          });
          if (!innerEq) {
            outerEq = false;
          }
        });
        return outerEq;
      },
      "object": function(b, a) {
        var i,
            j,
            loop,
            aCircular,
            bCircular;
        var eq = true;
        var aProperties = [];
        var bProperties = [];
        if (compareConstructors(a, b) === false) {
          return false;
        }
        callers.push(a.constructor);
        parents.push(a);
        parentsB.push(b);
        for (i in a) {
          loop = false;
          for (j = 0; j < parents.length; j++) {
            aCircular = parents[j] === a[i];
            bCircular = parentsB[j] === b[i];
            if (aCircular || bCircular) {
              if (a[i] === b[i] || aCircular && bCircular) {
                loop = true;
              } else {
                eq = false;
                break;
              }
            }
          }
          aProperties.push(i);
          if (!loop && !innerEquiv(a[i], b[i])) {
            eq = false;
            break;
          }
        }
        parents.pop();
        parentsB.pop();
        callers.pop();
        for (i in b) {
          bProperties.push(i);
        }
        return eq && innerEquiv(aProperties.sort(), bProperties.sort());
      }
    };
    function typeEquiv(a, b) {
      var type = QUnit.objectType(a);
      return QUnit.objectType(b) === type && callbacks[type](b, a);
    }
    function innerEquiv(a, b) {
      if (arguments.length < 2) {
        return true;
      }
      return (a === b || typeEquiv(a, b)) && (arguments.length === 2 || innerEquiv.apply(this, [].slice.call(arguments, 1)));
    }
    return innerEquiv;
  }());
  QUnit.dump = (function() {
    function quote(str) {
      return "\"" + str.toString().replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
    }
    function literal(o) {
      return o + "";
    }
    function join(pre, arr, post) {
      var s = dump.separator(),
          base = dump.indent(),
          inner = dump.indent(1);
      if (arr.join) {
        arr = arr.join("," + s + inner);
      }
      if (!arr) {
        return pre + post;
      }
      return [pre, inner + arr, base + post].join(s);
    }
    function array(arr, stack) {
      var i = arr.length,
          ret = new Array(i);
      if (dump.maxDepth && dump.depth > dump.maxDepth) {
        return "[object Array]";
      }
      this.up();
      while (i--) {
        ret[i] = this.parse(arr[i], undefined, stack);
      }
      this.down();
      return join("[", ret, "]");
    }
    function isArray(obj) {
      return (toString.call(obj) === "[object Array]" || (typeof obj.length === "number" && obj.item !== undefined) && (obj.length ? obj.item(0) === obj[0] : (obj.item(0) === null && obj[0] === undefined)));
    }
    var reName = /^function (\w+)/,
        dump = {
          parse: function(obj, objType, stack) {
            stack = stack || [];
            var res,
                parser,
                parserType,
                inStack = inArray(obj, stack);
            if (inStack !== -1) {
              return "recursion(" + (inStack - stack.length) + ")";
            }
            objType = objType || this.typeOf(obj);
            parser = this.parsers[objType];
            parserType = typeof parser;
            if (parserType === "function") {
              stack.push(obj);
              res = parser.call(this, obj, stack);
              stack.pop();
              return res;
            }
            return (parserType === "string") ? parser : this.parsers.error;
          },
          typeOf: function(obj) {
            var type;
            if (obj === null) {
              type = "null";
            } else if (typeof obj === "undefined") {
              type = "undefined";
            } else if (QUnit.is("regexp", obj)) {
              type = "regexp";
            } else if (QUnit.is("date", obj)) {
              type = "date";
            } else if (QUnit.is("function", obj)) {
              type = "function";
            } else if (obj.setInterval !== undefined && obj.document !== undefined && obj.nodeType === undefined) {
              type = "window";
            } else if (obj.nodeType === 9) {
              type = "document";
            } else if (obj.nodeType) {
              type = "node";
            } else if (isArray(obj)) {
              type = "array";
            } else if (obj.constructor === Error.prototype.constructor) {
              type = "error";
            } else {
              type = typeof obj;
            }
            return type;
          },
          separator: function() {
            return this.multiline ? this.HTML ? "<br />" : "\n" : this.HTML ? "&#160;" : " ";
          },
          indent: function(extra) {
            if (!this.multiline) {
              return "";
            }
            var chr = this.indentChar;
            if (this.HTML) {
              chr = chr.replace(/\t/g, "   ").replace(/ /g, "&#160;");
            }
            return new Array(this.depth + (extra || 0)).join(chr);
          },
          up: function(a) {
            this.depth += a || 1;
          },
          down: function(a) {
            this.depth -= a || 1;
          },
          setParser: function(name, parser) {
            this.parsers[name] = parser;
          },
          quote: quote,
          literal: literal,
          join: join,
          depth: 1,
          maxDepth: QUnit.config.maxDepth,
          parsers: {
            window: "[Window]",
            document: "[Document]",
            error: function(error) {
              return "Error(\"" + error.message + "\")";
            },
            unknown: "[Unknown]",
            "null": "null",
            "undefined": "undefined",
            "function": function(fn) {
              var ret = "function",
                  name = "name" in fn ? fn.name : (reName.exec(fn) || [])[1];
              if (name) {
                ret += " " + name;
              }
              ret += "(";
              ret = [ret, dump.parse(fn, "functionArgs"), "){"].join("");
              return join(ret, dump.parse(fn, "functionCode"), "}");
            },
            array: array,
            nodelist: array,
            "arguments": array,
            object: function(map, stack) {
              var keys,
                  key,
                  val,
                  i,
                  nonEnumerableProperties,
                  ret = [];
              if (dump.maxDepth && dump.depth > dump.maxDepth) {
                return "[object Object]";
              }
              dump.up();
              keys = [];
              for (key in map) {
                keys.push(key);
              }
              nonEnumerableProperties = ["message", "name"];
              for (i in nonEnumerableProperties) {
                key = nonEnumerableProperties[i];
                if (key in map && inArray(key, keys) < 0) {
                  keys.push(key);
                }
              }
              keys.sort();
              for (i = 0; i < keys.length; i++) {
                key = keys[i];
                val = map[key];
                ret.push(dump.parse(key, "key") + ": " + dump.parse(val, undefined, stack));
              }
              dump.down();
              return join("{", ret, "}");
            },
            node: function(node) {
              var len,
                  i,
                  val,
                  open = dump.HTML ? "&lt;" : "<",
                  close = dump.HTML ? "&gt;" : ">",
                  tag = node.nodeName.toLowerCase(),
                  ret = open + tag,
                  attrs = node.attributes;
              if (attrs) {
                for (i = 0, len = attrs.length; i < len; i++) {
                  val = attrs[i].nodeValue;
                  if (val && val !== "inherit") {
                    ret += " " + attrs[i].nodeName + "=" + dump.parse(val, "attribute");
                  }
                }
              }
              ret += close;
              if (node.nodeType === 3 || node.nodeType === 4) {
                ret += node.nodeValue;
              }
              return ret + open + "/" + tag + close;
            },
            functionArgs: function(fn) {
              var args,
                  l = fn.length;
              if (!l) {
                return "";
              }
              args = new Array(l);
              while (l--) {
                args[l] = String.fromCharCode(97 + l);
              }
              return " " + args.join(", ") + " ";
            },
            key: quote,
            functionCode: "[code]",
            attribute: quote,
            string: quote,
            date: quote,
            regexp: literal,
            number: literal,
            "boolean": literal
          },
          HTML: false,
          indentChar: "  ",
          multiline: true
        };
    return dump;
  }());
  QUnit.jsDump = QUnit.dump;
  function applyDeprecated(name) {
    return function() {
      throw new Error(name + " is removed in QUnit 2.0.\n" + "Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/");
    };
  }
  Object.keys(Assert.prototype).forEach(function(key) {
    QUnit[key] = applyDeprecated("`QUnit." + key + "`");
  });
  QUnit.asyncTest = function() {
    throw new Error("asyncTest is removed in QUnit 2.0, use QUnit.test() with assert.async() instead.\n" + "Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/");
  };
  QUnit.stop = function() {
    throw new Error("QUnit.stop is removed in QUnit 2.0, use QUnit.test() with assert.async() instead.\n" + "Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/");
  };
  function resetThrower() {
    throw new Error("QUnit.reset is removed in QUnit 2.0 without replacement.\n" + "Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/");
  }
  Object.defineProperty(QUnit, "reset", {
    get: function() {
      return resetThrower;
    },
    set: resetThrower
  });
  if (defined.document) {
    if (window.QUnit) {
      throw new Error("QUnit has already been defined.");
    }
    ["test", "module", "expect", "start", "ok", "notOk", "equal", "notEqual", "propEqual", "notPropEqual", "deepEqual", "notDeepEqual", "strictEqual", "notStrictEqual", "throws", "raises"].forEach(function(key) {
      window[key] = applyDeprecated("The global `" + key + "`");
    });
    window.QUnit = QUnit;
  }
  if (typeof module !== "undefined" && module && module.exports) {
    module.exports = QUnit;
    module.exports.QUnit = QUnit;
  }
  if (typeof exports !== "undefined" && exports) {
    exports.QUnit = QUnit;
  }
  if (typeof define === "function" && define.amd) {
    define("16", [], function() {
      return QUnit;
    });
    QUnit.config.autostart = false;
  }
}((function() {
  return this;
}())));
(function() {
  if (typeof window === "undefined" || !window.document) {
    return;
  }
  var config = QUnit.config,
      hasOwn = Object.prototype.hasOwnProperty;
  function storeFixture() {
    if (hasOwn.call(config, "fixture")) {
      return;
    }
    var fixture = document.getElementById("qunit-fixture");
    if (fixture) {
      config.fixture = fixture.innerHTML;
    }
  }
  QUnit.begin(storeFixture);
  function resetFixture() {
    if (config.fixture == null) {
      return;
    }
    var fixture = document.getElementById("qunit-fixture");
    if (fixture) {
      fixture.innerHTML = config.fixture;
    }
  }
  QUnit.testStart(resetFixture);
}());
(function() {
  var location = typeof window !== "undefined" && window.location;
  if (!location) {
    return;
  }
  var urlParams = getUrlParams();
  QUnit.urlParams = urlParams;
  QUnit.config.moduleId = [].concat(urlParams.moduleId || []);
  QUnit.config.testId = [].concat(urlParams.testId || []);
  QUnit.config.module = urlParams.module;
  QUnit.config.filter = urlParams.filter;
  if (urlParams.seed === true) {
    QUnit.config.seed = Math.random().toString(36).slice(2);
  } else if (urlParams.seed) {
    QUnit.config.seed = urlParams.seed;
  }
  QUnit.config.urlConfig.push({
    id: "hidepassed",
    label: "Hide passed tests",
    tooltip: "Only show tests and assertions that fail. Stored as query-strings."
  }, {
    id: "noglobals",
    label: "Check for Globals",
    tooltip: "Enabling this will test if any test introduces new properties on the " + "global object (`window` in Browsers). Stored as query-strings."
  }, {
    id: "notrycatch",
    label: "No try-catch",
    tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging " + "exceptions in IE reasonable. Stored as query-strings."
  });
  QUnit.begin(function() {
    var i,
        option,
        urlConfig = QUnit.config.urlConfig;
    for (i = 0; i < urlConfig.length; i++) {
      option = QUnit.config.urlConfig[i];
      if (typeof option !== "string") {
        option = option.id;
      }
      if (QUnit.config[option] === undefined) {
        QUnit.config[option] = urlParams[option];
      }
    }
  });
  function getUrlParams() {
    var i,
        param,
        name,
        value;
    var urlParams = {};
    var params = location.search.slice(1).split("&");
    var length = params.length;
    for (i = 0; i < length; i++) {
      if (params[i]) {
        param = params[i].split("=");
        name = decodeQueryParam(param[0]);
        value = param.length === 1 || decodeQueryParam(param.slice(1).join("="));
        if (urlParams[name]) {
          urlParams[name] = [].concat(urlParams[name], value);
        } else {
          urlParams[name] = value;
        }
      }
    }
    return urlParams;
  }
  function decodeQueryParam(param) {
    return decodeURIComponent(param.replace(/\+/g, "%20"));
  }
  if (typeof window === "undefined" || !window.document) {
    return;
  }
  QUnit.init = function() {
    throw new Error("QUnit.init is removed in QUnit 2.0, use QUnit.test() with assert.async() instead.\n" + "Details in our upgrade guide at https://qunitjs.com/upgrade-guide-2.x/");
  };
  var config = QUnit.config,
      document = window.document,
      collapseNext = false,
      hasOwn = Object.prototype.hasOwnProperty,
      unfilteredUrl = setUrl({
        filter: undefined,
        module: undefined,
        moduleId: undefined,
        testId: undefined
      }),
      defined = {sessionStorage: (function() {
          var x = "qunit-test-string";
          try {
            sessionStorage.setItem(x, x);
            sessionStorage.removeItem(x);
            return true;
          } catch (e) {
            return false;
          }
        }())},
      modulesList = [];
  function escapeText(s) {
    if (!s) {
      return "";
    }
    s = s + "";
    return s.replace(/['"<>&]/g, function(s) {
      switch (s) {
        case "'":
          return "&#039;";
        case "\"":
          return "&quot;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
      }
    });
  }
  function addEvent(elem, type, fn) {
    elem.addEventListener(type, fn, false);
  }
  function removeEvent(elem, type, fn) {
    elem.removeEventListener(type, fn, false);
  }
  function addEvents(elems, type, fn) {
    var i = elems.length;
    while (i--) {
      addEvent(elems[i], type, fn);
    }
  }
  function hasClass(elem, name) {
    return (" " + elem.className + " ").indexOf(" " + name + " ") >= 0;
  }
  function addClass(elem, name) {
    if (!hasClass(elem, name)) {
      elem.className += (elem.className ? " " : "") + name;
    }
  }
  function toggleClass(elem, name, force) {
    if (force || typeof force === "undefined" && !hasClass(elem, name)) {
      addClass(elem, name);
    } else {
      removeClass(elem, name);
    }
  }
  function removeClass(elem, name) {
    var set = " " + elem.className + " ";
    while (set.indexOf(" " + name + " ") >= 0) {
      set = set.replace(" " + name + " ", " ");
    }
    elem.className = typeof set.trim === "function" ? set.trim() : set.replace(/^\s+|\s+$/g, "");
  }
  function id(name) {
    return document.getElementById && document.getElementById(name);
  }
  function interceptNavigation(ev) {
    applyUrlParams();
    if (ev && ev.preventDefault) {
      ev.preventDefault();
    }
    return false;
  }
  function getUrlConfigHtml() {
    var i,
        j,
        val,
        escaped,
        escapedTooltip,
        selection = false,
        urlConfig = config.urlConfig,
        urlConfigHtml = "";
    for (i = 0; i < urlConfig.length; i++) {
      val = config.urlConfig[i];
      if (typeof val === "string") {
        val = {
          id: val,
          label: val
        };
      }
      escaped = escapeText(val.id);
      escapedTooltip = escapeText(val.tooltip);
      if (!val.value || typeof val.value === "string") {
        urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'><input id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' type='checkbox'" + (val.value ? " value='" + escapeText(val.value) + "'" : "") + (config[val.id] ? " checked='checked'" : "") + " title='" + escapedTooltip + "' />" + escapeText(val.label) + "</label>";
      } else {
        urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'>" + val.label + ": </label><select id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' title='" + escapedTooltip + "'><option></option>";
        if (QUnit.is("array", val.value)) {
          for (j = 0; j < val.value.length; j++) {
            escaped = escapeText(val.value[j]);
            urlConfigHtml += "<option value='" + escaped + "'" + (config[val.id] === val.value[j] ? (selection = true) && " selected='selected'" : "") + ">" + escaped + "</option>";
          }
        } else {
          for (j in val.value) {
            if (hasOwn.call(val.value, j)) {
              urlConfigHtml += "<option value='" + escapeText(j) + "'" + (config[val.id] === j ? (selection = true) && " selected='selected'" : "") + ">" + escapeText(val.value[j]) + "</option>";
            }
          }
        }
        if (config[val.id] && !selection) {
          escaped = escapeText(config[val.id]);
          urlConfigHtml += "<option value='" + escaped + "' selected='selected' disabled='disabled'>" + escaped + "</option>";
        }
        urlConfigHtml += "</select>";
      }
    }
    return urlConfigHtml;
  }
  function toolbarChanged() {
    var updatedUrl,
        value,
        tests,
        field = this,
        params = {};
    if ("selectedIndex" in field) {
      value = field.options[field.selectedIndex].value || undefined;
    } else {
      value = field.checked ? (field.defaultValue || true) : undefined;
    }
    params[field.name] = value;
    updatedUrl = setUrl(params);
    if ("hidepassed" === field.name && "replaceState" in window.history) {
      QUnit.urlParams[field.name] = value;
      config[field.name] = value || false;
      tests = id("qunit-tests");
      if (tests) {
        toggleClass(tests, "hidepass", value || false);
      }
      window.history.replaceState(null, "", updatedUrl);
    } else {
      window.location = updatedUrl;
    }
  }
  function setUrl(params) {
    var key,
        arrValue,
        i,
        querystring = "?",
        location = window.location;
    params = QUnit.extend(QUnit.extend({}, QUnit.urlParams), params);
    for (key in params) {
      if (hasOwn.call(params, key) && params[key] !== undefined) {
        arrValue = [].concat(params[key]);
        for (i = 0; i < arrValue.length; i++) {
          querystring += encodeURIComponent(key);
          if (arrValue[i] !== true) {
            querystring += "=" + encodeURIComponent(arrValue[i]);
          }
          querystring += "&";
        }
      }
    }
    return location.protocol + "//" + location.host + location.pathname + querystring.slice(0, -1);
  }
  function applyUrlParams() {
    var i,
        selectedModules = [],
        modulesList = id("qunit-modulefilter-dropdown-list").getElementsByTagName("input"),
        filter = id("qunit-filter-input").value;
    for (i = 0; i < modulesList.length; i++) {
      if (modulesList[i].checked) {
        selectedModules.push(modulesList[i].value);
      }
    }
    window.location = setUrl({
      filter: (filter === "") ? undefined : filter,
      moduleId: (selectedModules.length === 0) ? undefined : selectedModules,
      module: undefined,
      testId: undefined
    });
  }
  function toolbarUrlConfigContainer() {
    var urlConfigContainer = document.createElement("span");
    urlConfigContainer.innerHTML = getUrlConfigHtml();
    addClass(urlConfigContainer, "qunit-url-config");
    addEvents(urlConfigContainer.getElementsByTagName("input"), "change", toolbarChanged);
    addEvents(urlConfigContainer.getElementsByTagName("select"), "change", toolbarChanged);
    return urlConfigContainer;
  }
  function toolbarLooseFilter() {
    var filter = document.createElement("form"),
        label = document.createElement("label"),
        input = document.createElement("input"),
        button = document.createElement("button");
    addClass(filter, "qunit-filter");
    label.innerHTML = "Filter: ";
    input.type = "text";
    input.value = config.filter || "";
    input.name = "filter";
    input.id = "qunit-filter-input";
    button.innerHTML = "Go";
    label.appendChild(input);
    filter.appendChild(label);
    filter.appendChild(document.createTextNode(" "));
    filter.appendChild(button);
    addEvent(filter, "submit", interceptNavigation);
    return filter;
  }
  function moduleListHtml() {
    var i,
        checked,
        html = "";
    for (i = 0; i < config.modules.length; i++) {
      if (config.modules[i].name !== "") {
        checked = config.moduleId.indexOf(config.modules[i].moduleId) > -1;
        html += "<li><label class='clickable" + (checked ? " checked" : "") + "'><input type='checkbox' " + "value='" + config.modules[i].moduleId + "'" + (checked ? " checked='checked'" : "") + " />" + escapeText(config.modules[i].name) + "</label></li>";
      }
    }
    return html;
  }
  function toolbarModuleFilter() {
    var allCheckbox,
        commit,
        reset,
        moduleFilter = document.createElement("form"),
        label = document.createElement("label"),
        moduleSearch = document.createElement("input"),
        dropDown = document.createElement("div"),
        actions = document.createElement("span"),
        dropDownList = document.createElement("ul"),
        dirty = false;
    moduleSearch.id = "qunit-modulefilter-search";
    addEvent(moduleSearch, "input", searchInput);
    addEvent(moduleSearch, "input", searchFocus);
    addEvent(moduleSearch, "focus", searchFocus);
    addEvent(moduleSearch, "click", searchFocus);
    label.id = "qunit-modulefilter-search-container";
    label.innerHTML = "Module: ";
    label.appendChild(moduleSearch);
    actions.id = "qunit-modulefilter-actions";
    actions.innerHTML = "<button style='display:none'>Apply</button>" + "<button type='reset' style='display:none'>Reset</button>" + "<label class='clickable" + (config.moduleId.length ? "" : " checked") + "'><input type='checkbox'" + (config.moduleId.length ? "" : " checked='checked'") + ">All modules</label>";
    allCheckbox = actions.lastChild.firstChild;
    commit = actions.firstChild;
    reset = commit.nextSibling;
    addEvent(commit, "click", applyUrlParams);
    dropDownList.id = "qunit-modulefilter-dropdown-list";
    dropDownList.innerHTML = moduleListHtml();
    dropDown.id = "qunit-modulefilter-dropdown";
    dropDown.style.display = "none";
    dropDown.appendChild(actions);
    dropDown.appendChild(dropDownList);
    addEvent(dropDown, "change", selectionChange);
    selectionChange();
    moduleFilter.id = "qunit-modulefilter";
    moduleFilter.appendChild(label);
    moduleFilter.appendChild(dropDown);
    addEvent(moduleFilter, "submit", interceptNavigation);
    addEvent(moduleFilter, "reset", function() {
      window.setTimeout(selectionChange);
    });
    function searchFocus() {
      if (dropDown.style.display !== "none") {
        return;
      }
      dropDown.style.display = "block";
      addEvent(document, "click", hideHandler);
      addEvent(document, "keydown", hideHandler);
      function hideHandler(e) {
        var inContainer = moduleFilter.contains(e.target);
        if (e.keyCode === 27 || !inContainer) {
          if (e.keyCode === 27 && inContainer) {
            moduleSearch.focus();
          }
          dropDown.style.display = "none";
          removeEvent(document, "click", hideHandler);
          removeEvent(document, "keydown", hideHandler);
          moduleSearch.value = "";
          searchInput();
        }
      }
    }
    function searchInput() {
      var i,
          item,
          searchText = moduleSearch.value.toLowerCase(),
          listItems = dropDownList.children;
      for (i = 0; i < listItems.length; i++) {
        item = listItems[i];
        if (!searchText || item.textContent.toLowerCase().indexOf(searchText) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      }
    }
    function selectionChange(evt) {
      var i,
          checkbox = evt && evt.target || allCheckbox,
          modulesList = dropDownList.getElementsByTagName("input"),
          selectedNames = [];
      toggleClass(checkbox.parentNode, "checked", checkbox.checked);
      dirty = false;
      if (checkbox.checked && checkbox !== allCheckbox) {
        allCheckbox.checked = false;
        removeClass(allCheckbox.parentNode, "checked");
      }
      for (i = 0; i < modulesList.length; i++) {
        if (!evt) {
          toggleClass(modulesList[i].parentNode, "checked", modulesList[i].checked);
        } else if (checkbox === allCheckbox && checkbox.checked) {
          modulesList[i].checked = false;
          removeClass(modulesList[i].parentNode, "checked");
        }
        dirty = dirty || (checkbox.checked !== checkbox.defaultChecked);
        if (modulesList[i].checked) {
          selectedNames.push(modulesList[i].parentNode.textContent);
        }
      }
      commit.style.display = reset.style.display = dirty ? "" : "none";
      moduleSearch.placeholder = selectedNames.join(", ") || allCheckbox.parentNode.textContent;
      moduleSearch.title = "Type to filter list. Current selection:\n" + (selectedNames.join("\n") || allCheckbox.parentNode.textContent);
    }
    return moduleFilter;
  }
  function appendToolbar() {
    var toolbar = id("qunit-testrunner-toolbar");
    if (toolbar) {
      toolbar.appendChild(toolbarUrlConfigContainer());
      toolbar.appendChild(toolbarModuleFilter());
      toolbar.appendChild(toolbarLooseFilter());
      toolbar.appendChild(document.createElement("div")).className = "clearfix";
    }
  }
  function appendHeader() {
    var header = id("qunit-header");
    if (header) {
      header.innerHTML = "<a href='" + escapeText(unfilteredUrl) + "'>" + header.innerHTML + "</a> ";
    }
  }
  function appendBanner() {
    var banner = id("qunit-banner");
    if (banner) {
      banner.className = "";
    }
  }
  function appendTestResults() {
    var tests = id("qunit-tests"),
        result = id("qunit-testresult");
    if (result) {
      result.parentNode.removeChild(result);
    }
    if (tests) {
      tests.innerHTML = "";
      result = document.createElement("p");
      result.id = "qunit-testresult";
      result.className = "result";
      tests.parentNode.insertBefore(result, tests);
      result.innerHTML = "Running...<br />&#160;";
    }
  }
  function appendFilteredTest() {
    var testId = QUnit.config.testId;
    if (!testId || testId.length <= 0) {
      return "";
    }
    return "<div id='qunit-filteredTest'>Rerunning selected tests: " + escapeText(testId.join(", ")) + " <a id='qunit-clearFilter' href='" + escapeText(unfilteredUrl) + "'>Run all tests</a></div>";
  }
  function appendUserAgent() {
    var userAgent = id("qunit-userAgent");
    if (userAgent) {
      userAgent.innerHTML = "";
      userAgent.appendChild(document.createTextNode("QUnit " + QUnit.version + "; " + navigator.userAgent));
    }
  }
  function appendInterface() {
    var qunit = id("qunit");
    if (qunit) {
      qunit.innerHTML = "<h1 id='qunit-header'>" + escapeText(document.title) + "</h1>" + "<h2 id='qunit-banner'></h2>" + "<div id='qunit-testrunner-toolbar'></div>" + appendFilteredTest() + "<h2 id='qunit-userAgent'></h2>" + "<ol id='qunit-tests'></ol>";
    }
    appendHeader();
    appendBanner();
    appendTestResults();
    appendUserAgent();
    appendToolbar();
  }
  function appendTestsList(modules) {
    var i,
        l,
        x,
        z,
        test,
        moduleObj;
    for (i = 0, l = modules.length; i < l; i++) {
      moduleObj = modules[i];
      for (x = 0, z = moduleObj.tests.length; x < z; x++) {
        test = moduleObj.tests[x];
        appendTest(test.name, test.testId, moduleObj.name);
      }
    }
  }
  function appendTest(name, testId, moduleName) {
    var title,
        rerunTrigger,
        testBlock,
        assertList,
        tests = id("qunit-tests");
    if (!tests) {
      return;
    }
    title = document.createElement("strong");
    title.innerHTML = getNameHtml(name, moduleName);
    rerunTrigger = document.createElement("a");
    rerunTrigger.innerHTML = "Rerun";
    rerunTrigger.href = setUrl({testId: testId});
    testBlock = document.createElement("li");
    testBlock.appendChild(title);
    testBlock.appendChild(rerunTrigger);
    testBlock.id = "qunit-test-output-" + testId;
    assertList = document.createElement("ol");
    assertList.className = "qunit-assert-list";
    testBlock.appendChild(assertList);
    tests.appendChild(testBlock);
  }
  QUnit.begin(function(details) {
    var i,
        moduleObj,
        tests;
    for (i = 0; i < details.modules.length; i++) {
      moduleObj = details.modules[i];
      if (moduleObj.name) {
        modulesList.push(moduleObj.name);
      }
    }
    modulesList.sort(function(a, b) {
      return a.localeCompare(b);
    });
    appendInterface();
    appendTestsList(details.modules);
    tests = id("qunit-tests");
    if (tests && config.hidepassed) {
      addClass(tests, "hidepass");
    }
  });
  QUnit.done(function(details) {
    var i,
        key,
        banner = id("qunit-banner"),
        tests = id("qunit-tests"),
        html = ["Tests completed in ", details.runtime, " milliseconds.<br />", "<span class='passed'>", details.passed, "</span> assertions of <span class='total'>", details.total, "</span> passed, <span class='failed'>", details.failed, "</span> failed."].join("");
    if (banner) {
      banner.className = details.failed ? "qunit-fail" : "qunit-pass";
    }
    if (tests) {
      id("qunit-testresult").innerHTML = html;
    }
    if (config.altertitle && document.title) {
      document.title = [(details.failed ? "\u2716" : "\u2714"), document.title.replace(/^[\u2714\u2716] /i, "")].join(" ");
    }
    if (config.reorder && defined.sessionStorage && details.failed === 0) {
      for (i = 0; i < sessionStorage.length; i++) {
        key = sessionStorage.key(i++);
        if (key.indexOf("qunit-test-") === 0) {
          sessionStorage.removeItem(key);
        }
      }
    }
    if (config.scrolltop && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  });
  function getNameHtml(name, module) {
    var nameHtml = "";
    if (module) {
      nameHtml = "<span class='module-name'>" + escapeText(module) + "</span>: ";
    }
    nameHtml += "<span class='test-name'>" + escapeText(name) + "</span>";
    return nameHtml;
  }
  QUnit.testStart(function(details) {
    var running,
        testBlock,
        bad;
    testBlock = id("qunit-test-output-" + details.testId);
    if (testBlock) {
      testBlock.className = "running";
    } else {
      appendTest(details.name, details.testId, details.module);
    }
    running = id("qunit-testresult");
    if (running) {
      bad = QUnit.config.reorder && defined.sessionStorage && +sessionStorage.getItem("qunit-test-" + details.module + "-" + details.name);
      running.innerHTML = (bad ? "Rerunning previously failed test: <br />" : "Running: <br />") + getNameHtml(details.name, details.module);
    }
  });
  function stripHtml(string) {
    return string.replace(/<\/?[^>]+(>|$)/g, "").replace(/\&quot;/g, "").replace(/\s+/g, "");
  }
  QUnit.log(function(details) {
    var assertList,
        assertLi,
        message,
        expected,
        actual,
        diff,
        showDiff = false,
        testItem = id("qunit-test-output-" + details.testId);
    if (!testItem) {
      return;
    }
    message = escapeText(details.message) || (details.result ? "okay" : "failed");
    message = "<span class='test-message'>" + message + "</span>";
    message += "<span class='runtime'>@ " + details.runtime + " ms</span>";
    if (!details.result && hasOwn.call(details, "expected")) {
      if (details.negative) {
        expected = "NOT " + QUnit.dump.parse(details.expected);
      } else {
        expected = QUnit.dump.parse(details.expected);
      }
      actual = QUnit.dump.parse(details.actual);
      message += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" + escapeText(expected) + "</pre></td></tr>";
      if (actual !== expected) {
        message += "<tr class='test-actual'><th>Result: </th><td><pre>" + escapeText(actual) + "</pre></td></tr>";
        if (!(/^(true|false)$/.test(actual)) && !(/^(true|false)$/.test(expected))) {
          diff = QUnit.diff(expected, actual);
          showDiff = stripHtml(diff).length !== stripHtml(expected).length + stripHtml(actual).length;
        }
        if (showDiff) {
          message += "<tr class='test-diff'><th>Diff: </th><td><pre>" + diff + "</pre></td></tr>";
        }
      } else if (expected.indexOf("[object Array]") !== -1 || expected.indexOf("[object Object]") !== -1) {
        message += "<tr class='test-message'><th>Message: </th><td>" + "Diff suppressed as the depth of object is more than current max depth (" + QUnit.config.maxDepth + ").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to " + " run with a higher max depth or <a href='" + escapeText(setUrl({maxDepth: -1})) + "'>" + "Rerun</a> without max depth.</p></td></tr>";
      } else {
        message += "<tr class='test-message'><th>Message: </th><td>" + "Diff suppressed as the expected and actual results have an equivalent" + " serialization</td></tr>";
      }
      if (details.source) {
        message += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>";
      }
      message += "</table>";
    } else if (!details.result && details.source) {
      message += "<table>" + "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>" + "</table>";
    }
    assertList = testItem.getElementsByTagName("ol")[0];
    assertLi = document.createElement("li");
    assertLi.className = details.result ? "pass" : "fail";
    assertLi.innerHTML = message;
    assertList.appendChild(assertLi);
  });
  QUnit.testDone(function(details) {
    var testTitle,
        time,
        testItem,
        assertList,
        good,
        bad,
        testCounts,
        skipped,
        sourceName,
        tests = id("qunit-tests");
    if (!tests) {
      return;
    }
    testItem = id("qunit-test-output-" + details.testId);
    assertList = testItem.getElementsByTagName("ol")[0];
    good = details.passed;
    bad = details.failed;
    if (config.reorder && defined.sessionStorage) {
      if (bad) {
        sessionStorage.setItem("qunit-test-" + details.module + "-" + details.name, bad);
      } else {
        sessionStorage.removeItem("qunit-test-" + details.module + "-" + details.name);
      }
    }
    if (bad === 0) {
      addClass(assertList, "qunit-collapsed");
    } else if (bad && config.collapse && !collapseNext) {
      collapseNext = true;
    } else {
      addClass(assertList, "qunit-collapsed");
    }
    testTitle = testItem.firstChild;
    testCounts = bad ? "<b class='failed'>" + bad + "</b>, " + "<b class='passed'>" + good + "</b>, " : "";
    testTitle.innerHTML += " <b class='counts'>(" + testCounts + details.assertions.length + ")</b>";
    if (details.skipped) {
      testItem.className = "skipped";
      skipped = document.createElement("em");
      skipped.className = "qunit-skipped-label";
      skipped.innerHTML = "skipped";
      testItem.insertBefore(skipped, testTitle);
    } else {
      addEvent(testTitle, "click", function() {
        toggleClass(assertList, "qunit-collapsed");
      });
      testItem.className = bad ? "fail" : "pass";
      time = document.createElement("span");
      time.className = "runtime";
      time.innerHTML = details.runtime + " ms";
      testItem.insertBefore(time, assertList);
    }
    if (details.source) {
      sourceName = document.createElement("p");
      sourceName.innerHTML = "<strong>Source: </strong>" + details.source;
      addClass(sourceName, "qunit-source");
      if (bad === 0) {
        addClass(sourceName, "qunit-collapsed");
      }
      addEvent(testTitle, "click", function() {
        toggleClass(sourceName, "qunit-collapsed");
      });
      testItem.appendChild(sourceName);
    }
  });
  var notPhantom = (function(p) {
    return !(p && p.version && p.version.major > 0);
  })(window.phantom);
  if (notPhantom && document.readyState === "complete") {
    QUnit.load();
  } else {
    addEvent(window, "load", QUnit.load);
  }
  QUnit.diff = (function() {
    function DiffMatchPatch() {}
    var DIFF_DELETE = -1,
        DIFF_INSERT = 1,
        DIFF_EQUAL = 0;
    DiffMatchPatch.prototype.DiffMain = function(text1, text2, optChecklines) {
      var deadline,
          checklines,
          commonlength,
          commonprefix,
          commonsuffix,
          diffs;
      deadline = (new Date()).getTime() + 1000;
      if (text1 === null || text2 === null) {
        throw new Error("Null input. (DiffMain)");
      }
      if (text1 === text2) {
        if (text1) {
          return [[DIFF_EQUAL, text1]];
        }
        return [];
      }
      if (typeof optChecklines === "undefined") {
        optChecklines = true;
      }
      checklines = optChecklines;
      commonlength = this.diffCommonPrefix(text1, text2);
      commonprefix = text1.substring(0, commonlength);
      text1 = text1.substring(commonlength);
      text2 = text2.substring(commonlength);
      commonlength = this.diffCommonSuffix(text1, text2);
      commonsuffix = text1.substring(text1.length - commonlength);
      text1 = text1.substring(0, text1.length - commonlength);
      text2 = text2.substring(0, text2.length - commonlength);
      diffs = this.diffCompute(text1, text2, checklines, deadline);
      if (commonprefix) {
        diffs.unshift([DIFF_EQUAL, commonprefix]);
      }
      if (commonsuffix) {
        diffs.push([DIFF_EQUAL, commonsuffix]);
      }
      this.diffCleanupMerge(diffs);
      return diffs;
    };
    DiffMatchPatch.prototype.diffCleanupEfficiency = function(diffs) {
      var changes,
          equalities,
          equalitiesLength,
          lastequality,
          pointer,
          preIns,
          preDel,
          postIns,
          postDel;
      changes = false;
      equalities = [];
      equalitiesLength = 0;
      lastequality = null;
      pointer = 0;
      preIns = false;
      preDel = false;
      postIns = false;
      postDel = false;
      while (pointer < diffs.length) {
        if (diffs[pointer][0] === DIFF_EQUAL) {
          if (diffs[pointer][1].length < 4 && (postIns || postDel)) {
            equalities[equalitiesLength++] = pointer;
            preIns = postIns;
            preDel = postDel;
            lastequality = diffs[pointer][1];
          } else {
            equalitiesLength = 0;
            lastequality = null;
          }
          postIns = postDel = false;
        } else {
          if (diffs[pointer][0] === DIFF_DELETE) {
            postDel = true;
          } else {
            postIns = true;
          }
          if (lastequality && ((preIns && preDel && postIns && postDel) || ((lastequality.length < 2) && (preIns + preDel + postIns + postDel) === 3))) {
            diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
            diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
            equalitiesLength--;
            lastequality = null;
            if (preIns && preDel) {
              postIns = postDel = true;
              equalitiesLength = 0;
            } else {
              equalitiesLength--;
              pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
              postIns = postDel = false;
            }
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        this.diffCleanupMerge(diffs);
      }
    };
    DiffMatchPatch.prototype.diffPrettyHtml = function(diffs) {
      var op,
          data,
          x,
          html = [];
      for (x = 0; x < diffs.length; x++) {
        op = diffs[x][0];
        data = diffs[x][1];
        switch (op) {
          case DIFF_INSERT:
            html[x] = "<ins>" + escapeText(data) + "</ins>";
            break;
          case DIFF_DELETE:
            html[x] = "<del>" + escapeText(data) + "</del>";
            break;
          case DIFF_EQUAL:
            html[x] = "<span>" + escapeText(data) + "</span>";
            break;
        }
      }
      return html.join("");
    };
    DiffMatchPatch.prototype.diffCommonPrefix = function(text1, text2) {
      var pointermid,
          pointermax,
          pointermin,
          pointerstart;
      if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
        return 0;
      }
      pointermin = 0;
      pointermax = Math.min(text1.length, text2.length);
      pointermid = pointermax;
      pointerstart = 0;
      while (pointermin < pointermid) {
        if (text1.substring(pointerstart, pointermid) === text2.substring(pointerstart, pointermid)) {
          pointermin = pointermid;
          pointerstart = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      return pointermid;
    };
    DiffMatchPatch.prototype.diffCommonSuffix = function(text1, text2) {
      var pointermid,
          pointermax,
          pointermin,
          pointerend;
      if (!text1 || !text2 || text1.charAt(text1.length - 1) !== text2.charAt(text2.length - 1)) {
        return 0;
      }
      pointermin = 0;
      pointermax = Math.min(text1.length, text2.length);
      pointermid = pointermax;
      pointerend = 0;
      while (pointermin < pointermid) {
        if (text1.substring(text1.length - pointermid, text1.length - pointerend) === text2.substring(text2.length - pointermid, text2.length - pointerend)) {
          pointermin = pointermid;
          pointerend = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      return pointermid;
    };
    DiffMatchPatch.prototype.diffCompute = function(text1, text2, checklines, deadline) {
      var diffs,
          longtext,
          shorttext,
          i,
          hm,
          text1A,
          text2A,
          text1B,
          text2B,
          midCommon,
          diffsA,
          diffsB;
      if (!text1) {
        return [[DIFF_INSERT, text2]];
      }
      if (!text2) {
        return [[DIFF_DELETE, text1]];
      }
      longtext = text1.length > text2.length ? text1 : text2;
      shorttext = text1.length > text2.length ? text2 : text1;
      i = longtext.indexOf(shorttext);
      if (i !== -1) {
        diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
        if (text1.length > text2.length) {
          diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        }
        return diffs;
      }
      if (shorttext.length === 1) {
        return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
      }
      hm = this.diffHalfMatch(text1, text2);
      if (hm) {
        text1A = hm[0];
        text1B = hm[1];
        text2A = hm[2];
        text2B = hm[3];
        midCommon = hm[4];
        diffsA = this.DiffMain(text1A, text2A, checklines, deadline);
        diffsB = this.DiffMain(text1B, text2B, checklines, deadline);
        return diffsA.concat([[DIFF_EQUAL, midCommon]], diffsB);
      }
      if (checklines && text1.length > 100 && text2.length > 100) {
        return this.diffLineMode(text1, text2, deadline);
      }
      return this.diffBisect(text1, text2, deadline);
    };
    DiffMatchPatch.prototype.diffHalfMatch = function(text1, text2) {
      var longtext,
          shorttext,
          dmp,
          text1A,
          text2B,
          text2A,
          text1B,
          midCommon,
          hm1,
          hm2,
          hm;
      longtext = text1.length > text2.length ? text1 : text2;
      shorttext = text1.length > text2.length ? text2 : text1;
      if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
        return null;
      }
      dmp = this;
      function diffHalfMatchI(longtext, shorttext, i) {
        var seed,
            j,
            bestCommon,
            prefixLength,
            suffixLength,
            bestLongtextA,
            bestLongtextB,
            bestShorttextA,
            bestShorttextB;
        seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
        j = -1;
        bestCommon = "";
        while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
          prefixLength = dmp.diffCommonPrefix(longtext.substring(i), shorttext.substring(j));
          suffixLength = dmp.diffCommonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
          if (bestCommon.length < suffixLength + prefixLength) {
            bestCommon = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
            bestLongtextA = longtext.substring(0, i - suffixLength);
            bestLongtextB = longtext.substring(i + prefixLength);
            bestShorttextA = shorttext.substring(0, j - suffixLength);
            bestShorttextB = shorttext.substring(j + prefixLength);
          }
        }
        if (bestCommon.length * 2 >= longtext.length) {
          return [bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB, bestCommon];
        } else {
          return null;
        }
      }
      hm1 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 4));
      hm2 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 2));
      if (!hm1 && !hm2) {
        return null;
      } else if (!hm2) {
        hm = hm1;
      } else if (!hm1) {
        hm = hm2;
      } else {
        hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
      }
      text1A, text1B, text2A, text2B;
      if (text1.length > text2.length) {
        text1A = hm[0];
        text1B = hm[1];
        text2A = hm[2];
        text2B = hm[3];
      } else {
        text2A = hm[0];
        text2B = hm[1];
        text1A = hm[2];
        text1B = hm[3];
      }
      midCommon = hm[4];
      return [text1A, text1B, text2A, text2B, midCommon];
    };
    DiffMatchPatch.prototype.diffLineMode = function(text1, text2, deadline) {
      var a,
          diffs,
          linearray,
          pointer,
          countInsert,
          countDelete,
          textInsert,
          textDelete,
          j;
      a = this.diffLinesToChars(text1, text2);
      text1 = a.chars1;
      text2 = a.chars2;
      linearray = a.lineArray;
      diffs = this.DiffMain(text1, text2, false, deadline);
      this.diffCharsToLines(diffs, linearray);
      this.diffCleanupSemantic(diffs);
      diffs.push([DIFF_EQUAL, ""]);
      pointer = 0;
      countDelete = 0;
      countInsert = 0;
      textDelete = "";
      textInsert = "";
      while (pointer < diffs.length) {
        switch (diffs[pointer][0]) {
          case DIFF_INSERT:
            countInsert++;
            textInsert += diffs[pointer][1];
            break;
          case DIFF_DELETE:
            countDelete++;
            textDelete += diffs[pointer][1];
            break;
          case DIFF_EQUAL:
            if (countDelete >= 1 && countInsert >= 1) {
              diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert);
              pointer = pointer - countDelete - countInsert;
              a = this.DiffMain(textDelete, textInsert, false, deadline);
              for (j = a.length - 1; j >= 0; j--) {
                diffs.splice(pointer, 0, a[j]);
              }
              pointer = pointer + a.length;
            }
            countInsert = 0;
            countDelete = 0;
            textDelete = "";
            textInsert = "";
            break;
        }
        pointer++;
      }
      diffs.pop();
      return diffs;
    };
    DiffMatchPatch.prototype.diffBisect = function(text1, text2, deadline) {
      var text1Length,
          text2Length,
          maxD,
          vOffset,
          vLength,
          v1,
          v2,
          x,
          delta,
          front,
          k1start,
          k1end,
          k2start,
          k2end,
          k2Offset,
          k1Offset,
          x1,
          x2,
          y1,
          y2,
          d,
          k1,
          k2;
      text1Length = text1.length;
      text2Length = text2.length;
      maxD = Math.ceil((text1Length + text2Length) / 2);
      vOffset = maxD;
      vLength = 2 * maxD;
      v1 = new Array(vLength);
      v2 = new Array(vLength);
      for (x = 0; x < vLength; x++) {
        v1[x] = -1;
        v2[x] = -1;
      }
      v1[vOffset + 1] = 0;
      v2[vOffset + 1] = 0;
      delta = text1Length - text2Length;
      front = (delta % 2 !== 0);
      k1start = 0;
      k1end = 0;
      k2start = 0;
      k2end = 0;
      for (d = 0; d < maxD; d++) {
        if ((new Date()).getTime() > deadline) {
          break;
        }
        for (k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
          k1Offset = vOffset + k1;
          if (k1 === -d || (k1 !== d && v1[k1Offset - 1] < v1[k1Offset + 1])) {
            x1 = v1[k1Offset + 1];
          } else {
            x1 = v1[k1Offset - 1] + 1;
          }
          y1 = x1 - k1;
          while (x1 < text1Length && y1 < text2Length && text1.charAt(x1) === text2.charAt(y1)) {
            x1++;
            y1++;
          }
          v1[k1Offset] = x1;
          if (x1 > text1Length) {
            k1end += 2;
          } else if (y1 > text2Length) {
            k1start += 2;
          } else if (front) {
            k2Offset = vOffset + delta - k1;
            if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {
              x2 = text1Length - v2[k2Offset];
              if (x1 >= x2) {
                return this.diffBisectSplit(text1, text2, x1, y1, deadline);
              }
            }
          }
        }
        for (k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
          k2Offset = vOffset + k2;
          if (k2 === -d || (k2 !== d && v2[k2Offset - 1] < v2[k2Offset + 1])) {
            x2 = v2[k2Offset + 1];
          } else {
            x2 = v2[k2Offset - 1] + 1;
          }
          y2 = x2 - k2;
          while (x2 < text1Length && y2 < text2Length && text1.charAt(text1Length - x2 - 1) === text2.charAt(text2Length - y2 - 1)) {
            x2++;
            y2++;
          }
          v2[k2Offset] = x2;
          if (x2 > text1Length) {
            k2end += 2;
          } else if (y2 > text2Length) {
            k2start += 2;
          } else if (!front) {
            k1Offset = vOffset + delta - k2;
            if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
              x1 = v1[k1Offset];
              y1 = vOffset + x1 - k1Offset;
              x2 = text1Length - x2;
              if (x1 >= x2) {
                return this.diffBisectSplit(text1, text2, x1, y1, deadline);
              }
            }
          }
        }
      }
      return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
    };
    DiffMatchPatch.prototype.diffBisectSplit = function(text1, text2, x, y, deadline) {
      var text1a,
          text1b,
          text2a,
          text2b,
          diffs,
          diffsb;
      text1a = text1.substring(0, x);
      text2a = text2.substring(0, y);
      text1b = text1.substring(x);
      text2b = text2.substring(y);
      diffs = this.DiffMain(text1a, text2a, false, deadline);
      diffsb = this.DiffMain(text1b, text2b, false, deadline);
      return diffs.concat(diffsb);
    };
    DiffMatchPatch.prototype.diffCleanupSemantic = function(diffs) {
      var changes,
          equalities,
          equalitiesLength,
          lastequality,
          pointer,
          lengthInsertions2,
          lengthDeletions2,
          lengthInsertions1,
          lengthDeletions1,
          deletion,
          insertion,
          overlapLength1,
          overlapLength2;
      changes = false;
      equalities = [];
      equalitiesLength = 0;
      lastequality = null;
      pointer = 0;
      lengthInsertions1 = 0;
      lengthDeletions1 = 0;
      lengthInsertions2 = 0;
      lengthDeletions2 = 0;
      while (pointer < diffs.length) {
        if (diffs[pointer][0] === DIFF_EQUAL) {
          equalities[equalitiesLength++] = pointer;
          lengthInsertions1 = lengthInsertions2;
          lengthDeletions1 = lengthDeletions2;
          lengthInsertions2 = 0;
          lengthDeletions2 = 0;
          lastequality = diffs[pointer][1];
        } else {
          if (diffs[pointer][0] === DIFF_INSERT) {
            lengthInsertions2 += diffs[pointer][1].length;
          } else {
            lengthDeletions2 += diffs[pointer][1].length;
          }
          if (lastequality && (lastequality.length <= Math.max(lengthInsertions1, lengthDeletions1)) && (lastequality.length <= Math.max(lengthInsertions2, lengthDeletions2))) {
            diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
            diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
            equalitiesLength--;
            equalitiesLength--;
            pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
            lengthInsertions1 = 0;
            lengthDeletions1 = 0;
            lengthInsertions2 = 0;
            lengthDeletions2 = 0;
            lastequality = null;
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        this.diffCleanupMerge(diffs);
      }
      pointer = 1;
      while (pointer < diffs.length) {
        if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
          deletion = diffs[pointer - 1][1];
          insertion = diffs[pointer][1];
          overlapLength1 = this.diffCommonOverlap(deletion, insertion);
          overlapLength2 = this.diffCommonOverlap(insertion, deletion);
          if (overlapLength1 >= overlapLength2) {
            if (overlapLength1 >= deletion.length / 2 || overlapLength1 >= insertion.length / 2) {
              diffs.splice(pointer, 0, [DIFF_EQUAL, insertion.substring(0, overlapLength1)]);
              diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlapLength1);
              diffs[pointer + 1][1] = insertion.substring(overlapLength1);
              pointer++;
            }
          } else {
            if (overlapLength2 >= deletion.length / 2 || overlapLength2 >= insertion.length / 2) {
              diffs.splice(pointer, 0, [DIFF_EQUAL, deletion.substring(0, overlapLength2)]);
              diffs[pointer - 1][0] = DIFF_INSERT;
              diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlapLength2);
              diffs[pointer + 1][0] = DIFF_DELETE;
              diffs[pointer + 1][1] = deletion.substring(overlapLength2);
              pointer++;
            }
          }
          pointer++;
        }
        pointer++;
      }
    };
    DiffMatchPatch.prototype.diffCommonOverlap = function(text1, text2) {
      var text1Length,
          text2Length,
          textLength,
          best,
          length,
          pattern,
          found;
      text1Length = text1.length;
      text2Length = text2.length;
      if (text1Length === 0 || text2Length === 0) {
        return 0;
      }
      if (text1Length > text2Length) {
        text1 = text1.substring(text1Length - text2Length);
      } else if (text1Length < text2Length) {
        text2 = text2.substring(0, text1Length);
      }
      textLength = Math.min(text1Length, text2Length);
      if (text1 === text2) {
        return textLength;
      }
      best = 0;
      length = 1;
      while (true) {
        pattern = text1.substring(textLength - length);
        found = text2.indexOf(pattern);
        if (found === -1) {
          return best;
        }
        length += found;
        if (found === 0 || text1.substring(textLength - length) === text2.substring(0, length)) {
          best = length;
          length++;
        }
      }
    };
    DiffMatchPatch.prototype.diffLinesToChars = function(text1, text2) {
      var lineArray,
          lineHash,
          chars1,
          chars2;
      lineArray = [];
      lineHash = {};
      lineArray[0] = "";
      function diffLinesToCharsMunge(text) {
        var chars,
            lineStart,
            lineEnd,
            lineArrayLength,
            line;
        chars = "";
        lineStart = 0;
        lineEnd = -1;
        lineArrayLength = lineArray.length;
        while (lineEnd < text.length - 1) {
          lineEnd = text.indexOf("\n", lineStart);
          if (lineEnd === -1) {
            lineEnd = text.length - 1;
          }
          line = text.substring(lineStart, lineEnd + 1);
          lineStart = lineEnd + 1;
          if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : (lineHash[line] !== undefined)) {
            chars += String.fromCharCode(lineHash[line]);
          } else {
            chars += String.fromCharCode(lineArrayLength);
            lineHash[line] = lineArrayLength;
            lineArray[lineArrayLength++] = line;
          }
        }
        return chars;
      }
      chars1 = diffLinesToCharsMunge(text1);
      chars2 = diffLinesToCharsMunge(text2);
      return {
        chars1: chars1,
        chars2: chars2,
        lineArray: lineArray
      };
    };
    DiffMatchPatch.prototype.diffCharsToLines = function(diffs, lineArray) {
      var x,
          chars,
          text,
          y;
      for (x = 0; x < diffs.length; x++) {
        chars = diffs[x][1];
        text = [];
        for (y = 0; y < chars.length; y++) {
          text[y] = lineArray[chars.charCodeAt(y)];
        }
        diffs[x][1] = text.join("");
      }
    };
    DiffMatchPatch.prototype.diffCleanupMerge = function(diffs) {
      var pointer,
          countDelete,
          countInsert,
          textInsert,
          textDelete,
          commonlength,
          changes,
          diffPointer,
          position;
      diffs.push([DIFF_EQUAL, ""]);
      pointer = 0;
      countDelete = 0;
      countInsert = 0;
      textDelete = "";
      textInsert = "";
      commonlength;
      while (pointer < diffs.length) {
        switch (diffs[pointer][0]) {
          case DIFF_INSERT:
            countInsert++;
            textInsert += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_DELETE:
            countDelete++;
            textDelete += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_EQUAL:
            if (countDelete + countInsert > 1) {
              if (countDelete !== 0 && countInsert !== 0) {
                commonlength = this.diffCommonPrefix(textInsert, textDelete);
                if (commonlength !== 0) {
                  if ((pointer - countDelete - countInsert) > 0 && diffs[pointer - countDelete - countInsert - 1][0] === DIFF_EQUAL) {
                    diffs[pointer - countDelete - countInsert - 1][1] += textInsert.substring(0, commonlength);
                  } else {
                    diffs.splice(0, 0, [DIFF_EQUAL, textInsert.substring(0, commonlength)]);
                    pointer++;
                  }
                  textInsert = textInsert.substring(commonlength);
                  textDelete = textDelete.substring(commonlength);
                }
                commonlength = this.diffCommonSuffix(textInsert, textDelete);
                if (commonlength !== 0) {
                  diffs[pointer][1] = textInsert.substring(textInsert.length - commonlength) + diffs[pointer][1];
                  textInsert = textInsert.substring(0, textInsert.length - commonlength);
                  textDelete = textDelete.substring(0, textDelete.length - commonlength);
                }
              }
              if (countDelete === 0) {
                diffs.splice(pointer - countInsert, countDelete + countInsert, [DIFF_INSERT, textInsert]);
              } else if (countInsert === 0) {
                diffs.splice(pointer - countDelete, countDelete + countInsert, [DIFF_DELETE, textDelete]);
              } else {
                diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert, [DIFF_DELETE, textDelete], [DIFF_INSERT, textInsert]);
              }
              pointer = pointer - countDelete - countInsert + (countDelete ? 1 : 0) + (countInsert ? 1 : 0) + 1;
            } else if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
              diffs[pointer - 1][1] += diffs[pointer][1];
              diffs.splice(pointer, 1);
            } else {
              pointer++;
            }
            countInsert = 0;
            countDelete = 0;
            textDelete = "";
            textInsert = "";
            break;
        }
      }
      if (diffs[diffs.length - 1][1] === "") {
        diffs.pop();
      }
      changes = false;
      pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
          diffPointer = diffs[pointer][1];
          position = diffPointer.substring(diffPointer.length - diffs[pointer - 1][1].length);
          if (position === diffs[pointer - 1][1]) {
            diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
            diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
            diffs.splice(pointer - 1, 1);
            changes = true;
          } else if (diffPointer.substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1]) {
            diffs[pointer - 1][1] += diffs[pointer + 1][1];
            diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
            diffs.splice(pointer + 1, 1);
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        this.diffCleanupMerge(diffs);
      }
    };
    return function(o, n) {
      var diff,
          output,
          text;
      diff = new DiffMatchPatch();
      output = diff.DiffMain(o, n);
      diff.diffCleanupEfficiency(output);
      text = diff.diffPrettyHtml(output);
      return text;
    };
  }());
}());

})();
(function() {
var define = $__System.amdDefine;
define("17", ["16"], function(main) {
  return main;
});

})();
$__System.register('1', ['3', '15', '17'], function (_export) {
    /* eslint no-console:off, newline-per-chained-call:off */

    'use strict';

    var W, QUnit;
    return {
        setters: [function (_) {}, function (_2) {
            W = _2;
        }, function (_3) {
            QUnit = _3.QUnit;
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

            QUnit.test("local CSV create", function (assert) {
                assert.expect(1);
                var done = assert.async();
                new W.Key('test123').set(42).then(function (result) {
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