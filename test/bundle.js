!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var define = $__System.amdDefine;
;
(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define("2", [], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {
  var $Array = Array;
  var ArrayPrototype = $Array.prototype;
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;
  var $Function = Function;
  var FunctionPrototype = $Function.prototype;
  var $String = String;
  var StringPrototype = $String.prototype;
  var $Number = Number;
  var NumberPrototype = $Number.prototype;
  var array_slice = ArrayPrototype.slice;
  var array_splice = ArrayPrototype.splice;
  var array_push = ArrayPrototype.push;
  var array_unshift = ArrayPrototype.unshift;
  var array_concat = ArrayPrototype.concat;
  var array_join = ArrayPrototype.join;
  var call = FunctionPrototype.call;
  var apply = FunctionPrototype.apply;
  var max = Math.max;
  var min = Math.min;
  var to_string = ObjectPrototype.toString;
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  var isCallable;
  var fnToStr = Function.prototype.toString,
      constructorRegex = /^\s*class /,
      isES6ClassFn = function isES6ClassFn(value) {
        try {
          var fnStr = fnToStr.call(value);
          var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
          var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
          var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
          return constructorRegex.test(spaceStripped);
        } catch (e) {
          return false;
        }
      },
      tryFunctionObject = function tryFunctionObject(value) {
        try {
          if (isES6ClassFn(value)) {
            return false;
          }
          fnToStr.call(value);
          return true;
        } catch (e) {
          return false;
        }
      },
      fnClass = '[object Function]',
      genClass = '[object GeneratorFunction]',
      isCallable = function isCallable(value) {
        if (!value) {
          return false;
        }
        if (typeof value !== 'function' && typeof value !== 'object') {
          return false;
        }
        if (hasToStringTag) {
          return tryFunctionObject(value);
        }
        if (isES6ClassFn(value)) {
          return false;
        }
        var strClass = to_string.call(value);
        return strClass === fnClass || strClass === genClass;
      };
  var isRegex;
  var regexExec = RegExp.prototype.exec,
      tryRegexExec = function tryRegexExec(value) {
        try {
          regexExec.call(value);
          return true;
        } catch (e) {
          return false;
        }
      },
      regexClass = '[object RegExp]';
  isRegex = function isRegex(value) {
    if (typeof value !== 'object') {
      return false;
    }
    return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass;
  };
  var isString;
  var strValue = String.prototype.valueOf,
      tryStringObject = function tryStringObject(value) {
        try {
          strValue.call(value);
          return true;
        } catch (e) {
          return false;
        }
      },
      stringClass = '[object String]';
  isString = function isString(value) {
    if (typeof value === 'string') {
      return true;
    }
    if (typeof value !== 'object') {
      return false;
    }
    return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass;
  };
  var supportsDescriptors = $Object.defineProperty && (function() {
    try {
      var obj = {};
      $Object.defineProperty(obj, 'x', {
        enumerable: false,
        value: obj
      });
      for (var _ in obj) {
        return false;
      }
      return obj.x === obj;
    } catch (e) {
      return false;
    }
  }());
  var defineProperties = (function(has) {
    var defineProperty;
    if (supportsDescriptors) {
      defineProperty = function(object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) {
          return;
        }
        $Object.defineProperty(object, name, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: method
        });
      };
    } else {
      defineProperty = function(object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) {
          return;
        }
        object[name] = method;
      };
    }
    return function defineProperties(object, map, forceAssign) {
      for (var name in map) {
        if (has.call(map, name)) {
          defineProperty(object, name, map[name], forceAssign);
        }
      }
    };
  }(ObjectPrototype.hasOwnProperty));
  var isPrimitive = function isPrimitive(input) {
    var type = typeof input;
    return input === null || (type !== 'object' && type !== 'function');
  };
  var isActualNaN = $Number.isNaN || function isActualNaN(x) {
    return x !== x;
  };
  var ES = {
    ToInteger: function ToInteger(num) {
      var n = +num;
      if (isActualNaN(n)) {
        n = 0;
      } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
      return n;
    },
    ToPrimitive: function ToPrimitive(input) {
      var val,
          valueOf,
          toStr;
      if (isPrimitive(input)) {
        return input;
      }
      valueOf = input.valueOf;
      if (isCallable(valueOf)) {
        val = valueOf.call(input);
        if (isPrimitive(val)) {
          return val;
        }
      }
      toStr = input.toString;
      if (isCallable(toStr)) {
        val = toStr.call(input);
        if (isPrimitive(val)) {
          return val;
        }
      }
      throw new TypeError();
    },
    ToObject: function(o) {
      if (o == null) {
        throw new TypeError("can't convert " + o + ' to object');
      }
      return $Object(o);
    },
    ToUint32: function ToUint32(x) {
      return x >>> 0;
    }
  };
  var Empty = function Empty() {};
  defineProperties(FunctionPrototype, {bind: function bind(that) {
      var target = this;
      if (!isCallable(target)) {
        throw new TypeError('Function.prototype.bind called on incompatible ' + target);
      }
      var args = array_slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = apply.call(target, this, array_concat.call(args, array_slice.call(arguments)));
          if ($Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return apply.call(target, that, array_concat.call(args, array_slice.call(arguments)));
        }
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        array_push.call(boundArgs, '$' + i);
      }
      bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);
      if (target.prototype) {
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    }});
  var owns = call.bind(ObjectPrototype.hasOwnProperty);
  var toStr = call.bind(ObjectPrototype.toString);
  var arraySlice = call.bind(array_slice);
  var arraySliceApply = apply.bind(array_slice);
  var strSlice = call.bind(StringPrototype.slice);
  var strSplit = call.bind(StringPrototype.split);
  var strIndexOf = call.bind(StringPrototype.indexOf);
  var pushCall = call.bind(array_push);
  var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
  var arraySort = call.bind(ArrayPrototype.sort);
  var isArray = $Array.isArray || function isArray(obj) {
    return toStr(obj) === '[object Array]';
  };
  var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
  defineProperties(ArrayPrototype, {unshift: function() {
      array_unshift.apply(this, arguments);
      return this.length;
    }}, hasUnshiftReturnValueBug);
  defineProperties($Array, {isArray: isArray});
  var boxedString = $Object('a');
  var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
  var properlyBoxesContext = function properlyBoxed(method) {
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    var threwException = false;
    if (method) {
      try {
        method.call('foo', function(_, __, context) {
          if (typeof context !== 'object') {
            properlyBoxesNonStrict = false;
          }
        });
        method.call([1], function() {
          'use strict';
          properlyBoxesStrict = typeof this === 'string';
        }, 'x');
      } catch (e) {
        threwException = true;
      }
    }
    return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
  };
  defineProperties(ArrayPrototype, {forEach: function forEach(callbackfn) {
      var object = ES.ToObject(this);
      var self = splitString && isString(this) ? strSplit(this, '') : object;
      var i = -1;
      var length = ES.ToUint32(self.length);
      var T;
      if (arguments.length > 1) {
        T = arguments[1];
      }
      if (!isCallable(callbackfn)) {
        throw new TypeError('Array.prototype.forEach callback must be a function');
      }
      while (++i < length) {
        if (i in self) {
          if (typeof T === 'undefined') {
            callbackfn(self[i], i, object);
          } else {
            callbackfn.call(T, self[i], i, object);
          }
        }
      }
    }}, !properlyBoxesContext(ArrayPrototype.forEach));
  defineProperties(ArrayPrototype, {map: function map(callbackfn) {
      var object = ES.ToObject(this);
      var self = splitString && isString(this) ? strSplit(this, '') : object;
      var length = ES.ToUint32(self.length);
      var result = $Array(length);
      var T;
      if (arguments.length > 1) {
        T = arguments[1];
      }
      if (!isCallable(callbackfn)) {
        throw new TypeError('Array.prototype.map callback must be a function');
      }
      for (var i = 0; i < length; i++) {
        if (i in self) {
          if (typeof T === 'undefined') {
            result[i] = callbackfn(self[i], i, object);
          } else {
            result[i] = callbackfn.call(T, self[i], i, object);
          }
        }
      }
      return result;
    }}, !properlyBoxesContext(ArrayPrototype.map));
  defineProperties(ArrayPrototype, {filter: function filter(callbackfn) {
      var object = ES.ToObject(this);
      var self = splitString && isString(this) ? strSplit(this, '') : object;
      var length = ES.ToUint32(self.length);
      var result = [];
      var value;
      var T;
      if (arguments.length > 1) {
        T = arguments[1];
      }
      if (!isCallable(callbackfn)) {
        throw new TypeError('Array.prototype.filter callback must be a function');
      }
      for (var i = 0; i < length; i++) {
        if (i in self) {
          value = self[i];
          if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
            pushCall(result, value);
          }
        }
      }
      return result;
    }}, !properlyBoxesContext(ArrayPrototype.filter));
  defineProperties(ArrayPrototype, {every: function every(callbackfn) {
      var object = ES.ToObject(this);
      var self = splitString && isString(this) ? strSplit(this, '') : object;
      var length = ES.ToUint32(self.length);
      var T;
      if (arguments.length > 1) {
        T = arguments[1];
      }
      if (!isCallable(callbackfn)) {
        throw new TypeError('Array.prototype.every callback must be a function');
      }
      for (var i = 0; i < length; i++) {
        if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
          return false;
        }
      }
      return true;
    }}, !properlyBoxesContext(ArrayPrototype.every));
  defineProperties(ArrayPrototype, {some: function some(callbackfn) {
      var object = ES.ToObject(this);
      var self = splitString && isString(this) ? strSplit(this, '') : object;
      var length = ES.ToUint32(self.length);
      var T;
      if (arguments.length > 1) {
        T = arguments[1];
      }
      if (!isCallable(callbackfn)) {
        throw new TypeError('Array.prototype.some callback must be a function');
      }
      for (var i = 0; i < length; i++) {
        if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
          return true;
        }
      }
      return false;
    }}, !properlyBoxesContext(ArrayPrototype.some));
  var reduceCoercesToObject = false;
  if (ArrayPrototype.reduce) {
    reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function(_, __, ___, list) {
      return list;
    }) === 'object';
  }
  defineProperties(ArrayPrototype, {reduce: function reduce(callbackfn) {
      var object = ES.ToObject(this);
      var self = splitString && isString(this) ? strSplit(this, '') : object;
      var length = ES.ToUint32(self.length);
      if (!isCallable(callbackfn)) {
        throw new TypeError('Array.prototype.reduce callback must be a function');
      }
      if (length === 0 && arguments.length === 1) {
        throw new TypeError('reduce of empty array with no initial value');
      }
      var i = 0;
      var result;
      if (arguments.length >= 2) {
        result = arguments[1];
      } else {
        do {
          if (i in self) {
            result = self[i++];
            break;
          }
          if (++i >= length) {
            throw new TypeError('reduce of empty array with no initial value');
          }
        } while (true);
      }
      for (; i < length; i++) {
        if (i in self) {
          result = callbackfn(result, self[i], i, object);
        }
      }
      return result;
    }}, !reduceCoercesToObject);
  var reduceRightCoercesToObject = false;
  if (ArrayPrototype.reduceRight) {
    reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function(_, __, ___, list) {
      return list;
    }) === 'object';
  }
  defineProperties(ArrayPrototype, {reduceRight: function reduceRight(callbackfn) {
      var object = ES.ToObject(this);
      var self = splitString && isString(this) ? strSplit(this, '') : object;
      var length = ES.ToUint32(self.length);
      if (!isCallable(callbackfn)) {
        throw new TypeError('Array.prototype.reduceRight callback must be a function');
      }
      if (length === 0 && arguments.length === 1) {
        throw new TypeError('reduceRight of empty array with no initial value');
      }
      var result;
      var i = length - 1;
      if (arguments.length >= 2) {
        result = arguments[1];
      } else {
        do {
          if (i in self) {
            result = self[i--];
            break;
          }
          if (--i < 0) {
            throw new TypeError('reduceRight of empty array with no initial value');
          }
        } while (true);
      }
      if (i < 0) {
        return result;
      }
      do {
        if (i in self) {
          result = callbackfn(result, self[i], i, object);
        }
      } while (i--);
      return result;
    }}, !reduceRightCoercesToObject);
  var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
  defineProperties(ArrayPrototype, {indexOf: function indexOf(searchElement) {
      var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
      var length = ES.ToUint32(self.length);
      if (length === 0) {
        return -1;
      }
      var i = 0;
      if (arguments.length > 1) {
        i = ES.ToInteger(arguments[1]);
      }
      i = i >= 0 ? i : max(0, length + i);
      for (; i < length; i++) {
        if (i in self && self[i] === searchElement) {
          return i;
        }
      }
      return -1;
    }}, hasFirefox2IndexOfBug);
  var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
  defineProperties(ArrayPrototype, {lastIndexOf: function lastIndexOf(searchElement) {
      var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
      var length = ES.ToUint32(self.length);
      if (length === 0) {
        return -1;
      }
      var i = length - 1;
      if (arguments.length > 1) {
        i = min(i, ES.ToInteger(arguments[1]));
      }
      i = i >= 0 ? i : length - Math.abs(i);
      for (; i >= 0; i--) {
        if (i in self && searchElement === self[i]) {
          return i;
        }
      }
      return -1;
    }}, hasFirefox2LastIndexOfBug);
  var spliceNoopReturnsEmptyArray = (function() {
    var a = [1, 2];
    var result = a.splice();
    return a.length === 2 && isArray(result) && result.length === 0;
  }());
  defineProperties(ArrayPrototype, {splice: function splice(start, deleteCount) {
      if (arguments.length === 0) {
        return [];
      } else {
        return array_splice.apply(this, arguments);
      }
    }}, !spliceNoopReturnsEmptyArray);
  var spliceWorksWithEmptyObject = (function() {
    var obj = {};
    ArrayPrototype.splice.call(obj, 0, 0, 1);
    return obj.length === 1;
  }());
  defineProperties(ArrayPrototype, {splice: function splice(start, deleteCount) {
      if (arguments.length === 0) {
        return [];
      }
      var args = arguments;
      this.length = max(ES.ToInteger(this.length), 0);
      if (arguments.length > 0 && typeof deleteCount !== 'number') {
        args = arraySlice(arguments);
        if (args.length < 2) {
          pushCall(args, this.length - start);
        } else {
          args[1] = ES.ToInteger(deleteCount);
        }
      }
      return array_splice.apply(this, args);
    }}, !spliceWorksWithEmptyObject);
  var spliceWorksWithLargeSparseArrays = (function() {
    var arr = new $Array(1e5);
    arr[8] = 'x';
    arr.splice(1, 1);
    return arr.indexOf('x') === 7;
  }());
  var spliceWorksWithSmallSparseArrays = (function() {
    var n = 256;
    var arr = [];
    arr[n] = 'a';
    arr.splice(n + 1, 0, 'b');
    return arr[n] === 'a';
  }());
  defineProperties(ArrayPrototype, {splice: function splice(start, deleteCount) {
      var O = ES.ToObject(this);
      var A = [];
      var len = ES.ToUint32(O.length);
      var relativeStart = ES.ToInteger(start);
      var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
      var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);
      var k = 0;
      var from;
      while (k < actualDeleteCount) {
        from = $String(actualStart + k);
        if (owns(O, from)) {
          A[k] = O[from];
        }
        k += 1;
      }
      var items = arraySlice(arguments, 2);
      var itemCount = items.length;
      var to;
      if (itemCount < actualDeleteCount) {
        k = actualStart;
        var maxK = len - actualDeleteCount;
        while (k < maxK) {
          from = $String(k + actualDeleteCount);
          to = $String(k + itemCount);
          if (owns(O, from)) {
            O[to] = O[from];
          } else {
            delete O[to];
          }
          k += 1;
        }
        k = len;
        var minK = len - actualDeleteCount + itemCount;
        while (k > minK) {
          delete O[k - 1];
          k -= 1;
        }
      } else if (itemCount > actualDeleteCount) {
        k = len - actualDeleteCount;
        while (k > actualStart) {
          from = $String(k + actualDeleteCount - 1);
          to = $String(k + itemCount - 1);
          if (owns(O, from)) {
            O[to] = O[from];
          } else {
            delete O[to];
          }
          k -= 1;
        }
      }
      k = actualStart;
      for (var i = 0; i < items.length; ++i) {
        O[k] = items[i];
        k += 1;
      }
      O.length = len - actualDeleteCount + itemCount;
      return A;
    }}, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);
  var originalJoin = ArrayPrototype.join;
  var hasStringJoinBug;
  try {
    hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
  } catch (e) {
    hasStringJoinBug = true;
  }
  if (hasStringJoinBug) {
    defineProperties(ArrayPrototype, {join: function join(separator) {
        var sep = typeof separator === 'undefined' ? ',' : separator;
        return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
      }}, hasStringJoinBug);
  }
  var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
  if (hasJoinUndefinedBug) {
    defineProperties(ArrayPrototype, {join: function join(separator) {
        var sep = typeof separator === 'undefined' ? ',' : separator;
        return originalJoin.call(this, sep);
      }}, hasJoinUndefinedBug);
  }
  var pushShim = function push(item) {
    var O = ES.ToObject(this);
    var n = ES.ToUint32(O.length);
    var i = 0;
    while (i < arguments.length) {
      O[n + i] = arguments[i];
      i += 1;
    }
    O.length = n + i;
    return n + i;
  };
  var pushIsNotGeneric = (function() {
    var obj = {};
    var result = Array.prototype.push.call(obj, undefined);
    return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
  }());
  defineProperties(ArrayPrototype, {push: function push(item) {
      if (isArray(this)) {
        return array_push.apply(this, arguments);
      }
      return pushShim.apply(this, arguments);
    }}, pushIsNotGeneric);
  var pushUndefinedIsWeird = (function() {
    var arr = [];
    var result = arr.push(undefined);
    return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
  }());
  defineProperties(ArrayPrototype, {push: pushShim}, pushUndefinedIsWeird);
  defineProperties(ArrayPrototype, {slice: function(start, end) {
      var arr = isString(this) ? strSplit(this, '') : this;
      return arraySliceApply(arr, arguments);
    }}, splitString);
  var sortIgnoresNonFunctions = (function() {
    try {
      [1, 2].sort(null);
      [1, 2].sort({});
      return true;
    } catch (e) {}
    return false;
  }());
  var sortThrowsOnRegex = (function() {
    try {
      [1, 2].sort(/a/);
      return false;
    } catch (e) {}
    return true;
  }());
  var sortIgnoresUndefined = (function() {
    try {
      [1, 2].sort(undefined);
      return true;
    } catch (e) {}
    return false;
  }());
  defineProperties(ArrayPrototype, {sort: function sort(compareFn) {
      if (typeof compareFn === 'undefined') {
        return arraySort(this);
      }
      if (!isCallable(compareFn)) {
        throw new TypeError('Array.prototype.sort callback must be a function');
      }
      return arraySort(this, compareFn);
    }}, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);
  var hasDontEnumBug = !isEnum({'toString': null}, 'toString');
  var hasProtoEnumBug = isEnum(function() {}, 'prototype');
  var hasStringEnumBug = !owns('x', '0');
  var equalsConstructorPrototype = function(o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
  };
  var blacklistedKeys = {
    $window: true,
    $console: true,
    $parent: true,
    $self: true,
    $frame: true,
    $frames: true,
    $frameElement: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $external: true
  };
  var hasAutomationEqualityBug = (function() {
    if (typeof window === 'undefined') {
      return false;
    }
    for (var k in window) {
      try {
        if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
          equalsConstructorPrototype(window[k]);
        }
      } catch (e) {
        return true;
      }
    }
    return false;
  }());
  var equalsConstructorPrototypeIfNotBuggy = function(object) {
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
      return equalsConstructorPrototype(object);
    }
    try {
      return equalsConstructorPrototype(object);
    } catch (e) {
      return false;
    }
  };
  var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
  var dontEnumsLength = dontEnums.length;
  var isStandardArguments = function isArguments(value) {
    return toStr(value) === '[object Arguments]';
  };
  var isLegacyArguments = function isArguments(value) {
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && !isArray(value) && isCallable(value.callee);
  };
  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
  defineProperties($Object, {keys: function keys(object) {
      var isFn = isCallable(object);
      var isArgs = isArguments(object);
      var isObject = object !== null && typeof object === 'object';
      var isStr = isObject && isString(object);
      if (!isObject && !isFn && !isArgs) {
        throw new TypeError('Object.keys called on a non-object');
      }
      var theKeys = [];
      var skipProto = hasProtoEnumBug && isFn;
      if ((isStr && hasStringEnumBug) || isArgs) {
        for (var i = 0; i < object.length; ++i) {
          pushCall(theKeys, $String(i));
        }
      }
      if (!isArgs) {
        for (var name in object) {
          if (!(skipProto && name === 'prototype') && owns(object, name)) {
            pushCall(theKeys, $String(name));
          }
        }
      }
      if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
        for (var j = 0; j < dontEnumsLength; j++) {
          var dontEnum = dontEnums[j];
          if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
            pushCall(theKeys, dontEnum);
          }
        }
      }
      return theKeys;
    }});
  var keysWorksWithArguments = $Object.keys && (function() {
    return $Object.keys(arguments).length === 2;
  }(1, 2));
  var keysHasArgumentsLengthBug = $Object.keys && (function() {
    var argKeys = $Object.keys(arguments);
    return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
  }(1));
  var originalKeys = $Object.keys;
  defineProperties($Object, {keys: function keys(object) {
      if (isArguments(object)) {
        return originalKeys(arraySlice(object));
      } else {
        return originalKeys(object);
      }
    }}, !keysWorksWithArguments || keysHasArgumentsLengthBug);
  var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
  var aNegativeTestDate = new Date(-1509842289600292);
  var aPositiveTestDate = new Date(1449662400000);
  var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
  var hasToDateStringFormatBug;
  var hasToStringFormatBug;
  var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
  if (timeZoneOffset < -720) {
    hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
    hasToStringFormatBug = !(/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
  } else {
    hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
    hasToStringFormatBug = !(/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
  }
  var originalGetFullYear = call.bind(Date.prototype.getFullYear);
  var originalGetMonth = call.bind(Date.prototype.getMonth);
  var originalGetDate = call.bind(Date.prototype.getDate);
  var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
  var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
  var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
  var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
  var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
  var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
  var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
  var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
  var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var daysInMonth = function daysInMonth(month, year) {
    return originalGetDate(new Date(year, month, 0));
  };
  defineProperties(Date.prototype, {
    getFullYear: function getFullYear() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var year = originalGetFullYear(this);
      if (year < 0 && originalGetMonth(this) > 11) {
        return year + 1;
      }
      return year;
    },
    getMonth: function getMonth() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var year = originalGetFullYear(this);
      var month = originalGetMonth(this);
      if (year < 0 && month > 11) {
        return 0;
      }
      return month;
    },
    getDate: function getDate() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var year = originalGetFullYear(this);
      var month = originalGetMonth(this);
      var date = originalGetDate(this);
      if (year < 0 && month > 11) {
        if (month === 12) {
          return date;
        }
        var days = daysInMonth(0, year + 1);
        return (days - date) + 1;
      }
      return date;
    },
    getUTCFullYear: function getUTCFullYear() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var year = originalGetUTCFullYear(this);
      if (year < 0 && originalGetUTCMonth(this) > 11) {
        return year + 1;
      }
      return year;
    },
    getUTCMonth: function getUTCMonth() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var year = originalGetUTCFullYear(this);
      var month = originalGetUTCMonth(this);
      if (year < 0 && month > 11) {
        return 0;
      }
      return month;
    },
    getUTCDate: function getUTCDate() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var year = originalGetUTCFullYear(this);
      var month = originalGetUTCMonth(this);
      var date = originalGetUTCDate(this);
      if (year < 0 && month > 11) {
        if (month === 12) {
          return date;
        }
        var days = daysInMonth(0, year + 1);
        return (days - date) + 1;
      }
      return date;
    }
  }, hasNegativeMonthYearBug);
  defineProperties(Date.prototype, {toUTCString: function toUTCString() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var day = originalGetUTCDay(this);
      var date = originalGetUTCDate(this);
      var month = originalGetUTCMonth(this);
      var year = originalGetUTCFullYear(this);
      var hour = originalGetUTCHours(this);
      var minute = originalGetUTCMinutes(this);
      var second = originalGetUTCSeconds(this);
      return dayName[day] + ', ' + (date < 10 ? '0' + date : date) + ' ' + monthName[month] + ' ' + year + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second) + ' GMT';
    }}, hasNegativeMonthYearBug || hasToUTCStringFormatBug);
  defineProperties(Date.prototype, {toDateString: function toDateString() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var day = this.getDay();
      var date = this.getDate();
      var month = this.getMonth();
      var year = this.getFullYear();
      return dayName[day] + ' ' + monthName[month] + ' ' + (date < 10 ? '0' + date : date) + ' ' + year;
    }}, hasNegativeMonthYearBug || hasToDateStringFormatBug);
  if (hasNegativeMonthYearBug || hasToStringFormatBug) {
    Date.prototype.toString = function toString() {
      if (!this || !(this instanceof Date)) {
        throw new TypeError('this is not a Date object.');
      }
      var day = this.getDay();
      var date = this.getDate();
      var month = this.getMonth();
      var year = this.getFullYear();
      var hour = this.getHours();
      var minute = this.getMinutes();
      var second = this.getSeconds();
      var timezoneOffset = this.getTimezoneOffset();
      var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
      var minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
      return dayName[day] + ' ' + monthName[month] + ' ' + (date < 10 ? '0' + date : date) + ' ' + year + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second) + ' GMT' + (timezoneOffset > 0 ? '-' : '+') + (hoursOffset < 10 ? '0' + hoursOffset : hoursOffset) + (minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
    };
    if (supportsDescriptors) {
      $Object.defineProperty(Date.prototype, 'toString', {
        configurable: true,
        enumerable: false,
        writable: true
      });
    }
  }
  var negativeDate = -62198755200000;
  var negativeYearString = '-000001';
  var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
  var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';
  var getTime = call.bind(Date.prototype.getTime);
  defineProperties(Date.prototype, {toISOString: function toISOString() {
      if (!isFinite(this) || !isFinite(getTime(this))) {
        throw new RangeError('Date.prototype.toISOString called on non-finite value.');
      }
      var year = originalGetUTCFullYear(this);
      var month = originalGetUTCMonth(this);
      year += Math.floor(month / 12);
      month = (month % 12 + 12) % 12;
      var result = [month + 1, originalGetUTCDate(this), originalGetUTCHours(this), originalGetUTCMinutes(this), originalGetUTCSeconds(this)];
      year = ((year < 0 ? '-' : (year > 9999 ? '+' : '')) + strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6));
      for (var i = 0; i < result.length; ++i) {
        result[i] = strSlice('00' + result[i], -2);
      }
      return (year + '-' + arraySlice(result, 0, 2).join('-') + 'T' + arraySlice(result, 2).join(':') + '.' + strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z');
    }}, hasNegativeDateBug || hasSafari51DateBug);
  var dateToJSONIsSupported = (function() {
    try {
      return Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 && Date.prototype.toJSON.call({toISOString: function() {
          return true;
        }});
    } catch (e) {
      return false;
    }
  }());
  if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
      var O = $Object(this);
      var tv = ES.ToPrimitive(O);
      if (typeof tv === 'number' && !isFinite(tv)) {
        return null;
      }
      var toISO = O.toISOString;
      if (!isCallable(toISO)) {
        throw new TypeError('toISOString property is not callable');
      }
      return toISO.call(O);
    };
  }
  var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
  var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
  var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
  if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
    var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
    var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
    Date = (function(NativeDate) {
      var DateShim = function Date(Y, M, D, h, m, s, ms) {
        var length = arguments.length;
        var date;
        if (this instanceof NativeDate) {
          var seconds = s;
          var millis = ms;
          if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
            var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
            var sToShift = Math.floor(msToShift / 1e3);
            seconds += sToShift;
            millis -= sToShift * 1e3;
          }
          date = length === 1 && $String(Y) === Y ? new NativeDate(DateShim.parse(Y)) : length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) : length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) : length >= 5 ? new NativeDate(Y, M, D, h, m) : length >= 4 ? new NativeDate(Y, M, D, h) : length >= 3 ? new NativeDate(Y, M, D) : length >= 2 ? new NativeDate(Y, M) : length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y) : new NativeDate();
        } else {
          date = NativeDate.apply(this, arguments);
        }
        if (!isPrimitive(date)) {
          defineProperties(date, {constructor: DateShim}, true);
        }
        return date;
      };
      var isoDateExpression = new RegExp('^' + '(\\d{4}|[+-]\\d{6})' + '(?:-(\\d{2})' + '(?:-(\\d{2})' + '(?:' + 'T(\\d{2})' + ':(\\d{2})' + '(?:' + ':(\\d{2})' + '(?:(\\.\\d{1,}))?' + ')?' + '(' + 'Z|' + '(?:' + '([-+])' + '(\\d{2})' + ':(\\d{2})' + ')' + ')?)?)?)?' + '$');
      var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
      var dayFromMonth = function dayFromMonth(year, month) {
        var t = month > 1 ? 1 : 0;
        return (months[month] + Math.floor((year - 1969 + t) / 4) - Math.floor((year - 1901 + t) / 100) + Math.floor((year - 1601 + t) / 400) + 365 * (year - 1970));
      };
      var toUTC = function toUTC(t) {
        var s = 0;
        var ms = t;
        if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
          var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
          var sToShift = Math.floor(msToShift / 1e3);
          s += sToShift;
          ms -= sToShift * 1e3;
        }
        return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
      };
      for (var key in NativeDate) {
        if (owns(NativeDate, key)) {
          DateShim[key] = NativeDate[key];
        }
      }
      defineProperties(DateShim, {
        now: NativeDate.now,
        UTC: NativeDate.UTC
      }, true);
      DateShim.prototype = NativeDate.prototype;
      defineProperties(DateShim.prototype, {constructor: DateShim}, true);
      var parseShim = function parse(string) {
        var match = isoDateExpression.exec(string);
        if (match) {
          var year = $Number(match[1]),
              month = $Number(match[2] || 1) - 1,
              day = $Number(match[3] || 1) - 1,
              hour = $Number(match[4] || 0),
              minute = $Number(match[5] || 0),
              second = $Number(match[6] || 0),
              millisecond = Math.floor($Number(match[7] || 0) * 1000),
              isLocalTime = Boolean(match[4] && !match[8]),
              signOffset = match[9] === '-' ? 1 : -1,
              hourOffset = $Number(match[10] || 0),
              minuteOffset = $Number(match[11] || 0),
              result;
          var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
          if (hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) && minute < 60 && second < 60 && millisecond < 1000 && month > -1 && month < 12 && hourOffset < 24 && minuteOffset < 60 && day > -1 && day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))) {
            result = ((dayFromMonth(year, month) + day) * 24 + hour + hourOffset * signOffset) * 60;
            result = ((result + minute + minuteOffset * signOffset) * 60 + second) * 1000 + millisecond;
            if (isLocalTime) {
              result = toUTC(result);
            }
            if (-8.64e15 <= result && result <= 8.64e15) {
              return result;
            }
          }
          return NaN;
        }
        return NativeDate.parse.apply(this, arguments);
      };
      defineProperties(DateShim, {parse: parseShim});
      return DateShim;
    }(Date));
  }
  if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
  var hasToFixedBugs = NumberPrototype.toFixed && ((0.00008).toFixed(3) !== '0.000' || (0.9).toFixed(0) !== '1' || (1.255).toFixed(2) !== '1.25' || (1000000000000000128).toFixed(0) !== '1000000000000000128');
  var toFixedHelpers = {
    base: 1e7,
    size: 6,
    data: [0, 0, 0, 0, 0, 0],
    multiply: function multiply(n, c) {
      var i = -1;
      var c2 = c;
      while (++i < toFixedHelpers.size) {
        c2 += n * toFixedHelpers.data[i];
        toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
        c2 = Math.floor(c2 / toFixedHelpers.base);
      }
    },
    divide: function divide(n) {
      var i = toFixedHelpers.size;
      var c = 0;
      while (--i >= 0) {
        c += toFixedHelpers.data[i];
        toFixedHelpers.data[i] = Math.floor(c / n);
        c = (c % n) * toFixedHelpers.base;
      }
    },
    numToString: function numToString() {
      var i = toFixedHelpers.size;
      var s = '';
      while (--i >= 0) {
        if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
          var t = $String(toFixedHelpers.data[i]);
          if (s === '') {
            s = t;
          } else {
            s += strSlice('0000000', 0, 7 - t.length) + t;
          }
        }
      }
      return s;
    },
    pow: function pow(x, n, acc) {
      return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
    },
    log: function log(x) {
      var n = 0;
      var x2 = x;
      while (x2 >= 4096) {
        n += 12;
        x2 /= 4096;
      }
      while (x2 >= 2) {
        n += 1;
        x2 /= 2;
      }
      return n;
    }
  };
  var toFixedShim = function toFixed(fractionDigits) {
    var f,
        x,
        s,
        m,
        e,
        z,
        j,
        k;
    f = $Number(fractionDigits);
    f = isActualNaN(f) ? 0 : Math.floor(f);
    if (f < 0 || f > 20) {
      throw new RangeError('Number.toFixed called with invalid number of decimals');
    }
    x = $Number(this);
    if (isActualNaN(x)) {
      return 'NaN';
    }
    if (x <= -1e21 || x >= 1e21) {
      return $String(x);
    }
    s = '';
    if (x < 0) {
      s = '-';
      x = -x;
    }
    m = '0';
    if (x > 1e-21) {
      e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
      z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        toFixedHelpers.multiply(0, z);
        j = f;
        while (j >= 7) {
          toFixedHelpers.multiply(1e7, 0);
          j -= 7;
        }
        toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          toFixedHelpers.divide(1 << 23);
          j -= 23;
        }
        toFixedHelpers.divide(1 << j);
        toFixedHelpers.multiply(1, 1);
        toFixedHelpers.divide(2);
        m = toFixedHelpers.numToString();
      } else {
        toFixedHelpers.multiply(0, z);
        toFixedHelpers.multiply(1 << (-e), 0);
        m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
      }
    }
    if (f > 0) {
      k = m.length;
      if (k <= f) {
        m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
      } else {
        m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
      }
    } else {
      m = s + m;
    }
    return m;
  };
  defineProperties(NumberPrototype, {toFixed: toFixedShim}, hasToFixedBugs);
  var hasToPrecisionUndefinedBug = (function() {
    try {
      return 1.0.toPrecision(undefined) === '1';
    } catch (e) {
      return true;
    }
  }());
  var originalToPrecision = NumberPrototype.toPrecision;
  defineProperties(NumberPrototype, {toPrecision: function toPrecision(precision) {
      return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
    }}, hasToPrecisionUndefinedBug);
  if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) {
    (function() {
      var compliantExecNpcg = typeof(/()??/).exec('')[1] === 'undefined';
      var maxSafe32BitInt = Math.pow(2, 32) - 1;
      StringPrototype.split = function(separator, limit) {
        var string = String(this);
        if (typeof separator === 'undefined' && limit === 0) {
          return [];
        }
        if (!isRegex(separator)) {
          return strSplit(this, separator, limit);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : ''),
            lastLastIndex = 0,
            separator2,
            match,
            lastIndex,
            lastLength;
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        if (!compliantExecNpcg) {
          separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
        }
        var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
        match = separatorCopy.exec(string);
        while (match) {
          lastIndex = match.index + match[0].length;
          if (lastIndex > lastLastIndex) {
            pushCall(output, strSlice(string, lastLastIndex, match.index));
            if (!compliantExecNpcg && match.length > 1) {
              match[0].replace(separator2, function() {
                for (var i = 1; i < arguments.length - 2; i++) {
                  if (typeof arguments[i] === 'undefined') {
                    match[i] = void 0;
                  }
                }
              });
            }
            if (match.length > 1 && match.index < string.length) {
              array_push.apply(output, arraySlice(match, 1));
            }
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= splitLimit) {
              break;
            }
          }
          if (separatorCopy.lastIndex === match.index) {
            separatorCopy.lastIndex++;
          }
          match = separatorCopy.exec(string);
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) {
            pushCall(output, '');
          }
        } else {
          pushCall(output, strSlice(string, lastLastIndex));
        }
        return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
      };
    }());
  } else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
      if (typeof separator === 'undefined' && limit === 0) {
        return [];
      }
      return strSplit(this, separator, limit);
    };
  }
  var str_replace = StringPrototype.replace;
  var replaceReportsGroupsCorrectly = (function() {
    var groups = [];
    'x'.replace(/x(.)?/g, function(match, group) {
      pushCall(groups, group);
    });
    return groups.length === 1 && typeof groups[0] === 'undefined';
  }());
  if (!replaceReportsGroupsCorrectly) {
    StringPrototype.replace = function replace(searchValue, replaceValue) {
      var isFn = isCallable(replaceValue);
      var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
      if (!isFn || !hasCapturingGroups) {
        return str_replace.call(this, searchValue, replaceValue);
      } else {
        var wrappedReplaceValue = function(match) {
          var length = arguments.length;
          var originalLastIndex = searchValue.lastIndex;
          searchValue.lastIndex = 0;
          var args = searchValue.exec(match) || [];
          searchValue.lastIndex = originalLastIndex;
          pushCall(args, arguments[length - 2], arguments[length - 1]);
          return replaceValue.apply(this, args);
        };
        return str_replace.call(this, searchValue, wrappedReplaceValue);
      }
    };
  }
  var string_substr = StringPrototype.substr;
  var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
  defineProperties(StringPrototype, {substr: function substr(start, length) {
      var normalizedStart = start;
      if (start < 0) {
        normalizedStart = max(this.length + start, 0);
      }
      return string_substr.call(this, normalizedStart, length);
    }}, hasNegativeSubstrBug);
  var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
  var zeroWidth = '\u200b';
  var wsRegexChars = '[' + ws + ']';
  var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
  var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
  var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
  defineProperties(StringPrototype, {trim: function trim() {
      if (typeof this === 'undefined' || this === null) {
        throw new TypeError("can't convert " + this + ' to object');
      }
      return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
    }}, hasTrimWhitespaceBug);
  var trim = call.bind(String.prototype.trim);
  var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
  defineProperties(StringPrototype, {lastIndexOf: function lastIndexOf(searchString) {
      if (typeof this === 'undefined' || this === null) {
        throw new TypeError("can't convert " + this + ' to object');
      }
      var S = $String(this);
      var searchStr = $String(searchString);
      var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
      var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
      var start = min(max(pos, 0), S.length);
      var searchLen = searchStr.length;
      var k = start + searchLen;
      while (k > 0) {
        k = max(0, k - searchLen);
        var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
        if (index !== -1) {
          return k + index;
        }
      }
      return -1;
    }}, hasLastIndexBug);
  var originalLastIndexOf = StringPrototype.lastIndexOf;
  defineProperties(StringPrototype, {lastIndexOf: function lastIndexOf(searchString) {
      return originalLastIndexOf.apply(this, arguments);
    }}, StringPrototype.lastIndexOf.length !== 1);
  if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
    parseInt = (function(origParseInt) {
      var hexRegex = /^[\-+]?0[xX]/;
      return function parseInt(str, radix) {
        var string = trim(String(str));
        var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
        return origParseInt(string, defaultedRadix);
      };
    }(parseInt));
  }
  if (1 / parseFloat('-0') !== -Infinity) {
    parseFloat = (function(origParseFloat) {
      return function parseFloat(string) {
        var inputString = trim(String(string));
        var result = origParseFloat(inputString);
        return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
      };
    }(parseFloat));
  }
  if (String(new RangeError('test')) !== 'RangeError: test') {
    var errorToStringShim = function toString() {
      if (typeof this === 'undefined' || this === null) {
        throw new TypeError("can't convert " + this + ' to object');
      }
      var name = this.name;
      if (typeof name === 'undefined') {
        name = 'Error';
      } else if (typeof name !== 'string') {
        name = $String(name);
      }
      var msg = this.message;
      if (typeof msg === 'undefined') {
        msg = '';
      } else if (typeof msg !== 'string') {
        msg = $String(msg);
      }
      if (!name) {
        return msg;
      }
      if (!msg) {
        return name;
      }
      return name + ': ' + msg;
    };
    Error.prototype.toString = errorToStringShim;
  }
  if (supportsDescriptors) {
    var ensureNonEnumerable = function(obj, prop) {
      if (isEnum(obj, prop)) {
        var desc = Object.getOwnPropertyDescriptor(obj, prop);
        if (desc.configurable) {
          desc.enumerable = false;
          Object.defineProperty(obj, prop, desc);
        }
      }
    };
    ensureNonEnumerable(Error.prototype, 'message');
    if (Error.prototype.message !== '') {
      Error.prototype.message = '';
    }
    ensureNonEnumerable(Error.prototype, 'name');
  }
  if (String(/a/mig) !== '/a/gim') {
    var regexToString = function toString() {
      var str = '/' + this.source + '/';
      if (this.global) {
        str += 'g';
      }
      if (this.ignoreCase) {
        str += 'i';
      }
      if (this.multiline) {
        str += 'm';
      }
      return str;
    };
    RegExp.prototype.toString = regexToString;
  }
}));

})();
(function() {
var define = $__System.amdDefine;
define("3", ["2"], function(main) {
  return main;
});

})();
(function() {
var define = $__System.amdDefine;
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define("4", [], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {
  'use strict';
  var _apply = Function.call.bind(Function.apply);
  var _call = Function.call.bind(Function.call);
  var isArray = Array.isArray;
  var keys = Object.keys;
  var not = function notThunker(func) {
    return function notThunk() {
      return !_apply(func, this, arguments);
    };
  };
  var throwsError = function(func) {
    try {
      func();
      return false;
    } catch (e) {
      return true;
    }
  };
  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
    try {
      return func();
    } catch (e) {
      return false;
    }
  };
  var isCallableWithoutNew = not(throwsError);
  var arePropertyDescriptorsSupported = function() {
    return !throwsError(function() {
      Object.defineProperty({}, 'x', {get: function() {}});
    });
  };
  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
  var functionsHaveNames = (function foo() {}).name === 'foo';
  var _forEach = Function.call.bind(Array.prototype.forEach);
  var _reduce = Function.call.bind(Array.prototype.reduce);
  var _filter = Function.call.bind(Array.prototype.filter);
  var _some = Function.call.bind(Array.prototype.some);
  var defineProperty = function(object, name, value, force) {
    if (!force && name in object) {
      return;
    }
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };
  var defineProperties = function(object, map, forceOverride) {
    _forEach(keys(map), function(name) {
      var method = map[name];
      defineProperty(object, name, method, !!forceOverride);
    });
  };
  var _toString = Function.call.bind(Object.prototype.toString);
  var isCallable = typeof/abc/ === 'function' ? function IsCallableSlow(x) {
    return typeof x === 'function' && _toString(x) === '[object Function]';
  } : function IsCallableFast(x) {
    return typeof x === 'function';
  };
  var Value = {
    getter: function(object, name, getter) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        get: getter
      });
    },
    proxy: function(originalObject, key, targetObject) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
      Object.defineProperty(targetObject, key, {
        configurable: originalDescriptor.configurable,
        enumerable: originalDescriptor.enumerable,
        get: function getKey() {
          return originalObject[key];
        },
        set: function setKey(value) {
          originalObject[key] = value;
        }
      });
    },
    redefine: function(object, property, newValue) {
      if (supportsDescriptors) {
        var descriptor = Object.getOwnPropertyDescriptor(object, property);
        descriptor.value = newValue;
        Object.defineProperty(object, property, descriptor);
      } else {
        object[property] = newValue;
      }
    },
    defineByDescriptor: function(object, property, descriptor) {
      if (supportsDescriptors) {
        Object.defineProperty(object, property, descriptor);
      } else if ('value' in descriptor) {
        object[property] = descriptor.value;
      }
    },
    preserveToString: function(target, source) {
      if (source && isCallable(source.toString)) {
        defineProperty(target, 'toString', source.toString.bind(source), true);
      }
    }
  };
  var create = Object.create || function(prototype, properties) {
    var Prototype = function Prototype() {};
    Prototype.prototype = prototype;
    var object = new Prototype();
    if (typeof properties !== 'undefined') {
      keys(properties).forEach(function(key) {
        Value.defineByDescriptor(object, key, properties[key]);
      });
    }
    return object;
  };
  var supportsSubclassing = function(C, f) {
    if (!Object.setPrototypeOf) {
      return false;
    }
    return valueOrFalseIfThrows(function() {
      var Sub = function Subclass(arg) {
        var o = new C(arg);
        Object.setPrototypeOf(o, Subclass.prototype);
        return o;
      };
      Object.setPrototypeOf(Sub, C);
      Sub.prototype = create(C.prototype, {constructor: {value: Sub}});
      return f(Sub);
    });
  };
  var getGlobal = function() {
    if (typeof self !== 'undefined') {
      return self;
    }
    if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('unable to locate global object');
  };
  var globals = getGlobal();
  var globalIsFinite = globals.isFinite;
  var _indexOf = Function.call.bind(String.prototype.indexOf);
  var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);
  var _concat = Function.call.bind(Array.prototype.concat);
  var _strSlice = Function.call.bind(String.prototype.slice);
  var _push = Function.call.bind(Array.prototype.push);
  var _pushApply = Function.apply.bind(Array.prototype.push);
  var _shift = Function.call.bind(Array.prototype.shift);
  var _max = Math.max;
  var _min = Math.min;
  var _floor = Math.floor;
  var _abs = Math.abs;
  var _exp = Math.exp;
  var _log = Math.log;
  var _sqrt = Math.sqrt;
  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
  var ArrayIterator;
  var noop = function() {};
  var Symbol = globals.Symbol || {};
  var symbolSpecies = Symbol.species || '@@species';
  var numberIsNaN = Number.isNaN || function isNaN(value) {
    return value !== value;
  };
  var numberIsFinite = Number.isFinite || function isFinite(value) {
    return typeof value === 'number' && globalIsFinite(value);
  };
  var _sign = isCallable(Math.sign) ? Math.sign : function sign(value) {
    var number = Number(value);
    if (number === 0) {
      return number;
    }
    if (numberIsNaN(number)) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  var isStandardArguments = function isArguments(value) {
    return _toString(value) === '[object Arguments]';
  };
  var isLegacyArguments = function isArguments(value) {
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && _toString(value) !== '[object Array]' && _toString(value.callee) === '[object Function]';
  };
  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
  var Type = {
    primitive: function(x) {
      return x === null || (typeof x !== 'function' && typeof x !== 'object');
    },
    string: function(x) {
      return _toString(x) === '[object String]';
    },
    regex: function(x) {
      return _toString(x) === '[object RegExp]';
    },
    symbol: function(x) {
      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
    }
  };
  var overrideNative = function overrideNative(object, property, replacement) {
    var original = object[property];
    defineProperty(object, property, replacement, true);
    Value.preserveToString(object[property], original);
  };
  var hasSymbols = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' && Type.symbol(Symbol());
  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
    $iterator$ = '@@iterator';
  }
  if (!globals.Reflect) {
    defineProperty(globals, 'Reflect', {}, true);
  }
  var Reflect = globals.Reflect;
  var $String = String;
  var ES = {
    Call: function Call(F, V) {
      var args = arguments.length > 2 ? arguments[2] : [];
      if (!ES.IsCallable(F)) {
        throw new TypeError(F + ' is not a function');
      }
      return _apply(F, V, args);
    },
    RequireObjectCoercible: function(x, optMessage) {
      if (x == null) {
        throw new TypeError(optMessage || 'Cannot call method on ' + x);
      }
      return x;
    },
    TypeIsObject: function(x) {
      if (x === void 0 || x === null || x === true || x === false) {
        return false;
      }
      return typeof x === 'function' || typeof x === 'object';
    },
    ToObject: function(o, optMessage) {
      return Object(ES.RequireObjectCoercible(o, optMessage));
    },
    IsCallable: isCallable,
    IsConstructor: function(x) {
      return ES.IsCallable(x);
    },
    ToInt32: function(x) {
      return ES.ToNumber(x) >> 0;
    },
    ToUint32: function(x) {
      return ES.ToNumber(x) >>> 0;
    },
    ToNumber: function(value) {
      if (_toString(value) === '[object Symbol]') {
        throw new TypeError('Cannot convert a Symbol value to a number');
      }
      return +value;
    },
    ToInteger: function(value) {
      var number = ES.ToNumber(value);
      if (numberIsNaN(number)) {
        return 0;
      }
      if (number === 0 || !numberIsFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * _floor(_abs(number));
    },
    ToLength: function(value) {
      var len = ES.ToInteger(value);
      if (len <= 0) {
        return 0;
      }
      if (len > Number.MAX_SAFE_INTEGER) {
        return Number.MAX_SAFE_INTEGER;
      }
      return len;
    },
    SameValue: function(a, b) {
      if (a === b) {
        if (a === 0) {
          return 1 / a === 1 / b;
        }
        return true;
      }
      return numberIsNaN(a) && numberIsNaN(b);
    },
    SameValueZero: function(a, b) {
      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));
    },
    IsIterable: function(o) {
      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
    },
    GetIterator: function(o) {
      if (isArguments(o)) {
        return new ArrayIterator(o, 'value');
      }
      var itFn = ES.GetMethod(o, $iterator$);
      if (!ES.IsCallable(itFn)) {
        throw new TypeError('value is not an iterable');
      }
      var it = ES.Call(itFn, o);
      if (!ES.TypeIsObject(it)) {
        throw new TypeError('bad iterator');
      }
      return it;
    },
    GetMethod: function(o, p) {
      var func = ES.ToObject(o)[p];
      if (func === void 0 || func === null) {
        return void 0;
      }
      if (!ES.IsCallable(func)) {
        throw new TypeError('Method not callable: ' + p);
      }
      return func;
    },
    IteratorComplete: function(iterResult) {
      return !!iterResult.done;
    },
    IteratorClose: function(iterator, completionIsThrow) {
      var returnMethod = ES.GetMethod(iterator, 'return');
      if (returnMethod === void 0) {
        return;
      }
      var innerResult,
          innerException;
      try {
        innerResult = ES.Call(returnMethod, iterator);
      } catch (e) {
        innerException = e;
      }
      if (completionIsThrow) {
        return;
      }
      if (innerException) {
        throw innerException;
      }
      if (!ES.TypeIsObject(innerResult)) {
        throw new TypeError("Iterator's return method returned a non-object.");
      }
    },
    IteratorNext: function(it) {
      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
      if (!ES.TypeIsObject(result)) {
        throw new TypeError('bad iterator');
      }
      return result;
    },
    IteratorStep: function(it) {
      var result = ES.IteratorNext(it);
      var done = ES.IteratorComplete(result);
      return done ? false : result;
    },
    Construct: function(C, args, newTarget, isES6internal) {
      var target = typeof newTarget === 'undefined' ? C : newTarget;
      if (!isES6internal && Reflect.construct) {
        return Reflect.construct(C, args, target);
      }
      var proto = target.prototype;
      if (!ES.TypeIsObject(proto)) {
        proto = Object.prototype;
      }
      var obj = create(proto);
      var result = ES.Call(C, obj, args);
      return ES.TypeIsObject(result) ? result : obj;
    },
    SpeciesConstructor: function(O, defaultConstructor) {
      var C = O.constructor;
      if (C === void 0) {
        return defaultConstructor;
      }
      if (!ES.TypeIsObject(C)) {
        throw new TypeError('Bad constructor');
      }
      var S = C[symbolSpecies];
      if (S === void 0 || S === null) {
        return defaultConstructor;
      }
      if (!ES.IsConstructor(S)) {
        throw new TypeError('Bad @@species');
      }
      return S;
    },
    CreateHTML: function(string, tag, attribute, value) {
      var S = ES.ToString(string);
      var p1 = '<' + tag;
      if (attribute !== '') {
        var V = ES.ToString(value);
        var escapedV = V.replace(/"/g, '&quot;');
        p1 += ' ' + attribute + '="' + escapedV + '"';
      }
      var p2 = p1 + '>';
      var p3 = p2 + S;
      return p3 + '</' + tag + '>';
    },
    IsRegExp: function IsRegExp(argument) {
      if (!ES.TypeIsObject(argument)) {
        return false;
      }
      var isRegExp = argument[Symbol.match];
      if (typeof isRegExp !== 'undefined') {
        return !!isRegExp;
      }
      return Type.regex(argument);
    },
    ToString: function ToString(string) {
      return $String(string);
    }
  };
  if (supportsDescriptors && hasSymbols) {
    var defineWellKnownSymbol = function defineWellKnownSymbol(name) {
      if (Type.symbol(Symbol[name])) {
        return Symbol[name];
      }
      var sym = Symbol['for']('Symbol.' + name);
      Object.defineProperty(Symbol, name, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: sym
      });
      return sym;
    };
    if (!Type.symbol(Symbol.search)) {
      var symbolSearch = defineWellKnownSymbol('search');
      var originalSearch = String.prototype.search;
      defineProperty(RegExp.prototype, symbolSearch, function search(string) {
        return ES.Call(originalSearch, string, [this]);
      });
      var searchShim = function search(regexp) {
        var O = ES.RequireObjectCoercible(this);
        if (regexp !== null && typeof regexp !== 'undefined') {
          var searcher = ES.GetMethod(regexp, symbolSearch);
          if (typeof searcher !== 'undefined') {
            return ES.Call(searcher, regexp, [O]);
          }
        }
        return ES.Call(originalSearch, O, [ES.ToString(regexp)]);
      };
      overrideNative(String.prototype, 'search', searchShim);
    }
    if (!Type.symbol(Symbol.replace)) {
      var symbolReplace = defineWellKnownSymbol('replace');
      var originalReplace = String.prototype.replace;
      defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {
        return ES.Call(originalReplace, string, [this, replaceValue]);
      });
      var replaceShim = function replace(searchValue, replaceValue) {
        var O = ES.RequireObjectCoercible(this);
        if (searchValue !== null && typeof searchValue !== 'undefined') {
          var replacer = ES.GetMethod(searchValue, symbolReplace);
          if (typeof replacer !== 'undefined') {
            return ES.Call(replacer, searchValue, [O, replaceValue]);
          }
        }
        return ES.Call(originalReplace, O, [ES.ToString(searchValue), replaceValue]);
      };
      overrideNative(String.prototype, 'replace', replaceShim);
    }
    if (!Type.symbol(Symbol.split)) {
      var symbolSplit = defineWellKnownSymbol('split');
      var originalSplit = String.prototype.split;
      defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {
        return ES.Call(originalSplit, string, [this, limit]);
      });
      var splitShim = function split(separator, limit) {
        var O = ES.RequireObjectCoercible(this);
        if (separator !== null && typeof separator !== 'undefined') {
          var splitter = ES.GetMethod(separator, symbolSplit);
          if (typeof splitter !== 'undefined') {
            return ES.Call(splitter, separator, [O, limit]);
          }
        }
        return ES.Call(originalSplit, O, [ES.ToString(separator), limit]);
      };
      overrideNative(String.prototype, 'split', splitShim);
    }
    var symbolMatchExists = Type.symbol(Symbol.match);
    var stringMatchIgnoresSymbolMatch = symbolMatchExists && (function() {
      var o = {};
      o[Symbol.match] = function() {
        return 42;
      };
      return 'a'.match(o) !== 42;
    }());
    if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {
      var symbolMatch = defineWellKnownSymbol('match');
      var originalMatch = String.prototype.match;
      defineProperty(RegExp.prototype, symbolMatch, function match(string) {
        return ES.Call(originalMatch, string, [this]);
      });
      var matchShim = function match(regexp) {
        var O = ES.RequireObjectCoercible(this);
        if (regexp !== null && typeof regexp !== 'undefined') {
          var matcher = ES.GetMethod(regexp, symbolMatch);
          if (typeof matcher !== 'undefined') {
            return ES.Call(matcher, regexp, [O]);
          }
        }
        return ES.Call(originalMatch, O, [ES.ToString(regexp)]);
      };
      overrideNative(String.prototype, 'match', matchShim);
    }
  }
  var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
    Value.preserveToString(replacement, original);
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(original, replacement);
    }
    if (supportsDescriptors) {
      _forEach(Object.getOwnPropertyNames(original), function(key) {
        if (key in noop || keysToSkip[key]) {
          return;
        }
        Value.proxy(original, key, replacement);
      });
    } else {
      _forEach(Object.keys(original), function(key) {
        if (key in noop || keysToSkip[key]) {
          return;
        }
        replacement[key] = original[key];
      });
    }
    replacement.prototype = original.prototype;
    Value.redefine(original.prototype, 'constructor', replacement);
  };
  var defaultSpeciesGetter = function() {
    return this;
  };
  var addDefaultSpecies = function(C) {
    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
      Value.getter(C, symbolSpecies, defaultSpeciesGetter);
    }
  };
  var addIterator = function(prototype, impl) {
    var implementation = impl || function iterator() {
      return this;
    };
    defineProperty(prototype, $iterator$, implementation);
    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
      prototype[$iterator$] = implementation;
    }
  };
  var createDataProperty = function createDataProperty(object, name, value) {
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };
  var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
    createDataProperty(object, name, value);
    if (!ES.SameValue(object[name], value)) {
      throw new TypeError('property is nonconfigurable');
    }
  };
  var emulateES6construct = function(o, defaultNewTarget, defaultProto, slots) {
    if (!ES.TypeIsObject(o)) {
      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
    }
    var proto = defaultNewTarget.prototype;
    if (!ES.TypeIsObject(proto)) {
      proto = defaultProto;
    }
    var obj = create(proto);
    for (var name in slots) {
      if (_hasOwnProperty(slots, name)) {
        var value = slots[name];
        defineProperty(obj, name, value, true);
      }
    }
    return obj;
  };
  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
    var originalFromCodePoint = String.fromCodePoint;
    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {
      return ES.Call(originalFromCodePoint, this, arguments);
    });
  }
  var StringShims = {
    fromCodePoint: function fromCodePoint(codePoints) {
      var result = [];
      var next;
      for (var i = 0,
          length = arguments.length; i < length; i++) {
        next = Number(arguments[i]);
        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
          throw new RangeError('Invalid code point ' + next);
        }
        if (next < 0x10000) {
          _push(result, String.fromCharCode(next));
        } else {
          next -= 0x10000;
          _push(result, String.fromCharCode((next >> 10) + 0xD800));
          _push(result, String.fromCharCode((next % 0x400) + 0xDC00));
        }
      }
      return result.join('');
    },
    raw: function raw(callSite) {
      var cooked = ES.ToObject(callSite, 'bad callSite');
      var rawString = ES.ToObject(cooked.raw, 'bad raw value');
      var len = rawString.length;
      var literalsegments = ES.ToLength(len);
      if (literalsegments <= 0) {
        return '';
      }
      var stringElements = [];
      var nextIndex = 0;
      var nextKey,
          next,
          nextSeg,
          nextSub;
      while (nextIndex < literalsegments) {
        nextKey = ES.ToString(nextIndex);
        nextSeg = ES.ToString(rawString[nextKey]);
        _push(stringElements, nextSeg);
        if (nextIndex + 1 >= literalsegments) {
          break;
        }
        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
        nextSub = ES.ToString(next);
        _push(stringElements, nextSub);
        nextIndex += 1;
      }
      return stringElements.join('');
    }
  };
  if (String.raw && String.raw({raw: {
      0: 'x',
      1: 'y',
      length: 2
    }}) !== 'xy') {
    overrideNative(String, 'raw', StringShims.raw);
  }
  defineProperties(String, StringShims);
  var stringRepeat = function repeat(s, times) {
    if (times < 1) {
      return '';
    }
    if (times % 2) {
      return repeat(s, times - 1) + s;
    }
    var half = repeat(s, times / 2);
    return half + half;
  };
  var stringMaxLength = Infinity;
  var StringPrototypeShims = {
    repeat: function repeat(times) {
      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
      var numTimes = ES.ToInteger(times);
      if (numTimes < 0 || numTimes >= stringMaxLength) {
        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
      }
      return stringRepeat(thisStr, numTimes);
    },
    startsWith: function startsWith(searchString) {
      var S = ES.ToString(ES.RequireObjectCoercible(this));
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('Cannot call method "startsWith" with a regex');
      }
      var searchStr = ES.ToString(searchString);
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      var start = _max(ES.ToInteger(position), 0);
      return _strSlice(S, start, start + searchStr.length) === searchStr;
    },
    endsWith: function endsWith(searchString) {
      var S = ES.ToString(ES.RequireObjectCoercible(this));
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('Cannot call method "endsWith" with a regex');
      }
      var searchStr = ES.ToString(searchString);
      var len = S.length;
      var endPosition;
      if (arguments.length > 1) {
        endPosition = arguments[1];
      }
      var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);
      var end = _min(_max(pos, 0), len);
      return _strSlice(S, end - searchStr.length, end) === searchStr;
    },
    includes: function includes(searchString) {
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('"includes" does not accept a RegExp');
      }
      var searchStr = ES.ToString(searchString);
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      return _indexOf(this, searchStr, position) !== -1;
    },
    codePointAt: function codePointAt(pos) {
      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
      var position = ES.ToInteger(pos);
      var length = thisStr.length;
      if (position >= 0 && position < length) {
        var first = thisStr.charCodeAt(position);
        var isEnd = position + 1 === length;
        if (first < 0xD800 || first > 0xDBFF || isEnd) {
          return first;
        }
        var second = thisStr.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          return first;
        }
        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
      }
    }
  };
  if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {
    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
  }
  if (String.prototype.startsWith && String.prototype.endsWith) {
    var startsWithRejectsRegex = throwsError(function() {
      '/a/'.startsWith(/a/);
    });
    var startsWithHandlesInfinity = valueOrFalseIfThrows(function() {
      return 'abc'.startsWith('a', Infinity) === false;
    });
    if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
    }
  }
  if (hasSymbols) {
    var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function() {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.startsWith(re);
    });
    if (!startsWithSupportsSymbolMatch) {
      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
    }
    var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function() {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.endsWith(re);
    });
    if (!endsWithSupportsSymbolMatch) {
      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
    }
    var includesSupportsSymbolMatch = valueOrFalseIfThrows(function() {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.includes(re);
    });
    if (!includesSupportsSymbolMatch) {
      overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
    }
  }
  defineProperties(String.prototype, StringPrototypeShims);
  var ws = ['\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003', '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028', '\u2029\uFEFF'].join('');
  var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
  var trimShim = function trim() {
    return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');
  };
  var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
  var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
  var isBadHexRegex = /^[\-+]0x[0-9a-f]+$/i;
  var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
  defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);
  var iteratorResult = function(x) {
    return {
      value: x,
      done: arguments.length === 0
    };
  };
  var StringIterator = function(s) {
    ES.RequireObjectCoercible(s);
    this._s = ES.ToString(s);
    this._i = 0;
  };
  StringIterator.prototype.next = function() {
    var s = this._s;
    var i = this._i;
    if (typeof s === 'undefined' || i >= s.length) {
      this._s = void 0;
      return iteratorResult();
    }
    var first = s.charCodeAt(i);
    var second,
        len;
    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
      len = 1;
    } else {
      second = s.charCodeAt(i + 1);
      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
    }
    this._i = i + len;
    return iteratorResult(s.substr(i, len));
  };
  addIterator(StringIterator.prototype);
  addIterator(String.prototype, function() {
    return new StringIterator(this);
  });
  var ArrayShims = {
    from: function from(items) {
      var C = this;
      var mapFn;
      if (arguments.length > 1) {
        mapFn = arguments[1];
      }
      var mapping,
          T;
      if (typeof mapFn === 'undefined') {
        mapping = false;
      } else {
        if (!ES.IsCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
        mapping = true;
      }
      var usingIterator = typeof(isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';
      var length,
          result,
          i;
      if (usingIterator) {
        result = ES.IsConstructor(C) ? Object(new C()) : [];
        var iterator = ES.GetIterator(items);
        var next,
            nextValue;
        i = 0;
        while (true) {
          next = ES.IteratorStep(iterator);
          if (next === false) {
            break;
          }
          nextValue = next.value;
          try {
            if (mapping) {
              nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
            }
            result[i] = nextValue;
          } catch (e) {
            ES.IteratorClose(iterator, true);
            throw e;
          }
          i += 1;
        }
        length = i;
      } else {
        var arrayLike = ES.ToObject(items);
        length = ES.ToLength(arrayLike.length);
        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
        var value;
        for (i = 0; i < length; ++i) {
          value = arrayLike[i];
          if (mapping) {
            value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);
          }
          createDataPropertyOrThrow(result, i, value);
        }
      }
      result.length = length;
      return result;
    },
    of: function of() {
      var len = arguments.length;
      var C = this;
      var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);
      for (var k = 0; k < len; ++k) {
        createDataPropertyOrThrow(A, k, arguments[k]);
      }
      A.length = len;
      return A;
    }
  };
  defineProperties(Array, ArrayShims);
  addDefaultSpecies(Array);
  ArrayIterator = function(array, kind) {
    this.i = 0;
    this.array = array;
    this.kind = kind;
  };
  defineProperties(ArrayIterator.prototype, {next: function() {
      var i = this.i;
      var array = this.array;
      if (!(this instanceof ArrayIterator)) {
        throw new TypeError('Not an ArrayIterator');
      }
      if (typeof array !== 'undefined') {
        var len = ES.ToLength(array.length);
        for (; i < len; i++) {
          var kind = this.kind;
          var retval;
          if (kind === 'key') {
            retval = i;
          } else if (kind === 'value') {
            retval = array[i];
          } else if (kind === 'entry') {
            retval = [i, array[i]];
          }
          this.i = i + 1;
          return iteratorResult(retval);
        }
      }
      this.array = void 0;
      return iteratorResult();
    }});
  addIterator(ArrayIterator.prototype);
  var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || (function() {
    var Foo = function Foo(len) {
      this.length = len;
    };
    Foo.prototype = [];
    var fooArr = Array.of.apply(Foo, [1, 2]);
    return fooArr instanceof Foo && fooArr.length === 2;
  }());
  if (!arrayOfSupportsSubclassing) {
    overrideNative(Array, 'of', ArrayShims.of);
  }
  var ArrayPrototypeShims = {
    copyWithin: function copyWithin(target, start) {
      var o = ES.ToObject(this);
      var len = ES.ToLength(o.length);
      var relativeTarget = ES.ToInteger(target);
      var relativeStart = ES.ToInteger(start);
      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
      var end;
      if (arguments.length > 2) {
        end = arguments[2];
      }
      var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);
      var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);
      var count = _min(finalItem - from, len - to);
      var direction = 1;
      if (from < to && to < (from + count)) {
        direction = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count > 0) {
        if (from in o) {
          o[to] = o[from];
        } else {
          delete o[to];
        }
        from += direction;
        to += direction;
        count -= 1;
      }
      return o;
    },
    fill: function fill(value) {
      var start;
      if (arguments.length > 1) {
        start = arguments[1];
      }
      var end;
      if (arguments.length > 2) {
        end = arguments[2];
      }
      var O = ES.ToObject(this);
      var len = ES.ToLength(O.length);
      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
      end = ES.ToInteger(typeof end === 'undefined' ? len : end);
      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
      var relativeEnd = end < 0 ? len + end : end;
      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
        O[i] = value;
      }
      return O;
    },
    find: function find(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#find: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0,
          value; i < length; i++) {
        value = list[i];
        if (thisArg) {
          if (_call(predicate, thisArg, value, i, list)) {
            return value;
          }
        } else if (predicate(value, i, list)) {
          return value;
        }
      }
    },
    findIndex: function findIndex(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#findIndex: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0; i < length; i++) {
        if (thisArg) {
          if (_call(predicate, thisArg, list[i], i, list)) {
            return i;
          }
        } else if (predicate(list[i], i, list)) {
          return i;
        }
      }
      return -1;
    },
    keys: function keys() {
      return new ArrayIterator(this, 'key');
    },
    values: function values() {
      return new ArrayIterator(this, 'value');
    },
    entries: function entries() {
      return new ArrayIterator(this, 'entry');
    }
  };
  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
    delete Array.prototype.keys;
  }
  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
    delete Array.prototype.entries;
  }
  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
    defineProperties(Array.prototype, {values: Array.prototype[$iterator$]});
    if (Type.symbol(Symbol.unscopables)) {
      Array.prototype[Symbol.unscopables].values = true;
    }
  }
  if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
    var originalArrayPrototypeValues = Array.prototype.values;
    overrideNative(Array.prototype, 'values', function values() {
      return ES.Call(originalArrayPrototypeValues, this, arguments);
    });
    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
  }
  defineProperties(Array.prototype, ArrayPrototypeShims);
  if (1 / [true].indexOf(true, -0) < 0) {
    defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {
      var value = _arrayIndexOfApply(this, arguments);
      if (value === 0 && (1 / value) < 0) {
        return 0;
      }
      return value;
    }, true);
  }
  addIterator(Array.prototype, function() {
    return this.values();
  });
  if (Object.getPrototypeOf) {
    addIterator(Object.getPrototypeOf([].values()));
  }
  var arrayFromSwallowsNegativeLengths = (function() {
    return valueOrFalseIfThrows(function() {
      return Array.from({length: -1}).length === 0;
    });
  }());
  var arrayFromHandlesIterables = (function() {
    var arr = Array.from([0].entries());
    return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
  }());
  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
    overrideNative(Array, 'from', ArrayShims.from);
  }
  var arrayFromHandlesUndefinedMapFunction = (function() {
    return valueOrFalseIfThrows(function() {
      return Array.from([0], void 0);
    });
  }());
  if (!arrayFromHandlesUndefinedMapFunction) {
    var origArrayFrom = Array.from;
    overrideNative(Array, 'from', function from(items) {
      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
        return ES.Call(origArrayFrom, this, arguments);
      } else {
        return _call(origArrayFrom, this, items);
      }
    });
  }
  var int32sAsOne = -(Math.pow(2, 32) - 1);
  var toLengthsCorrectly = function(method, reversed) {
    var obj = {length: int32sAsOne};
    obj[reversed ? (obj.length >>> 0) - 1 : 0] = true;
    return valueOrFalseIfThrows(function() {
      _call(method, obj, function() {
        throw new RangeError('should not reach here');
      }, []);
      return true;
    });
  };
  if (!toLengthsCorrectly(Array.prototype.forEach)) {
    var originalForEach = Array.prototype.forEach;
    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
      return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.map)) {
    var originalMap = Array.prototype.map;
    overrideNative(Array.prototype, 'map', function map(callbackFn) {
      return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.filter)) {
    var originalFilter = Array.prototype.filter;
    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
      return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.some)) {
    var originalSome = Array.prototype.some;
    overrideNative(Array.prototype, 'some', function some(callbackFn) {
      return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.every)) {
    var originalEvery = Array.prototype.every;
    overrideNative(Array.prototype, 'every', function every(callbackFn) {
      return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.reduce)) {
    var originalReduce = Array.prototype.reduce;
    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
      return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
    var originalReduceRight = Array.prototype.reduceRight;
    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
      return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  var lacksOctalSupport = Number('0o10') !== 8;
  var lacksBinarySupport = Number('0b10') !== 2;
  var trimsNonWhitespace = _some(nonWS, function(c) {
    return Number(c + 0 + c) === 0;
  });
  if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
    var OrigNumber = Number;
    var binaryRegex = /^0b[01]+$/i;
    var octalRegex = /^0o[0-7]+$/i;
    var isBinary = binaryRegex.test.bind(binaryRegex);
    var isOctal = octalRegex.test.bind(octalRegex);
    var toPrimitive = function(O) {
      var result;
      if (typeof O.valueOf === 'function') {
        result = O.valueOf();
        if (Type.primitive(result)) {
          return result;
        }
      }
      if (typeof O.toString === 'function') {
        result = O.toString();
        if (Type.primitive(result)) {
          return result;
        }
      }
      throw new TypeError('No default value');
    };
    var hasNonWS = nonWSregex.test.bind(nonWSregex);
    var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
    var NumberShim = (function() {
      var NumberShim = function Number(value) {
        var primValue;
        if (arguments.length > 0) {
          primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
        } else {
          primValue = 0;
        }
        if (typeof primValue === 'string') {
          primValue = ES.Call(trimShim, primValue);
          if (isBinary(primValue)) {
            primValue = parseInt(_strSlice(primValue, 2), 2);
          } else if (isOctal(primValue)) {
            primValue = parseInt(_strSlice(primValue, 2), 8);
          } else if (hasNonWS(primValue) || isBadHex(primValue)) {
            primValue = NaN;
          }
        }
        var receiver = this;
        var valueOfSucceeds = valueOrFalseIfThrows(function() {
          OrigNumber.prototype.valueOf.call(receiver);
          return true;
        });
        if (receiver instanceof NumberShim && !valueOfSucceeds) {
          return new OrigNumber(primValue);
        }
        return OrigNumber(primValue);
      };
      return NumberShim;
    }());
    wrapConstructor(OrigNumber, NumberShim, {});
    defineProperties(NumberShim, {
      NaN: OrigNumber.NaN,
      MAX_VALUE: OrigNumber.MAX_VALUE,
      MIN_VALUE: OrigNumber.MIN_VALUE,
      NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,
      POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY
    });
    Number = NumberShim;
    Value.redefine(globals, 'Number', NumberShim);
  }
  var maxSafeInteger = Math.pow(2, 53) - 1;
  defineProperties(Number, {
    MAX_SAFE_INTEGER: maxSafeInteger,
    MIN_SAFE_INTEGER: -maxSafeInteger,
    EPSILON: 2.220446049250313e-16,
    parseInt: globals.parseInt,
    parseFloat: globals.parseFloat,
    isFinite: numberIsFinite,
    isInteger: function isInteger(value) {
      return numberIsFinite(value) && ES.ToInteger(value) === value;
    },
    isSafeInteger: function isSafeInteger(value) {
      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
    },
    isNaN: numberIsNaN
  });
  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);
  if (![, 1].find(function(item, idx) {
    return idx === 0;
  })) {
    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
  }
  if ([, 1].findIndex(function(item, idx) {
    return idx === 0;
  }) !== 0) {
    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
  }
  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
  var ensureEnumerable = function ensureEnumerable(obj, prop) {
    if (supportsDescriptors && isEnumerableOn(obj, prop)) {
      Object.defineProperty(obj, prop, {enumerable: false});
    }
  };
  var sliceArgs = function sliceArgs() {
    var initial = Number(this);
    var len = arguments.length;
    var desiredArgCount = len - initial;
    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
    for (var i = initial; i < len; ++i) {
      args[i - initial] = arguments[i];
    }
    return args;
  };
  var assignTo = function assignTo(source) {
    return function assignToSource(target, key) {
      target[key] = source[key];
      return target;
    };
  };
  var assignReducer = function(target, source) {
    var sourceKeys = keys(Object(source));
    var symbols;
    if (ES.IsCallable(Object.getOwnPropertySymbols)) {
      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
    }
    return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);
  };
  var ObjectShims = {
    assign: function(target, source) {
      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
      return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);
    },
    is: function is(a, b) {
      return ES.SameValue(a, b);
    }
  };
  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && (function() {
    var thrower = Object.preventExtensions({1: 2});
    try {
      Object.assign(thrower, 'xy');
    } catch (e) {
      return thrower[1] === 'y';
    }
  }());
  if (assignHasPendingExceptions) {
    overrideNative(Object, 'assign', ObjectShims.assign);
  }
  defineProperties(Object, ObjectShims);
  if (supportsDescriptors) {
    var ES5ObjectShims = {setPrototypeOf: (function(Object, magic) {
        var set;
        var checkArgs = function(O, proto) {
          if (!ES.TypeIsObject(O)) {
            throw new TypeError('cannot set prototype on a non-object');
          }
          if (!(proto === null || ES.TypeIsObject(proto))) {
            throw new TypeError('can only set prototype to an object or null' + proto);
          }
        };
        var setPrototypeOf = function(O, proto) {
          checkArgs(O, proto);
          _call(set, O, proto);
          return O;
        };
        try {
          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
          _call(set, {}, null);
        } catch (e) {
          if (Object.prototype !== {}[magic]) {
            return;
          }
          set = function(proto) {
            this[magic] = proto;
          };
          setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object.prototype) instanceof Object;
        }
        return setPrototypeOf;
      }(Object, '__proto__'))};
    defineProperties(Object, ES5ObjectShims);
  }
  if (Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null) {
    (function() {
      var FAKENULL = Object.create(null);
      var gpo = Object.getPrototypeOf;
      var spo = Object.setPrototypeOf;
      Object.getPrototypeOf = function(o) {
        var result = gpo(o);
        return result === FAKENULL ? null : result;
      };
      Object.setPrototypeOf = function(o, p) {
        var proto = p === null ? FAKENULL : p;
        return spo(o, proto);
      };
      Object.setPrototypeOf.polyfill = false;
    }());
  }
  var objectKeysAcceptsPrimitives = !throwsError(function() {
    Object.keys('foo');
  });
  if (!objectKeysAcceptsPrimitives) {
    var originalObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      return originalObjectKeys(ES.ToObject(value));
    });
    keys = Object.keys;
  }
  var objectKeysRejectsRegex = throwsError(function() {
    Object.keys(/a/g);
  });
  if (objectKeysRejectsRegex) {
    var regexRejectingObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      if (Type.regex(value)) {
        var regexKeys = [];
        for (var k in value) {
          if (_hasOwnProperty(value, k)) {
            _push(regexKeys, k);
          }
        }
        return regexKeys;
      }
      return regexRejectingObjectKeys(value);
    });
    keys = Object.keys;
  }
  if (Object.getOwnPropertyNames) {
    var objectGOPNAcceptsPrimitives = !throwsError(function() {
      Object.getOwnPropertyNames('foo');
    });
    if (!objectGOPNAcceptsPrimitives) {
      var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
        var val = ES.ToObject(value);
        if (_toString(val) === '[object Window]') {
          try {
            return originalObjectGetOwnPropertyNames(val);
          } catch (e) {
            return _concat([], cachedWindowNames);
          }
        }
        return originalObjectGetOwnPropertyNames(val);
      });
    }
  }
  if (Object.getOwnPropertyDescriptor) {
    var objectGOPDAcceptsPrimitives = !throwsError(function() {
      Object.getOwnPropertyDescriptor('foo', 'bar');
    });
    if (!objectGOPDAcceptsPrimitives) {
      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
      });
    }
  }
  if (Object.seal) {
    var objectSealAcceptsPrimitives = !throwsError(function() {
      Object.seal('foo');
    });
    if (!objectSealAcceptsPrimitives) {
      var originalObjectSeal = Object.seal;
      overrideNative(Object, 'seal', function seal(value) {
        if (!ES.TypeIsObject(value)) {
          return value;
        }
        return originalObjectSeal(value);
      });
    }
  }
  if (Object.isSealed) {
    var objectIsSealedAcceptsPrimitives = !throwsError(function() {
      Object.isSealed('foo');
    });
    if (!objectIsSealedAcceptsPrimitives) {
      var originalObjectIsSealed = Object.isSealed;
      overrideNative(Object, 'isSealed', function isSealed(value) {
        if (!ES.TypeIsObject(value)) {
          return true;
        }
        return originalObjectIsSealed(value);
      });
    }
  }
  if (Object.freeze) {
    var objectFreezeAcceptsPrimitives = !throwsError(function() {
      Object.freeze('foo');
    });
    if (!objectFreezeAcceptsPrimitives) {
      var originalObjectFreeze = Object.freeze;
      overrideNative(Object, 'freeze', function freeze(value) {
        if (!ES.TypeIsObject(value)) {
          return value;
        }
        return originalObjectFreeze(value);
      });
    }
  }
  if (Object.isFrozen) {
    var objectIsFrozenAcceptsPrimitives = !throwsError(function() {
      Object.isFrozen('foo');
    });
    if (!objectIsFrozenAcceptsPrimitives) {
      var originalObjectIsFrozen = Object.isFrozen;
      overrideNative(Object, 'isFrozen', function isFrozen(value) {
        if (!ES.TypeIsObject(value)) {
          return true;
        }
        return originalObjectIsFrozen(value);
      });
    }
  }
  if (Object.preventExtensions) {
    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function() {
      Object.preventExtensions('foo');
    });
    if (!objectPreventExtensionsAcceptsPrimitives) {
      var originalObjectPreventExtensions = Object.preventExtensions;
      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
        if (!ES.TypeIsObject(value)) {
          return value;
        }
        return originalObjectPreventExtensions(value);
      });
    }
  }
  if (Object.isExtensible) {
    var objectIsExtensibleAcceptsPrimitives = !throwsError(function() {
      Object.isExtensible('foo');
    });
    if (!objectIsExtensibleAcceptsPrimitives) {
      var originalObjectIsExtensible = Object.isExtensible;
      overrideNative(Object, 'isExtensible', function isExtensible(value) {
        if (!ES.TypeIsObject(value)) {
          return false;
        }
        return originalObjectIsExtensible(value);
      });
    }
  }
  if (Object.getPrototypeOf) {
    var objectGetProtoAcceptsPrimitives = !throwsError(function() {
      Object.getPrototypeOf('foo');
    });
    if (!objectGetProtoAcceptsPrimitives) {
      var originalGetProto = Object.getPrototypeOf;
      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
        return originalGetProto(ES.ToObject(value));
      });
    }
  }
  var hasFlags = supportsDescriptors && (function() {
    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
    return desc && ES.IsCallable(desc.get);
  }());
  if (supportsDescriptors && !hasFlags) {
    var regExpFlagsGetter = function flags() {
      if (!ES.TypeIsObject(this)) {
        throw new TypeError('Method called on incompatible type: must be an object.');
      }
      var result = '';
      if (this.global) {
        result += 'g';
      }
      if (this.ignoreCase) {
        result += 'i';
      }
      if (this.multiline) {
        result += 'm';
      }
      if (this.unicode) {
        result += 'u';
      }
      if (this.sticky) {
        result += 'y';
      }
      return result;
    };
    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
  }
  var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function() {
    return String(new RegExp(/a/g, 'i')) === '/a/i';
  });
  var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && (function() {
    var regex = /./;
    regex[Symbol.match] = false;
    return RegExp(regex) === regex;
  }());
  var regexToStringIsGeneric = valueOrFalseIfThrows(function() {
    return RegExp.prototype.toString.call({source: 'abc'}) === '/abc/';
  });
  var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function() {
    return RegExp.prototype.toString.call({
      source: 'a',
      flags: 'b'
    }) === '/a/b';
  });
  if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {
    var origRegExpToString = RegExp.prototype.toString;
    defineProperty(RegExp.prototype, 'toString', function toString() {
      var R = ES.RequireObjectCoercible(this);
      if (Type.regex(R)) {
        return _call(origRegExpToString, R);
      }
      var pattern = $String(R.source);
      var flags = $String(R.flags);
      return '/' + pattern + '/' + flags;
    }, true);
    Value.preserveToString(RegExp.prototype.toString, origRegExpToString);
  }
  if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {
    var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};
    var legacySourceGetter = function() {
      return this.source;
    };
    var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;
    var OrigRegExp = RegExp;
    var RegExpShim = (function() {
      return function RegExp(pattern, flags) {
        var patternIsRegExp = ES.IsRegExp(pattern);
        var calledWithNew = this instanceof RegExp;
        if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp) {
          return pattern;
        }
        var P = pattern;
        var F = flags;
        if (Type.regex(pattern)) {
          P = ES.Call(sourceGetter, pattern);
          F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;
          return new RegExp(P, F);
        } else if (patternIsRegExp) {
          P = pattern.source;
          F = typeof flags === 'undefined' ? pattern.flags : flags;
        }
        return new OrigRegExp(pattern, flags);
      };
    }());
    wrapConstructor(OrigRegExp, RegExpShim, {$input: true});
    RegExp = RegExpShim;
    Value.redefine(globals, 'RegExp', RegExpShim);
  }
  if (supportsDescriptors) {
    var regexGlobals = {
      input: '$_',
      lastMatch: '$&',
      lastParen: '$+',
      leftContext: '$`',
      rightContext: '$\''
    };
    _forEach(keys(regexGlobals), function(prop) {
      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
        Value.getter(RegExp, regexGlobals[prop], function get() {
          return RegExp[prop];
        });
      }
    });
  }
  addDefaultSpecies(RegExp);
  var inverseEpsilon = 1 / Number.EPSILON;
  var roundTiesToEven = function roundTiesToEven(n) {
    return (n + inverseEpsilon) - inverseEpsilon;
  };
  var BINARY_32_EPSILON = Math.pow(2, -23);
  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
  var BINARY_32_MIN_VALUE = Math.pow(2, -126);
  var E = Math.E;
  var LOG2E = Math.LOG2E;
  var LOG10E = Math.LOG10E;
  var numberCLZ = Number.prototype.clz;
  delete Number.prototype.clz;
  var MathShims = {
    acosh: function acosh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || value < 1) {
        return NaN;
      }
      if (x === 1) {
        return 0;
      }
      if (x === Infinity) {
        return x;
      }
      return _log(x / E + _sqrt(x + 1) * _sqrt(x - 1) / E) + 1;
    },
    asinh: function asinh(value) {
      var x = Number(value);
      if (x === 0 || !globalIsFinite(x)) {
        return x;
      }
      return x < 0 ? -asinh(-x) : _log(x + _sqrt(x * x + 1));
    },
    atanh: function atanh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || x < -1 || x > 1) {
        return NaN;
      }
      if (x === -1) {
        return -Infinity;
      }
      if (x === 1) {
        return Infinity;
      }
      if (x === 0) {
        return x;
      }
      return 0.5 * _log((1 + x) / (1 - x));
    },
    cbrt: function cbrt(value) {
      var x = Number(value);
      if (x === 0) {
        return x;
      }
      var negate = x < 0;
      var result;
      if (negate) {
        x = -x;
      }
      if (x === Infinity) {
        result = Infinity;
      } else {
        result = _exp(_log(x) / 3);
        result = (x / (result * result) + (2 * result)) / 3;
      }
      return negate ? -result : result;
    },
    clz32: function clz32(value) {
      var x = Number(value);
      var number = ES.ToUint32(x);
      if (number === 0) {
        return 32;
      }
      return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * LOG2E);
    },
    cosh: function cosh(value) {
      var x = Number(value);
      if (x === 0) {
        return 1;
      }
      if (numberIsNaN(x)) {
        return NaN;
      }
      if (!globalIsFinite(x)) {
        return Infinity;
      }
      if (x < 0) {
        x = -x;
      }
      if (x > 21) {
        return _exp(x) / 2;
      }
      return (_exp(x) + _exp(-x)) / 2;
    },
    expm1: function expm1(value) {
      var x = Number(value);
      if (x === -Infinity) {
        return -1;
      }
      if (!globalIsFinite(x) || x === 0) {
        return x;
      }
      if (_abs(x) > 0.5) {
        return _exp(x) - 1;
      }
      var t = x;
      var sum = 0;
      var n = 1;
      while (sum + t !== sum) {
        sum += t;
        n += 1;
        t *= x / n;
      }
      return sum;
    },
    hypot: function hypot(x, y) {
      var result = 0;
      var largest = 0;
      for (var i = 0; i < arguments.length; ++i) {
        var value = _abs(Number(arguments[i]));
        if (largest < value) {
          result *= (largest / value) * (largest / value);
          result += 1;
          largest = value;
        } else {
          result += value > 0 ? (value / largest) * (value / largest) : value;
        }
      }
      return largest === Infinity ? Infinity : largest * _sqrt(result);
    },
    log2: function log2(value) {
      return _log(value) * LOG2E;
    },
    log10: function log10(value) {
      return _log(value) * LOG10E;
    },
    log1p: function log1p(value) {
      var x = Number(value);
      if (x < -1 || numberIsNaN(x)) {
        return NaN;
      }
      if (x === 0 || x === Infinity) {
        return x;
      }
      if (x === -1) {
        return -Infinity;
      }
      return (1 + x) - 1 === 0 ? x : x * (_log(1 + x) / ((1 + x) - 1));
    },
    sign: _sign,
    sinh: function sinh(value) {
      var x = Number(value);
      if (!globalIsFinite(x) || x === 0) {
        return x;
      }
      if (_abs(x) < 1) {
        return (Math.expm1(x) - Math.expm1(-x)) / 2;
      }
      return (_exp(x - 1) - _exp(-x - 1)) * E / 2;
    },
    tanh: function tanh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || x === 0) {
        return x;
      }
      if (x >= 20) {
        return 1;
      }
      if (x <= -20) {
        return -1;
      }
      return (Math.expm1(x) - Math.expm1(-x)) / (_exp(x) + _exp(-x));
    },
    trunc: function trunc(value) {
      var x = Number(value);
      return x < 0 ? -_floor(-x) : _floor(x);
    },
    imul: function imul(x, y) {
      var a = ES.ToUint32(x);
      var b = ES.ToUint32(y);
      var ah = (a >>> 16) & 0xffff;
      var al = a & 0xffff;
      var bh = (b >>> 16) & 0xffff;
      var bl = b & 0xffff;
      return (al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0;
    },
    fround: function fround(x) {
      var v = Number(x);
      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
        return v;
      }
      var sign = _sign(v);
      var abs = _abs(v);
      if (abs < BINARY_32_MIN_VALUE) {
        return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
      }
      var a = (1 + BINARY_32_EPSILON / Number.EPSILON) * abs;
      var result = a - (a - abs);
      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
        return sign * Infinity;
      }
      return sign * result;
    }
  };
  defineProperties(Math, MathShims);
  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
  defineProperty(Math, 'cbrt', MathShims.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8);
  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
  var expm1OfTen = Math.expm1(10);
  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);
  var origMathRound = Math.round;
  var roundHandlesBoundaryConditions = Math.round(0.5 - Number.EPSILON / 4) === 0 && Math.round(-0.5 + Number.EPSILON / 3.99) === 1;
  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
  var largestPositiveNumberWhereRoundBreaks = 2 * inverseEpsilon - 1;
  var roundDoesNotIncreaseIntegers = [smallestPositiveNumberWhereRoundBreaks, largestPositiveNumberWhereRoundBreaks].every(function(num) {
    return Math.round(num) === num;
  });
  defineProperty(Math, 'round', function round(x) {
    var floor = _floor(x);
    var ceil = floor === -1 ? -0 : floor + 1;
    return x - floor < 0.5 ? floor : ceil;
  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
  Value.preserveToString(Math.round, origMathRound);
  var origImul = Math.imul;
  if (Math.imul(0xffffffff, 5) !== -5) {
    Math.imul = MathShims.imul;
    Value.preserveToString(Math.imul, origImul);
  }
  if (Math.imul.length !== 2) {
    overrideNative(Math, 'imul', function imul(x, y) {
      return ES.Call(origImul, Math, arguments);
    });
  }
  var PromiseShim = (function() {
    var setTimeout = globals.setTimeout;
    if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') {
      return;
    }
    ES.IsPromise = function(promise) {
      if (!ES.TypeIsObject(promise)) {
        return false;
      }
      if (typeof promise._promise === 'undefined') {
        return false;
      }
      return true;
    };
    var PromiseCapability = function(C) {
      if (!ES.IsConstructor(C)) {
        throw new TypeError('Bad promise constructor');
      }
      var capability = this;
      var resolver = function(resolve, reject) {
        if (capability.resolve !== void 0 || capability.reject !== void 0) {
          throw new TypeError('Bad Promise implementation!');
        }
        capability.resolve = resolve;
        capability.reject = reject;
      };
      capability.resolve = void 0;
      capability.reject = void 0;
      capability.promise = new C(resolver);
      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
        throw new TypeError('Bad promise constructor');
      }
    };
    var makeZeroTimeout;
    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
      makeZeroTimeout = function() {
        var timeouts = [];
        var messageName = 'zero-timeout-message';
        var setZeroTimeout = function(fn) {
          _push(timeouts, fn);
          window.postMessage(messageName, '*');
        };
        var handleMessage = function(event) {
          if (event.source === window && event.data === messageName) {
            event.stopPropagation();
            if (timeouts.length === 0) {
              return;
            }
            var fn = _shift(timeouts);
            fn();
          }
        };
        window.addEventListener('message', handleMessage, true);
        return setZeroTimeout;
      };
    }
    var makePromiseAsap = function() {
      var P = globals.Promise;
      var pr = P && P.resolve && P.resolve();
      return pr && function(task) {
        return pr.then(task);
      };
    };
    var enqueue = ES.IsCallable(globals.setImmediate) ? globals.setImmediate : typeof process === 'object' && process.nextTick ? process.nextTick : makePromiseAsap() || (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() : function(task) {
      setTimeout(task, 0);
    });
    var PROMISE_IDENTITY = function(x) {
      return x;
    };
    var PROMISE_THROWER = function(e) {
      throw e;
    };
    var PROMISE_PENDING = 0;
    var PROMISE_FULFILLED = 1;
    var PROMISE_REJECTED = 2;
    var PROMISE_FULFILL_OFFSET = 0;
    var PROMISE_REJECT_OFFSET = 1;
    var PROMISE_CAPABILITY_OFFSET = 2;
    var PROMISE_FAKE_CAPABILITY = {};
    var enqueuePromiseReactionJob = function(handler, capability, argument) {
      enqueue(function() {
        promiseReactionJob(handler, capability, argument);
      });
    };
    var promiseReactionJob = function(handler, promiseCapability, argument) {
      var handlerResult,
          f;
      if (promiseCapability === PROMISE_FAKE_CAPABILITY) {
        return handler(argument);
      }
      try {
        handlerResult = handler(argument);
        f = promiseCapability.resolve;
      } catch (e) {
        handlerResult = e;
        f = promiseCapability.reject;
      }
      f(handlerResult);
    };
    var fulfillPromise = function(promise, value) {
      var _promise = promise._promise;
      var length = _promise.reactionLength;
      if (length > 0) {
        enqueuePromiseReactionJob(_promise.fulfillReactionHandler0, _promise.reactionCapability0, value);
        _promise.fulfillReactionHandler0 = void 0;
        _promise.rejectReactions0 = void 0;
        _promise.reactionCapability0 = void 0;
        if (length > 1) {
          for (var i = 1,
              idx = 0; i < length; i++, idx += 3) {
            enqueuePromiseReactionJob(_promise[idx + PROMISE_FULFILL_OFFSET], _promise[idx + PROMISE_CAPABILITY_OFFSET], value);
            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
          }
        }
      }
      _promise.result = value;
      _promise.state = PROMISE_FULFILLED;
      _promise.reactionLength = 0;
    };
    var rejectPromise = function(promise, reason) {
      var _promise = promise._promise;
      var length = _promise.reactionLength;
      if (length > 0) {
        enqueuePromiseReactionJob(_promise.rejectReactionHandler0, _promise.reactionCapability0, reason);
        _promise.fulfillReactionHandler0 = void 0;
        _promise.rejectReactions0 = void 0;
        _promise.reactionCapability0 = void 0;
        if (length > 1) {
          for (var i = 1,
              idx = 0; i < length; i++, idx += 3) {
            enqueuePromiseReactionJob(_promise[idx + PROMISE_REJECT_OFFSET], _promise[idx + PROMISE_CAPABILITY_OFFSET], reason);
            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
          }
        }
      }
      _promise.result = reason;
      _promise.state = PROMISE_REJECTED;
      _promise.reactionLength = 0;
    };
    var createResolvingFunctions = function(promise) {
      var alreadyResolved = false;
      var resolve = function(resolution) {
        var then;
        if (alreadyResolved) {
          return;
        }
        alreadyResolved = true;
        if (resolution === promise) {
          return rejectPromise(promise, new TypeError('Self resolution'));
        }
        if (!ES.TypeIsObject(resolution)) {
          return fulfillPromise(promise, resolution);
        }
        try {
          then = resolution.then;
        } catch (e) {
          return rejectPromise(promise, e);
        }
        if (!ES.IsCallable(then)) {
          return fulfillPromise(promise, resolution);
        }
        enqueue(function() {
          promiseResolveThenableJob(promise, resolution, then);
        });
      };
      var reject = function(reason) {
        if (alreadyResolved) {
          return;
        }
        alreadyResolved = true;
        return rejectPromise(promise, reason);
      };
      return {
        resolve: resolve,
        reject: reject
      };
    };
    var optimizedThen = function(then, thenable, resolve, reject) {
      if (then === Promise$prototype$then) {
        _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
      } else {
        _call(then, thenable, resolve, reject);
      }
    };
    var promiseResolveThenableJob = function(promise, thenable, then) {
      var resolvingFunctions = createResolvingFunctions(promise);
      var resolve = resolvingFunctions.resolve;
      var reject = resolvingFunctions.reject;
      try {
        optimizedThen(then, thenable, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };
    var Promise$prototype,
        Promise$prototype$then;
    var Promise = (function() {
      var PromiseShim = function Promise(resolver) {
        if (!(this instanceof PromiseShim)) {
          throw new TypeError('Constructor Promise requires "new"');
        }
        if (this && this._promise) {
          throw new TypeError('Bad construction');
        }
        if (!ES.IsCallable(resolver)) {
          throw new TypeError('not a valid resolver');
        }
        var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {_promise: {
            result: void 0,
            state: PROMISE_PENDING,
            reactionLength: 0,
            fulfillReactionHandler0: void 0,
            rejectReactionHandler0: void 0,
            reactionCapability0: void 0
          }});
        var resolvingFunctions = createResolvingFunctions(promise);
        var reject = resolvingFunctions.reject;
        try {
          resolver(resolvingFunctions.resolve, reject);
        } catch (e) {
          reject(e);
        }
        return promise;
      };
      return PromiseShim;
    }());
    Promise$prototype = Promise.prototype;
    var _promiseAllResolver = function(index, values, capability, remaining) {
      var alreadyCalled = false;
      return function(x) {
        if (alreadyCalled) {
          return;
        }
        alreadyCalled = true;
        values[index] = x;
        if ((--remaining.count) === 0) {
          var resolve = capability.resolve;
          resolve(values);
        }
      };
    };
    var performPromiseAll = function(iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var values = [];
      var remaining = {count: 1};
      var next,
          nextValue;
      var index = 0;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        values[index] = void 0;
        var nextPromise = C.resolve(nextValue);
        var resolveElement = _promiseAllResolver(index, values, resultCapability, remaining);
        remaining.count += 1;
        optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);
        index += 1;
      }
      if ((--remaining.count) === 0) {
        var resolve = resultCapability.resolve;
        resolve(values);
      }
      return resultCapability.promise;
    };
    var performPromiseRace = function(iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var next,
          nextValue,
          nextPromise;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        nextPromise = C.resolve(nextValue);
        optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);
      }
      return resultCapability.promise;
    };
    defineProperties(Promise, {
      all: function all(iterable) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Promise is not object');
        }
        var capability = new PromiseCapability(C);
        var iterator,
            iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = {
            iterator: iterator,
            done: false
          };
          return performPromiseAll(iteratorRecord, C, capability);
        } catch (e) {
          var exception = e;
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              exception = ee;
            }
          }
          var reject = capability.reject;
          reject(exception);
          return capability.promise;
        }
      },
      race: function race(iterable) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Promise is not object');
        }
        var capability = new PromiseCapability(C);
        var iterator,
            iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = {
            iterator: iterator,
            done: false
          };
          return performPromiseRace(iteratorRecord, C, capability);
        } catch (e) {
          var exception = e;
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              exception = ee;
            }
          }
          var reject = capability.reject;
          reject(exception);
          return capability.promise;
        }
      },
      reject: function reject(reason) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Bad promise constructor');
        }
        var capability = new PromiseCapability(C);
        var rejectFunc = capability.reject;
        rejectFunc(reason);
        return capability.promise;
      },
      resolve: function resolve(v) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Bad promise constructor');
        }
        if (ES.IsPromise(v)) {
          var constructor = v.constructor;
          if (constructor === C) {
            return v;
          }
        }
        var capability = new PromiseCapability(C);
        var resolveFunc = capability.resolve;
        resolveFunc(v);
        return capability.promise;
      }
    });
    defineProperties(Promise$prototype, {
      'catch': function(onRejected) {
        return this.then(null, onRejected);
      },
      then: function then(onFulfilled, onRejected) {
        var promise = this;
        if (!ES.IsPromise(promise)) {
          throw new TypeError('not a promise');
        }
        var C = ES.SpeciesConstructor(promise, Promise);
        var resultCapability;
        var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
        if (returnValueIsIgnored && C === Promise) {
          resultCapability = PROMISE_FAKE_CAPABILITY;
        } else {
          resultCapability = new PromiseCapability(C);
        }
        var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;
        var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;
        var _promise = promise._promise;
        var value;
        if (_promise.state === PROMISE_PENDING) {
          if (_promise.reactionLength === 0) {
            _promise.fulfillReactionHandler0 = fulfillReactionHandler;
            _promise.rejectReactionHandler0 = rejectReactionHandler;
            _promise.reactionCapability0 = resultCapability;
          } else {
            var idx = 3 * (_promise.reactionLength - 1);
            _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
            _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
            _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
          }
          _promise.reactionLength += 1;
        } else if (_promise.state === PROMISE_FULFILLED) {
          value = _promise.result;
          enqueuePromiseReactionJob(fulfillReactionHandler, resultCapability, value);
        } else if (_promise.state === PROMISE_REJECTED) {
          value = _promise.result;
          enqueuePromiseReactionJob(rejectReactionHandler, resultCapability, value);
        } else {
          throw new TypeError('unexpected Promise state');
        }
        return resultCapability.promise;
      }
    });
    PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise);
    Promise$prototype$then = Promise$prototype.then;
    return Promise;
  }());
  if (globals.Promise) {
    delete globals.Promise.accept;
    delete globals.Promise.defer;
    delete globals.Promise.prototype.chain;
  }
  if (typeof PromiseShim === 'function') {
    defineProperties(globals, {Promise: PromiseShim});
    var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function(S) {
      return S.resolve(42).then(function() {}) instanceof S;
    });
    var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function() {
      globals.Promise.reject(42).then(null, 5).then(null, noop);
    });
    var promiseRequiresObjectContext = throwsError(function() {
      globals.Promise.call(3, noop);
    });
    var promiseResolveBroken = (function(Promise) {
      var p = Promise.resolve(5);
      p.constructor = {};
      var p2 = Promise.resolve(p);
      try {
        p2.then(null, noop).then(null, noop);
      } catch (e) {
        return true;
      }
      return p === p2;
    }(globals.Promise));
    var getsThenSynchronously = supportsDescriptors && (function() {
      var count = 0;
      var thenable = Object.defineProperty({}, 'then', {get: function() {
          count += 1;
        }});
      Promise.resolve(thenable);
      return count === 1;
    }());
    var BadResolverPromise = function BadResolverPromise(executor) {
      var p = new Promise(executor);
      executor(3, function() {});
      this.then = p.then;
      this.constructor = BadResolverPromise;
    };
    BadResolverPromise.prototype = Promise.prototype;
    BadResolverPromise.all = Promise.all;
    var hasBadResolverPromise = valueOrFalseIfThrows(function() {
      return !!BadResolverPromise.all([1, 2]);
    });
    if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks || !promiseRequiresObjectContext || promiseResolveBroken || !getsThenSynchronously || hasBadResolverPromise) {
      Promise = PromiseShim;
      overrideNative(globals, 'Promise', PromiseShim);
    }
    if (Promise.all.length !== 1) {
      var origAll = Promise.all;
      overrideNative(Promise, 'all', function all(iterable) {
        return ES.Call(origAll, this, arguments);
      });
    }
    if (Promise.race.length !== 1) {
      var origRace = Promise.race;
      overrideNative(Promise, 'race', function race(iterable) {
        return ES.Call(origRace, this, arguments);
      });
    }
    if (Promise.resolve.length !== 1) {
      var origResolve = Promise.resolve;
      overrideNative(Promise, 'resolve', function resolve(x) {
        return ES.Call(origResolve, this, arguments);
      });
    }
    if (Promise.reject.length !== 1) {
      var origReject = Promise.reject;
      overrideNative(Promise, 'reject', function reject(r) {
        return ES.Call(origReject, this, arguments);
      });
    }
    ensureEnumerable(Promise, 'all');
    ensureEnumerable(Promise, 'race');
    ensureEnumerable(Promise, 'resolve');
    ensureEnumerable(Promise, 'reject');
    addDefaultSpecies(Promise);
  }
  var testOrder = function(a) {
    var b = keys(_reduce(a, function(o, k) {
      o[k] = true;
      return o;
    }, {}));
    return a.join(':') === b.join(':');
  };
  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);
  if (supportsDescriptors) {
    var fastkey = function fastkey(key) {
      if (!preservesInsertionOrder) {
        return null;
      }
      if (typeof key === 'undefined' || key === null) {
        return '^' + ES.ToString(key);
      } else if (typeof key === 'string') {
        return '$' + key;
      } else if (typeof key === 'number') {
        if (!preservesNumericInsertionOrder) {
          return 'n' + key;
        }
        return key;
      } else if (typeof key === 'boolean') {
        return 'b' + key;
      }
      return null;
    };
    var emptyObject = function emptyObject() {
      return Object.create ? Object.create(null) : {};
    };
    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
      if (isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function(entry) {
          if (!ES.TypeIsObject(entry)) {
            throw new TypeError('Iterator value ' + entry + ' is not an entry object');
          }
          map.set(entry[0], entry[1]);
        });
      } else if (iterable instanceof MapConstructor) {
        _call(MapConstructor.prototype.forEach, iterable, function(value, key) {
          map.set(key, value);
        });
      } else {
        var iter,
            adder;
        if (iterable !== null && typeof iterable !== 'undefined') {
          adder = map.set;
          if (!ES.IsCallable(adder)) {
            throw new TypeError('bad map');
          }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) {
              break;
            }
            var nextItem = next.value;
            try {
              if (!ES.TypeIsObject(nextItem)) {
                throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
              }
              _call(adder, map, nextItem[0], nextItem[1]);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };
    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
      if (isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function(value) {
          set.add(value);
        });
      } else if (iterable instanceof SetConstructor) {
        _call(SetConstructor.prototype.forEach, iterable, function(value) {
          set.add(value);
        });
      } else {
        var iter,
            adder;
        if (iterable !== null && typeof iterable !== 'undefined') {
          adder = set.add;
          if (!ES.IsCallable(adder)) {
            throw new TypeError('bad set');
          }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) {
              break;
            }
            var nextValue = next.value;
            try {
              _call(adder, set, nextValue);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };
    var collectionShims = {
      Map: (function() {
        var empty = {};
        var MapEntry = function MapEntry(key, value) {
          this.key = key;
          this.value = value;
          this.next = null;
          this.prev = null;
        };
        MapEntry.prototype.isRemoved = function isRemoved() {
          return this.key === empty;
        };
        var isMap = function isMap(map) {
          return !!map._es6map;
        };
        var requireMapSlot = function requireMapSlot(map, method) {
          if (!ES.TypeIsObject(map) || !isMap(map)) {
            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));
          }
        };
        var MapIterator = function MapIterator(map, kind) {
          requireMapSlot(map, '[[MapIterator]]');
          this.head = map._head;
          this.i = this.head;
          this.kind = kind;
        };
        MapIterator.prototype = {next: function next() {
            var i = this.i;
            var kind = this.kind;
            var head = this.head;
            if (typeof this.i === 'undefined') {
              return iteratorResult();
            }
            while (i.isRemoved() && i !== head) {
              i = i.prev;
            }
            var result;
            while (i.next !== head) {
              i = i.next;
              if (!i.isRemoved()) {
                if (kind === 'key') {
                  result = i.key;
                } else if (kind === 'value') {
                  result = i.value;
                } else {
                  result = [i.key, i.value];
                }
                this.i = i;
                return iteratorResult(result);
              }
            }
            this.i = void 0;
            return iteratorResult();
          }};
        addIterator(MapIterator.prototype);
        var Map$prototype;
        var MapShim = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          if (this && this._es6map) {
            throw new TypeError('Bad construction');
          }
          var map = emulateES6construct(this, Map, Map$prototype, {
            _es6map: true,
            _head: null,
            _storage: emptyObject(),
            _size: 0
          });
          var head = new MapEntry(null, null);
          head.next = head.prev = head;
          map._head = head;
          if (arguments.length > 0) {
            addIterableToMap(Map, map, arguments[0]);
          }
          return map;
        };
        Map$prototype = MapShim.prototype;
        Value.getter(Map$prototype, 'size', function() {
          if (typeof this._size === 'undefined') {
            throw new TypeError('size method called on incompatible Map');
          }
          return this._size;
        });
        defineProperties(Map$prototype, {
          get: function get(key) {
            requireMapSlot(this, 'get');
            var fkey = fastkey(key);
            if (fkey !== null) {
              var entry = this._storage[fkey];
              if (entry) {
                return entry.value;
              } else {
                return;
              }
            }
            var head = this._head;
            var i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return i.value;
              }
            }
          },
          has: function has(key) {
            requireMapSlot(this, 'has');
            var fkey = fastkey(key);
            if (fkey !== null) {
              return typeof this._storage[fkey] !== 'undefined';
            }
            var head = this._head;
            var i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return true;
              }
            }
            return false;
          },
          set: function set(key, value) {
            requireMapSlot(this, 'set');
            var head = this._head;
            var i = head;
            var entry;
            var fkey = fastkey(key);
            if (fkey !== null) {
              if (typeof this._storage[fkey] !== 'undefined') {
                this._storage[fkey].value = value;
                return this;
              } else {
                entry = this._storage[fkey] = new MapEntry(key, value);
                i = head.prev;
              }
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.value = value;
                return this;
              }
            }
            entry = entry || new MapEntry(key, value);
            if (ES.SameValue(-0, key)) {
              entry.key = +0;
            }
            entry.next = this._head;
            entry.prev = this._head.prev;
            entry.prev.next = entry;
            entry.next.prev = entry;
            this._size += 1;
            return this;
          },
          'delete': function(key) {
            requireMapSlot(this, 'delete');
            var head = this._head;
            var i = head;
            var fkey = fastkey(key);
            if (fkey !== null) {
              if (typeof this._storage[fkey] === 'undefined') {
                return false;
              }
              i = this._storage[fkey].prev;
              delete this._storage[fkey];
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.key = i.value = empty;
                i.prev.next = i.next;
                i.next.prev = i.prev;
                this._size -= 1;
                return true;
              }
            }
            return false;
          },
          clear: function clear() {
            requireMapSlot(this, 'clear');
            this._size = 0;
            this._storage = emptyObject();
            var head = this._head;
            var i = head;
            var p = i.next;
            while ((i = p) !== head) {
              i.key = i.value = empty;
              p = i.next;
              i.next = i.prev = head;
            }
            head.next = head.prev = head;
          },
          keys: function keys() {
            requireMapSlot(this, 'keys');
            return new MapIterator(this, 'key');
          },
          values: function values() {
            requireMapSlot(this, 'values');
            return new MapIterator(this, 'value');
          },
          entries: function entries() {
            requireMapSlot(this, 'entries');
            return new MapIterator(this, 'key+value');
          },
          forEach: function forEach(callback) {
            requireMapSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var it = this.entries();
            for (var entry = it.next(); !entry.done; entry = it.next()) {
              if (context) {
                _call(callback, context, entry.value[1], entry.value[0], this);
              } else {
                callback(entry.value[1], entry.value[0], this);
              }
            }
          }
        });
        addIterator(Map$prototype, Map$prototype.entries);
        return MapShim;
      }()),
      Set: (function() {
        var isSet = function isSet(set) {
          return set._es6set && typeof set._storage !== 'undefined';
        };
        var requireSetSlot = function requireSetSlot(set, method) {
          if (!ES.TypeIsObject(set) || !isSet(set)) {
            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));
          }
        };
        var Set$prototype;
        var SetShim = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          if (this && this._es6set) {
            throw new TypeError('Bad construction');
          }
          var set = emulateES6construct(this, Set, Set$prototype, {
            _es6set: true,
            '[[SetData]]': null,
            _storage: emptyObject()
          });
          if (!set._es6set) {
            throw new TypeError('bad set');
          }
          if (arguments.length > 0) {
            addIterableToSet(Set, set, arguments[0]);
          }
          return set;
        };
        Set$prototype = SetShim.prototype;
        var decodeKey = function(key) {
          var k = key;
          if (k === '^null') {
            return null;
          } else if (k === '^undefined') {
            return void 0;
          } else {
            var first = k.charAt(0);
            if (first === '$') {
              return _strSlice(k, 1);
            } else if (first === 'n') {
              return +_strSlice(k, 1);
            } else if (first === 'b') {
              return k === 'btrue';
            }
          }
          return +k;
        };
        var ensureMap = function ensureMap(set) {
          if (!set['[[SetData]]']) {
            var m = set['[[SetData]]'] = new collectionShims.Map();
            _forEach(keys(set._storage), function(key) {
              var k = decodeKey(key);
              m.set(k, k);
            });
            set['[[SetData]]'] = m;
          }
          set._storage = null;
        };
        Value.getter(SetShim.prototype, 'size', function() {
          requireSetSlot(this, 'size');
          if (this._storage) {
            return keys(this._storage).length;
          }
          ensureMap(this);
          return this['[[SetData]]'].size;
        });
        defineProperties(SetShim.prototype, {
          has: function has(key) {
            requireSetSlot(this, 'has');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              return !!this._storage[fkey];
            }
            ensureMap(this);
            return this['[[SetData]]'].has(key);
          },
          add: function add(key) {
            requireSetSlot(this, 'add');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              this._storage[fkey] = true;
              return this;
            }
            ensureMap(this);
            this['[[SetData]]'].set(key, key);
            return this;
          },
          'delete': function(key) {
            requireSetSlot(this, 'delete');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              var hasFKey = _hasOwnProperty(this._storage, fkey);
              return (delete this._storage[fkey]) && hasFKey;
            }
            ensureMap(this);
            return this['[[SetData]]']['delete'](key);
          },
          clear: function clear() {
            requireSetSlot(this, 'clear');
            if (this._storage) {
              this._storage = emptyObject();
            }
            if (this['[[SetData]]']) {
              this['[[SetData]]'].clear();
            }
          },
          values: function values() {
            requireSetSlot(this, 'values');
            ensureMap(this);
            return this['[[SetData]]'].values();
          },
          entries: function entries() {
            requireSetSlot(this, 'entries');
            ensureMap(this);
            return this['[[SetData]]'].entries();
          },
          forEach: function forEach(callback) {
            requireSetSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var entireSet = this;
            ensureMap(entireSet);
            this['[[SetData]]'].forEach(function(value, key) {
              if (context) {
                _call(callback, context, key, key, entireSet);
              } else {
                callback(key, key, entireSet);
              }
            });
          }
        });
        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
        addIterator(SetShim.prototype, SetShim.prototype.values);
        return SetShim;
      }())
    };
    if (globals.Map || globals.Set) {
      var mapAcceptsArguments = valueOrFalseIfThrows(function() {
        return new Map([[1, 2]]).get(1) === 2;
      });
      if (!mapAcceptsArguments) {
        var OrigMapNoArgs = globals.Map;
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMapNoArgs();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          delete m.constructor;
          Object.setPrototypeOf(m, globals.Map.prototype);
          return m;
        };
        globals.Map.prototype = create(OrigMapNoArgs.prototype);
        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
        Value.preserveToString(globals.Map, OrigMapNoArgs);
      }
      var testMap = new Map();
      var mapUsesSameValueZero = (function() {
        var m = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
        m.set(-0, m);
        return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);
      }());
      var mapSupportsChaining = testMap.set(1, 2) === testMap;
      if (!mapUsesSameValueZero || !mapSupportsChaining) {
        var origMapSet = Map.prototype.set;
        overrideNative(Map.prototype, 'set', function set(k, v) {
          _call(origMapSet, this, k === 0 ? 0 : k, v);
          return this;
        });
      }
      if (!mapUsesSameValueZero) {
        var origMapGet = Map.prototype.get;
        var origMapHas = Map.prototype.has;
        defineProperties(Map.prototype, {
          get: function get(k) {
            return _call(origMapGet, this, k === 0 ? 0 : k);
          },
          has: function has(k) {
            return _call(origMapHas, this, k === 0 ? 0 : k);
          }
        }, true);
        Value.preserveToString(Map.prototype.get, origMapGet);
        Value.preserveToString(Map.prototype.has, origMapHas);
      }
      var testSet = new Set();
      var setUsesSameValueZero = (function(s) {
        s['delete'](0);
        s.add(-0);
        return !s.has(0);
      }(testSet));
      var setSupportsChaining = testSet.add(1) === testSet;
      if (!setUsesSameValueZero || !setSupportsChaining) {
        var origSetAdd = Set.prototype.add;
        Set.prototype.add = function add(v) {
          _call(origSetAdd, this, v === 0 ? 0 : v);
          return this;
        };
        Value.preserveToString(Set.prototype.add, origSetAdd);
      }
      if (!setUsesSameValueZero) {
        var origSetHas = Set.prototype.has;
        Set.prototype.has = function has(v) {
          return _call(origSetHas, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype.has, origSetHas);
        var origSetDel = Set.prototype['delete'];
        Set.prototype['delete'] = function SetDelete(v) {
          return _call(origSetDel, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype['delete'], origSetDel);
      }
      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function(M) {
        var m = new M([]);
        m.set(42, 42);
        return m instanceof M;
      });
      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing;
      var mapRequiresNew = (function() {
        try {
          return !(globals.Map() instanceof globals.Map);
        } catch (e) {
          return e instanceof TypeError;
        }
      }());
      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
        var OrigMap = globals.Map;
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMap();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          delete m.constructor;
          Object.setPrototypeOf(m, Map.prototype);
          return m;
        };
        globals.Map.prototype = OrigMap.prototype;
        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
        Value.preserveToString(globals.Map, OrigMap);
      }
      var setSupportsSubclassing = supportsSubclassing(globals.Set, function(S) {
        var s = new S([]);
        s.add(42, 42);
        return s instanceof S;
      });
      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing;
      var setRequiresNew = (function() {
        try {
          return !(globals.Set() instanceof globals.Set);
        } catch (e) {
          return e instanceof TypeError;
        }
      }());
      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
        var OrigSet = globals.Set;
        globals.Set = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          var s = new OrigSet();
          if (arguments.length > 0) {
            addIterableToSet(Set, s, arguments[0]);
          }
          delete s.constructor;
          Object.setPrototypeOf(s, Set.prototype);
          return s;
        };
        globals.Set.prototype = OrigSet.prototype;
        defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);
        Value.preserveToString(globals.Set, OrigSet);
      }
      var newMap = new globals.Map();
      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function() {
        return newMap.keys().next().done;
      });
      if (typeof globals.Map.prototype.clear !== 'function' || new globals.Set().size !== 0 || newMap.size !== 0 || typeof globals.Map.prototype.keys !== 'function' || typeof globals.Set.prototype.keys !== 'function' || typeof globals.Map.prototype.forEach !== 'function' || typeof globals.Set.prototype.forEach !== 'function' || isCallableWithoutNew(globals.Map) || isCallableWithoutNew(globals.Set) || typeof newMap.keys().next !== 'function' || mapIterationThrowsStopIterator || !mapSupportsSubclassing) {
        defineProperties(globals, {
          Map: collectionShims.Map,
          Set: collectionShims.Set
        }, true);
      }
      if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
        defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
      }
      addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
      addIterator(Object.getPrototypeOf((new globals.Set()).keys()));
      if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
        var anonymousSetHas = globals.Set.prototype.has;
        overrideNative(globals.Set.prototype, 'has', function has(key) {
          return _call(anonymousSetHas, this, key);
        });
      }
    }
    defineProperties(globals, collectionShims);
    addDefaultSpecies(globals.Map);
    addDefaultSpecies(globals.Set);
  }
  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
    if (!ES.TypeIsObject(target)) {
      throw new TypeError('target must be an object');
    }
  };
  var ReflectShims = {
    apply: function apply() {
      return ES.Call(ES.Call, null, arguments);
    },
    construct: function construct(constructor, args) {
      if (!ES.IsConstructor(constructor)) {
        throw new TypeError('First argument must be a constructor.');
      }
      var newTarget = arguments.length > 2 ? arguments[2] : constructor;
      if (!ES.IsConstructor(newTarget)) {
        throw new TypeError('new.target must be a constructor.');
      }
      return ES.Construct(constructor, args, newTarget, 'internal');
    },
    deleteProperty: function deleteProperty(target, key) {
      throwUnlessTargetIsObject(target);
      if (supportsDescriptors) {
        var desc = Object.getOwnPropertyDescriptor(target, key);
        if (desc && !desc.configurable) {
          return false;
        }
      }
      return delete target[key];
    },
    has: function has(target, key) {
      throwUnlessTargetIsObject(target);
      return key in target;
    }
  };
  if (Object.getOwnPropertyNames) {
    Object.assign(ReflectShims, {ownKeys: function ownKeys(target) {
        throwUnlessTargetIsObject(target);
        var keys = Object.getOwnPropertyNames(target);
        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
          _pushApply(keys, Object.getOwnPropertySymbols(target));
        }
        return keys;
      }});
  }
  var callAndCatchException = function ConvertExceptionToBoolean(func) {
    return !throwsError(func);
  };
  if (Object.preventExtensions) {
    Object.assign(ReflectShims, {
      isExtensible: function isExtensible(target) {
        throwUnlessTargetIsObject(target);
        return Object.isExtensible(target);
      },
      preventExtensions: function preventExtensions(target) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function() {
          Object.preventExtensions(target);
        });
      }
    });
  }
  if (supportsDescriptors) {
    var internalGet = function get(target, key, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);
      if (!desc) {
        var parent = Object.getPrototypeOf(target);
        if (parent === null) {
          return void 0;
        }
        return internalGet(parent, key, receiver);
      }
      if ('value' in desc) {
        return desc.value;
      }
      if (desc.get) {
        return ES.Call(desc.get, receiver);
      }
      return void 0;
    };
    var internalSet = function set(target, key, value, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);
      if (!desc) {
        var parent = Object.getPrototypeOf(target);
        if (parent !== null) {
          return internalSet(parent, key, value, receiver);
        }
        desc = {
          value: void 0,
          writable: true,
          enumerable: true,
          configurable: true
        };
      }
      if ('value' in desc) {
        if (!desc.writable) {
          return false;
        }
        if (!ES.TypeIsObject(receiver)) {
          return false;
        }
        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);
        if (existingDesc) {
          return Reflect.defineProperty(receiver, key, {value: value});
        } else {
          return Reflect.defineProperty(receiver, key, {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
      if (desc.set) {
        _call(desc.set, receiver, value);
        return true;
      }
      return false;
    };
    Object.assign(ReflectShims, {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function() {
          Object.defineProperty(target, propertyKey, attributes);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        throwUnlessTargetIsObject(target);
        return Object.getOwnPropertyDescriptor(target, propertyKey);
      },
      get: function get(target, key) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 2 ? arguments[2] : target;
        return internalGet(target, key, receiver);
      },
      set: function set(target, key, value) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 3 ? arguments[3] : target;
        return internalSet(target, key, value, receiver);
      }
    });
  }
  if (Object.getPrototypeOf) {
    var objectDotGetPrototypeOf = Object.getPrototypeOf;
    ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
      throwUnlessTargetIsObject(target);
      return objectDotGetPrototypeOf(target);
    };
  }
  if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
    var willCreateCircularPrototype = function(object, lastProto) {
      var proto = lastProto;
      while (proto) {
        if (object === proto) {
          return true;
        }
        proto = ReflectShims.getPrototypeOf(proto);
      }
      return false;
    };
    Object.assign(ReflectShims, {setPrototypeOf: function setPrototypeOf(object, proto) {
        throwUnlessTargetIsObject(object);
        if (proto !== null && !ES.TypeIsObject(proto)) {
          throw new TypeError('proto must be an object or null');
        }
        if (proto === Reflect.getPrototypeOf(object)) {
          return true;
        }
        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
          return false;
        }
        if (willCreateCircularPrototype(object, proto)) {
          return false;
        }
        Object.setPrototypeOf(object, proto);
        return true;
      }});
  }
  var defineOrOverrideReflectProperty = function(key, shim) {
    if (!ES.IsCallable(globals.Reflect[key])) {
      defineProperty(globals.Reflect, key, shim);
    } else {
      var acceptsPrimitives = valueOrFalseIfThrows(function() {
        globals.Reflect[key](1);
        globals.Reflect[key](NaN);
        globals.Reflect[key](true);
        return true;
      });
      if (acceptsPrimitives) {
        overrideNative(globals.Reflect, key, shim);
      }
    }
  };
  Object.keys(ReflectShims).forEach(function(key) {
    defineOrOverrideReflectProperty(key, ReflectShims[key]);
  });
  var originalReflectGetProto = globals.Reflect.getPrototypeOf;
  if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') {
    overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
      return _call(originalReflectGetProto, globals.Reflect, target);
    });
  }
  if (globals.Reflect.setPrototypeOf) {
    if (valueOrFalseIfThrows(function() {
      globals.Reflect.setPrototypeOf(1, {});
      return true;
    })) {
      overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
    }
  }
  if (globals.Reflect.defineProperty) {
    if (!valueOrFalseIfThrows(function() {
      var basic = !globals.Reflect.defineProperty(1, 'test', {value: 1});
      var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
      return basic && extensible;
    })) {
      overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
    }
  }
  if (globals.Reflect.construct) {
    if (!valueOrFalseIfThrows(function() {
      var F = function F() {};
      return globals.Reflect.construct(function() {}, [], F) instanceof F;
    })) {
      overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
    }
  }
  if (String(new Date(NaN)) !== 'Invalid Date') {
    var dateToString = Date.prototype.toString;
    var shimmedDateToString = function toString() {
      var valueOf = +this;
      if (valueOf !== valueOf) {
        return 'Invalid Date';
      }
      return ES.Call(dateToString, this);
    };
    overrideNative(Date.prototype, 'toString', shimmedDateToString);
  }
  var stringHTMLshims = {
    anchor: function anchor(name) {
      return ES.CreateHTML(this, 'a', 'name', name);
    },
    big: function big() {
      return ES.CreateHTML(this, 'big', '', '');
    },
    blink: function blink() {
      return ES.CreateHTML(this, 'blink', '', '');
    },
    bold: function bold() {
      return ES.CreateHTML(this, 'b', '', '');
    },
    fixed: function fixed() {
      return ES.CreateHTML(this, 'tt', '', '');
    },
    fontcolor: function fontcolor(color) {
      return ES.CreateHTML(this, 'font', 'color', color);
    },
    fontsize: function fontsize(size) {
      return ES.CreateHTML(this, 'font', 'size', size);
    },
    italics: function italics() {
      return ES.CreateHTML(this, 'i', '', '');
    },
    link: function link(url) {
      return ES.CreateHTML(this, 'a', 'href', url);
    },
    small: function small() {
      return ES.CreateHTML(this, 'small', '', '');
    },
    strike: function strike() {
      return ES.CreateHTML(this, 'strike', '', '');
    },
    sub: function sub() {
      return ES.CreateHTML(this, 'sub', '', '');
    },
    sup: function sub() {
      return ES.CreateHTML(this, 'sup', '', '');
    }
  };
  _forEach(Object.keys(stringHTMLshims), function(key) {
    var method = String.prototype[key];
    var shouldOverwrite = false;
    if (ES.IsCallable(method)) {
      var output = _call(method, '', ' " ');
      var quotesCount = _concat([], output.match(/"/g)).length;
      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
    } else {
      shouldOverwrite = true;
    }
    if (shouldOverwrite) {
      overrideNative(String.prototype, key, stringHTMLshims[key]);
    }
  });
  var JSONstringifiesSymbols = (function() {
    if (!hasSymbols) {
      return false;
    }
    var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
    if (!stringify) {
      return false;
    }
    if (typeof stringify(Symbol()) !== 'undefined') {
      return true;
    }
    if (stringify([Symbol()]) !== '[null]') {
      return true;
    }
    var obj = {a: Symbol()};
    obj[Symbol()] = true;
    if (stringify(obj) !== '{}') {
      return true;
    }
    return false;
  }());
  var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function() {
    if (!hasSymbols) {
      return true;
    }
    return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([Object(Symbol())]) === '[{}]';
  });
  if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
    var origStringify = JSON.stringify;
    overrideNative(JSON, 'stringify', function stringify(value) {
      if (typeof value === 'symbol') {
        return;
      }
      var replacer;
      if (arguments.length > 1) {
        replacer = arguments[1];
      }
      var args = [value];
      if (!isArray(replacer)) {
        var replaceFn = ES.IsCallable(replacer) ? replacer : null;
        var wrappedReplacer = function(key, val) {
          var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;
          if (typeof parsedValue !== 'symbol') {
            if (Type.symbol(parsedValue)) {
              return assignTo({})(parsedValue);
            } else {
              return parsedValue;
            }
          }
        };
        args.push(wrappedReplacer);
      } else {
        args.push(replacer);
      }
      if (arguments.length > 2) {
        args.push(arguments[2]);
      }
      return origStringify.apply(this, args);
    });
  }
  return globals;
}));

})();
(function() {
var define = $__System.amdDefine;
define("5", ["4"], function(main) {
  return main;
});

})();
$__System.registerDynamic("6", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("7", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('6');
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("9", ["8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('8');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('9'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("b", ["a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('a')["default"];
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

$__System.registerDynamic("c", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("e", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('d');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("10", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("11", ["10"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('10');
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

$__System.registerDynamic("12", ["f", "13", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('f'),
      core = $__require('13'),
      ctx = $__require('11'),
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

$__System.registerDynamic("14", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("15", ["12", "13", "14"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('12'),
      core = $__require('13'),
      fails = $__require('14');
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

$__System.registerDynamic("16", ["e", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('e');
  $__require('15')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("17", ["16", "13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('16');
  module.exports = $__require('13').Object.keys;
  return module.exports;
});

$__System.registerDynamic("18", ["17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('17'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('19', ['18', 'b', 'c'], function (_export) {
    var _Object$keys, _createClass, _classCallCheck, method, Connection, Generic, Key, Hash;

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) return response;
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }

    function stringifyObjects(x) {
        return typeof x === "object" ? JSON.stringify(x) : x;
    }

    function tryParseObjects(x) {
        var type = typeof x;
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
        var mykeys = _Object$keys(x);
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

    function setMethod(m) {
        method = m;
    }

    function request(command) {
        var endPoint = arguments.length <= 1 || arguments[1] === undefined ? "/" : arguments[1];

        var commandURL = command.map(stringifyObjects).map(encodeURIComponent).join("/");
        var options = {
            method: method,
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        if (method === "POST") options.body = commandURL;
        var webdisPromise = method === "GET" ? fetch(endPoint + commandURL, options) : fetch(endPoint, options);
        return webdisPromise.then(checkStatus).then(function (response) {
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
            _Object$keys = _['default'];
        }, function (_b) {
            _createClass = _b['default'];
        }, function (_c) {
            _classCallCheck = _c['default'];
        }],
        execute: function () {
            /* global: fetch */'use strict';

            _export('setMethod', setMethod);

            _export('request', request);

            method = "POST";

            Connection = (function () {
                function Connection() {
                    var endPoint = arguments.length <= 0 || arguments[0] === undefined ? "/" : arguments[0];

                    _classCallCheck(this, Connection);

                    this.endPoint = endPoint;
                }

                _createClass(Connection, [{
                    key: 'r',
                    value: function r(cmd) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

                        return request([cmd].concat(params), this.endPoint);
                    }
                }, {
                    key: 'auth',
                    value: function auth(password) {
                        return this.r('AUTH', password);
                    }
                }, {
                    key: 'echo',
                    value: function echo(m) {
                        return this.r('ECHO', m);
                    }
                }, {
                    key: 'ping',
                    value: function ping(m) {
                        return this.r('PING', m);
                    }
                }, {
                    key: 'wait',
                    value: function wait(numslaves, timeout) {
                        return this.r('WAIT', [numslaves, timeout]);
                    }
                }]);

                return Connection;
            })();

            _export('Connection', Connection);

            Generic = (function () {
                function Generic() {
                    var endPoint = arguments.length <= 0 || arguments[0] === undefined ? "/" : arguments[0];

                    _classCallCheck(this, Generic);

                    this.endPoint = endPoint;
                }

                _createClass(Generic, [{
                    key: 'r',
                    value: function r(cmd) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

                        return request([cmd].concat(params), this.endPoint);
                    }
                }, {
                    key: 'mget',
                    value: function mget() {
                        for (var _len = arguments.length, manykeys = Array(_len), _key = 0; _key < _len; _key++) {
                            manykeys[_key] = arguments[_key];
                        }

                        return this.r('MGET', manykeys);
                    }
                }, {
                    key: 'mset',
                    value: function mset(obj) {
                        return this.r('MSET', asPairArray(obj));
                    }
                }, {
                    key: 'msetnx',
                    value: function msetnx(obj) {
                        return this.r('MSETNX', asPairArray(obj));
                    }
                }, {
                    key: 'keysMatching',
                    value: function keysMatching() {
                        var pattern = arguments.length <= 0 || arguments[0] === undefined ? '*' : arguments[0];

                        return this.r('KEYS', pattern);
                    }
                }, {
                    key: 'randomKey',
                    value: function randomKey() {
                        return this.r('RANDOMKEY');
                    }
                }, {
                    key: 'select',
                    value: function select(index) {
                        return this.r('SELECT', index);
                    }
                }]);

                return Generic;
            })();

            _export('Generic', Generic);

            Key = (function () {
                function Key(k) {
                    var endPoint = arguments.length <= 1 || arguments[1] === undefined ? "/" : arguments[1];

                    _classCallCheck(this, Key);

                    this.k = k;
                    this.endPoint = endPoint;
                }

                _createClass(Key, [{
                    key: 'r',
                    value: function r() {
                        for (var _len2 = arguments.length, cmdparams = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            cmdparams[_key2] = arguments[_key2];
                        }

                        cmdparams.splice(1, 0, this.k);
                        return request(cmdparams, this.endPoint);
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
                }, {
                    key: 'dump',
                    value: function dump() {
                        return this.r('DUMP');
                    }
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
                    key: 'setrange',
                    value: function setrange(offset, v) {
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
            })();

            _export('Key', Key);

            Hash = (function () {
                function Hash(k) {
                    var endPoint = arguments.length <= 1 || arguments[1] === undefined ? "/" : arguments[1];

                    _classCallCheck(this, Hash);

                    this.k = k;
                    this.endPoint = endPoint;
                }

                _createClass(Hash, [{
                    key: 'r',
                    value: function r(cmd) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

                        return request([cmd, this.k].concat(params), this.endPoint);
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
                }, {
                    key: 'getAll',
                    value: function getAll() {
                        return this.r('HGETALL');
                    }
                }, {
                    key: 'getField',
                    value: function getField(f) {
                        return this.r('HGET', [f]);
                    }
                }, {
                    key: 'setnx',
                    value: function setnx(f, v) {
                        return this.r('HSETNX', [f, v]);
                    }
                }, {
                    key: 'setAll',
                    value: function setAll(obj) {
                        var k = this.k;
                        var mycmd = ['MULTI', 'DEL', k, 'HMSET', k].concat(asPairArray(obj), 'EXEC');
                        return request(mycmd, this.endPoint);
                    }
                }, {
                    key: 'update',
                    value: function update(obj) {
                        return this.r('HMSET', asPairArray(obj));
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
            })();

            _export('Hash', Hash);
        }
    };
});
$__System.register('1', ['3', '5', '7', '19'], function (_export) {
    /* eslint no-console:off, newline-per-chained-call:off */
    /* globals QUnit:true */

    'use strict';

    var W;
    return {
        setters: [function (_) {}, function (_2) {}, function (_3) {}, function (_4) {
            W = _4;
        }],
        execute: function () {

            W.setMethod("GET"); // there might be an issue with http-proxy and POST as run by karma test runner

            QUnit.test("Webdismay W exists", function (assert) {
                assert.expect(1);
                assert.ok(W, "W exists");
            });

            QUnit.test("W has Key, Hash constructors", function (assert) {
                assert.expect(2);
                assert.ok(typeof W.Key === "function", "W.Key");
                assert.ok(typeof W.Hash === "function", "W.Hash");
            });

            QUnit.test("fetch exists", function (assert) {
                assert.expect(2);
                assert.ok(typeof fetch === 'function', "fetch is function");
                assert.ok(typeof window.fetch === 'function', "window.fetch is a function");
            });

            QUnit.test("set Key test123 to 42 without testing", function (assert) {
                assert.expect(1);
                var done = assert.async();
                new W.Key('test123').set(42).then(function (result) {
                    assert.ok(result && result[0], 'promise resolved to array with true as 1st element');
                    return result;
                }, function (e) {
                    assert.ok(false, e);
                    return e;
                }).then(done, done);
            });

            QUnit.test("set Key test123 to 78 without testing", function (assert) {
                assert.expect(1);
                var done = assert.async();
                new W.Key('test123').set(78).then(function (result) {
                    assert.ok(result && result[0], 'promise resolved to array with true as 1st element');
                    return result;
                }, function (e) {
                    assert.ok(false, e);
                    return e;
                }).then(done, done);
            });

            QUnit.test("set Key test123 to 2 without testing", function (assert) {
                assert.expect(1);
                var done = assert.async();
                new W.Key('test123').set(2).then(function (result) {
                    assert.ok(result && result[0], 'promise resolved to array with true as 1st element');
                    return result;
                }, function (e) {
                    assert.ok(false, e);
                    return e;
                }).then(done, done);
            });

            QUnit.test("set key test345 to 57 and check it", function (assert) {
                assert.expect(2);
                var done = assert.async(1);
                var t = new W.Key('test345');
                t.set(57).then(function (result) {
                    assert.ok(result && result[0], 'promise resolved to array with true as 1st element');
                    return result;
                }).then(function () {
                    console.log("about to call t.get() ");
                    t.get().then(function (result) {
                        assert.ok(result === 57, 'get result should equal the set value, 57, got:' + result);
                        return result;
                    }).then(done, done);
                }, done);
            });
        }
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle.js.map