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
  exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;
  exports.shim = shim;
  function shim(obj) {
    var keys = [];
    for (var key in obj)
      keys.push(key);
    return keys;
  }
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var supportsArgumentsClass = (function() {
    return Object.prototype.toString.call(arguments);
  })() == '[object Arguments]';
  exports = module.exports = supportsArgumentsClass ? supported : unsupported;
  exports.supported = supported;
  function supported(object) {
    return Object.prototype.toString.call(object) == '[object Arguments]';
  }
  ;
  exports.unsupported = unsupported;
  function unsupported(object) {
    return object && typeof object == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
  }
  ;
  return module.exports;
});

$__System.registerDynamic("a", ["8", "9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var pSlice = Array.prototype.slice;
  var objectKeys = $__require('8');
  var isArguments = $__require('9');
  var deepEqual = module.exports = function(actual, expected, opts) {
    if (!opts)
      opts = {};
    if (actual === expected) {
      return true;
    } else if (actual instanceof Date && expected instanceof Date) {
      return actual.getTime() === expected.getTime();
    } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
      return opts.strict ? actual === expected : actual == expected;
    } else {
      return objEquiv(actual, expected, opts);
    }
  };
  function isUndefinedOrNull(value) {
    return value === null || value === undefined;
  }
  function isBuffer(x) {
    if (!x || typeof x !== 'object' || typeof x.length !== 'number')
      return false;
    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
      return false;
    }
    if (x.length > 0 && typeof x[0] !== 'number')
      return false;
    return true;
  }
  function objEquiv(a, b, opts) {
    var i,
        key;
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
      return false;
    if (a.prototype !== b.prototype)
      return false;
    if (isArguments(a)) {
      if (!isArguments(b)) {
        return false;
      }
      a = pSlice.call(a);
      b = pSlice.call(b);
      return deepEqual(a, b, opts);
    }
    if (isBuffer(a)) {
      if (!isBuffer(b)) {
        return false;
      }
      if (a.length !== b.length)
        return false;
      for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
          return false;
      }
      return true;
    }
    try {
      var ka = objectKeys(a),
          kb = objectKeys(b);
    } catch (e) {
      return false;
    }
    if (ka.length != kb.length)
      return false;
    ka.sort();
    kb.sort();
    for (i = ka.length - 1; i >= 0; i--) {
      if (ka[i] != kb[i])
        return false;
    }
    for (i = ka.length - 1; i >= 0; i--) {
      key = ka[i];
      if (!deepEqual(a[key], b[key], opts))
        return false;
    }
    return typeof a === typeof b;
  }
  return module.exports;
});

$__System.registerDynamic("b", ["a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('a');
  return module.exports;
});

$__System.registerDynamic("c", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("e", ["c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('c'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("f", ["e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('e')["default"];
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

$__System.registerDynamic("10", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("11", ["12", "13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('12'),
      defined = $__require('13');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("14", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("15", ["16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('16');
  return module.exports;
});

$__System.registerDynamic("17", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("18", ["19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('19')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("16", ["d", "17", "18"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d'),
      createDesc = $__require('17');
  module.exports = $__require('18') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["d", "17", "1b", "16", "1c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d'),
      descriptor = $__require('17'),
      setToStringTag = $__require('1b'),
      IteratorPrototype = {};
  $__require('16')(IteratorPrototype, $__require('1c')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("1d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["d", "1d", "1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('d').setDesc,
      has = $__require('1d'),
      TAG = $__require('1c')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("1e", ["14", "1f", "15", "16", "1d", "20", "1a", "1b", "d", "1c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('14'),
      $export = $__require('1f'),
      redefine = $__require('15'),
      hide = $__require('16'),
      has = $__require('1d'),
      Iterators = $__require('20'),
      $iterCreate = $__require('1a'),
      setToStringTag = $__require('1b'),
      getProto = $__require('d').getProto,
      ITERATOR = $__require('1c')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("21", ["11", "1e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('11')(true);
  $__require('1e')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("22", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("23", ["22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('22');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("24", ["23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('23');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("25", ["20", "1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('20'),
      ITERATOR = $__require('1c')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("12", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("26", ["12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('12'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("27", ["28", "1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('28'),
      TAG = $__require('1c')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("20", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("29", ["27", "1c", "20", "2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('27'),
      ITERATOR = $__require('1c')('iterator'),
      Iterators = $__require('20');
  module.exports = $__require('2a').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("2b", ["2c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('2c'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("2d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("1c", ["2b", "2d", "2c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('2b')('wks'),
      uid = $__require('2d'),
      Symbol = $__require('2c').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("2e", ["1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('1c')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        return {done: safe = true};
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

$__System.registerDynamic("2f", ["30", "1f", "31", "24", "25", "26", "29", "2e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('30'),
      $export = $__require('1f'),
      toObject = $__require('31'),
      call = $__require('24'),
      isArrayIter = $__require('25'),
      toLength = $__require('26'),
      getIterFn = $__require('29');
  $export($export.S + $export.F * !$__require('2e')(function(iter) {
    Array.from(iter);
  }), 'Array', {from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping)
        mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }});
  return module.exports;
});

$__System.registerDynamic("32", ["21", "2f", "2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('21');
  $__require('2f');
  module.exports = $__require('2a').Array.from;
  return module.exports;
});

$__System.registerDynamic("33", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('32'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("34", ["33"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Array$from = $__require('33')["default"];
  exports["default"] = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0,
          arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];
      return arr2;
    } else {
      return _Array$from(arr);
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("35", ["1f", "2a", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('1f'),
      core = $__require('2a'),
      fails = $__require('19');
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

$__System.registerDynamic("36", ["31", "35"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('31');
  $__require('35')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("37", ["36", "2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('36');
  module.exports = $__require('2a').Object.keys;
  return module.exports;
});

$__System.registerDynamic("38", ["37"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('37'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("2c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("39", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("30", ["39"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('39');
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

$__System.registerDynamic("1f", ["2c", "2a", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('2c'),
      core = $__require('2a'),
      ctx = $__require('30'),
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

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("13", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("31", ["13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('13');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("3a", ["28"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('28');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("19", [], true, function($__require, exports, module) {
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

$__System.registerDynamic("3b", ["d", "31", "3a", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('d'),
      toObject = $__require('31'),
      IObject = $__require('3a');
  module.exports = $__require('19')(function() {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        if (isEnum.call(S, key = keys[j++]))
          T[key] = S[key];
    }
    return T;
  } : Object.assign;
  return module.exports;
});

$__System.registerDynamic("3c", ["1f", "3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('1f');
  $export($export.S + $export.F, 'Object', {assign: $__require('3b')});
  return module.exports;
});

$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("3d", ["3c", "2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('3c');
  module.exports = $__require('2a').Object.assign;
  return module.exports;
});

$__System.registerDynamic("3e", ["3d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('3d'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('3f', ['10', '34', '38', 'f', '3e'], function (_export) {
    var _classCallCheck, _toConsumableArray, _Object$keys, _createClass, _Object$assign, defaults, options, Key, Hash, List, Rset;

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
        return typeof x === "object" ? JSON.stringify(x) : x;
    }

    /**
     * JSON.parse stringified response into objects, pass unparseable content as is. Used as default request postProcessing.
     * @param {Object|Array|number|string} x Input
     * @return {Object|Array|number|string} parsed output
     */

    function tryParseObjects(x) {
        if (x === null) return null;
        if (x === undefined) return undefined;
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
        options = _Object$assign({}, defaults, o);
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

        if (!Array.isArray(commandArray)) return undefined;
        var requestOptions = {
            method: options.method,
            credentials: options.credentials,
            headers: options.headers
        };
        var last = commandArray[commandArray.length - 1];
        if (last instanceof Blob) {
            commandArray.length -= 1;
            requestOptions.method = "PUT";
            requestOptions.headers = options.putHeaders;
            requestOptions.body = last;
        }
        var commandURL = options.preProcess(commandArray);
        if (requestOptions.method === "POST") requestOptions.body = commandURL;
        // eslint-disable-next-line no-negated-condition
        var webdisPromise = requestOptions.method !== "POST" ? fetch(endPoint + commandURL, requestOptions) : fetch(endPoint, requestOptions);
        return webdisPromise.then(checkStatus).then(function (response) {
            return response.json();
        }).then(function (reply) {
            return reply[commandArray[0]];
        }).then(options.postProcess);
    }

    function asPairArray(obj) {
        var mykeys = _Object$keys(obj);
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

    /**
     * Convenience function equivalent to new Key(k) to save typing "new" over and over
     * @param {string} k Key name
     * @return {Object} key handler = new Key(k)
     */

    function key(k) {
        return new Key(k);
    }

    /**
     * Methods for manipulating a hash on the redis server
     */

    /** 
     * Convenience function equivalent to new Hash(k)
     * @param {string} k Key name
     * @return {Object} equivalent to new Hash(k)
     */

    function hash(k) {
        return new Hash(k);
    }

    /**
     * Methods for manipulating a List on the server
     */

    /**
     * convenience function equivalent to new List(k) to keep from typing "new" all the time
     * @param k Key
     * @return {Object} new List(k)
     */

    function list(k) {
        return new List(k);
    }

    /**
     * Methods for maniplulating Set data on the webdis/redis stack.
     * Not named Set to avoid collision with Javascript Sets 
     */

    /**
     * Convenience function equivalent to new Rset(k), to avoid typing "new" over and over
     * @param k Key 
     * @return {Object} new Rset(k)
     */

    function rset(k) {
        return new Rset(k);
    }

    return {
        setters: [function (_) {
            _classCallCheck = _['default'];
        }, function (_2) {
            _toConsumableArray = _2['default'];
        }, function (_3) {
            _Object$keys = _3['default'];
        }, function (_f) {
            _createClass = _f['default'];
        }, function (_e) {
            _Object$assign = _e['default'];
        }],
        execute: function () {
            /* global: fetch */

            /**
             *
             * Check for 2xx response.status after fetch; used by request()
             *
             * @param {Object} response, presumably from fetch.then()
             * @return {Object} response if 2xx
             * @throws {Error} with response.statusText if not 2xx
             */

            'use strict';

            _export('checkStatus', checkStatus);

            _export('stringifyObjects', stringifyObjects);

            _export('tryParseObjects', tryParseObjects);

            _export('configure', configure);

            _export('request', request);

            _export('echo', echo);

            _export('mget', mget);

            _export('mset', mset);

            _export('msetnx', msetnx);

            _export('del', del);

            _export('keysMatching', keysMatching);

            _export('randomKey', randomKey);

            _export('select', select);

            _export('key', key);

            _export('hash', hash);

            _export('list', list);

            _export('rset', rset);

            defaults = {
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
                },
                putHeaders: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/octet-stream'
                }
            };
            options = _Object$assign({}, defaults);

            Key = (function () {

                /**
                 * Instantly create a key hander associated with a specific key, sends no requests to the server until a method is called.
                 * Includes methods for most redis commands for "Key" and "String"
                 * @param {string} k Key
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
            })();

            _export('Key', Key);

            Hash = (function () {

                /**
                 * Instantly create a hash handler associated with a specific hash, via its key, sends no requests to the server until a method is called.
                 * @param {string} k Key where a Hash is stored, or to be stored, on the server
                 */

                function Hash(k) {
                    _classCallCheck(this, Hash);

                    this.k = k;
                }

                /**
                 * splices key into request as 1st parameter of command
                 * @private 
                 */

                _createClass(Hash, [{
                    key: 'r',
                    value: function r() {
                        for (var _len4 = arguments.length, cmdparams = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                            cmdparams[_key4] = arguments[_key4];
                        }

                        cmdparams.splice(1, 0, this.k);
                        return request(cmdparams);
                    }

                    /**
                     * delete the entire hash (via DEL)
                     * @return {Promise<number,Error>} response is 1 if the hash was deleted, 0 if not
                     */

                }, {
                    key: 'deleteAll',
                    value: function deleteAll() {
                        return this.r('DEL');
                    }

                    /**
                     * delete a field from the hash (via HDEL)
                     * @param {string} f name of field to be deleted
                     * @return {Promise<number,Error>} response is 1 if field is deleted, 0 if non-existent
                     */

                }, {
                    key: 'del',
                    value: function del(f) {
                        return this.r('HDEL', f);
                    }

                    /**
                     * returns the entire hash as a javascript Object, and will return {} if the hash does not exist (via HGETALL)
                     * @return {Promise<Object, Error>} response is the requested data
                     */

                }, {
                    key: 'getAll',
                    value: function getAll() {
                        return this.r('HGETALL');
                    }

                    /** 
                     * return the selected field from the hash
                     * @param {string} f The field name
                     * @return {Promise<string, Error>} response is the requested field's value
                     */

                }, {
                    key: 'get',
                    value: function get(f) {
                        return this.r('HGET', f);
                    }

                    /** 
                     * set an undefined field to a value, but has no effect if field exists (via HSETNX)
                     * @param {string} f The field name
                     * @param {string} v The field value (might be a stringified object, etc.)
                     * @return {Promise<number,Error>} response is 1 if field f set to v, 0 if not
                     */

                }, {
                    key: 'setnx',
                    value: function setnx(f, v) {
                        return this.r('HSETNX', f, v);
                    }

                    /**
                     * set all fields of a hash sourced from a Javascript object, deletes entire hash first and recreates (via DEL and HMSET).
                     * Clients reading at the same time may get either an empty object or the entire object.
                     * @param obj Object containing fields and values to set hash
                     * @return {Promise<Array,Error>} status response
                     */

                }, {
                    key: 'set',
                    value: function set(obj) {
                        var that = this;
                        return this.deleteAll().then(function () {
                            return that.r.apply(that, ['HMSET'].concat(_toConsumableArray(asPairArray(obj))));
                        });
                    }

                    /**
                     * merges fields and values from a Javacript object into the hash (via HMSET)
                     * @param obj Object containing fields and values to merge into hash
                     * @return {Promise<Array,Error>} status response
                     */

                }, {
                    key: 'update',
                    value: function update(obj) {
                        return this.r.apply(this, ['HMSET'].concat(_toConsumableArray(asPairArray(obj))));
                    }

                    /**
                     * add amount to value of field f and return the new value (via HINCRBY)
                     * @param f field name
                     * @param amount Integer amount to add 
                     * @return {Promise<number,Error>} response is the new value
                     */

                }, {
                    key: 'incrBy',
                    value: function incrBy(f, amount) {
                        return this.r('HINCRBY', f, amount);
                    }

                    /**
                     * add amount to value of field f and return the new value (via HINCRBYFLOAT)
                     * @param f field name
                     * @param amount Floating-point amount to add 
                     * @return {Promise<number,Error>} response is the new value
                     */

                }, {
                    key: 'incrByFloat',
                    value: function incrByFloat(f, amount) {
                        return this.r('HINCRBYFLOAT', f, amount);
                    }

                    /**
                     * list the fields of this hash (via HKEYS)
                     * @return {Promise<string[], Error>} response is array list of fields
                     */

                }, {
                    key: 'keys',
                    value: function keys() {
                        return this.r('HKEYS');
                    }

                    /**
                     * list the values of this hash (via HVALS)
                     * @return {Promise<string[], Error>} response is array list of values
                     */

                }, {
                    key: 'vals',
                    value: function vals() {
                        return this.r('HVALS');
                    }

                    /**
                     * number of fields in the hash (via HLEN)
                     * @return {Promise<number, Error>} response is number of fields in the hash
                     */

                }, {
                    key: 'len',
                    value: function len() {
                        return this.r('HLEN');
                    }
                }]);

                return Hash;
            })();

            _export('Hash', Hash);

            List = (function () {

                /**
                 * Instantly create a list handler associated with a specific list, via its key, sends no requests to the server until a method is called.
                 * @param {string} k Key where a List is stored, or to be stored, on the server
                 */

                function List(k) {
                    _classCallCheck(this, List);

                    this.k = k;
                }

                /**
                 * splices key name into command
                 * @private
                 */

                _createClass(List, [{
                    key: 'r',
                    value: function r() {
                        for (var _len5 = arguments.length, cmdparams = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                            cmdparams[_key5] = arguments[_key5];
                        }

                        cmdparams.splice(1, 0, this.k);
                        return request(cmdparams);
                    }

                    /**
                     * get the value of element i (via LINDEX)
                     * @param i index to fetch
                     * @return {Promise<string, Error>} response is value of element i
                     */

                }, {
                    key: 'get',
                    value: function get(i) {
                        return this.r('LINDEX', i);
                    }

                    /**
                     * get the entire list (via LRANGE)
                     * @return {Promise<Array, Error>} response is array containing entire list
                     */

                }, {
                    key: 'getAll',
                    value: function getAll() {
                        return this.r('LRANGE', 0, -1);
                    }

                    /**
                     * insert an element immediately before the first element equal to pivot  (via LINSERT)
                     * @param {string} pivot value to find
                     * @param {string} v value to insert
                     * @return {Promise<number,Error>} response is new list length
                     */

                }, {
                    key: 'insertBefore',
                    value: function insertBefore(pivot, v) {
                        return this.r('LINSERT', 'BEFORE', pivot, v);
                    }

                    /**
                     * insert an element immediately after the first element equal to pivot  (via LINSERT)
                     * @param {string} pivot value to find
                     * @param {string} v value to insert
                     * @return {Promise<number,Error>} response is new list length
                     */

                }, {
                    key: 'insertAfter',
                    value: function insertAfter(pivot, v) {
                        return this.r('LINSERT', 'AFTER', pivot, v);
                    }

                    /**
                     * length of list (via LLEN)
                     * @return {Promise<number,Error>} response is the length of the list
                     */

                }, {
                    key: 'len',
                    value: function len() {
                        return this.r('LLEN');
                    }

                    /**
                     * remove element 0 from the list and return it, and re-index the list (via LPOP) 
                     * @return {Promise<string,Error>} response is the removed element 0
                     */

                }, {
                    key: 'shift',
                    value: function shift() {
                        return this.r('LPOP');
                    }

                    /**
                     * append to beginning of list, in reverse order, and re-index the list (via LPUSH)
                     * @param {...string} values values to be appeded onto the head of the list
                     * @return {Promise<number, Error>} response is the new length of the list
                     */

                }, {
                    key: 'unshift',
                    value: function unshift() {
                        for (var _len6 = arguments.length, values = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                            values[_key6] = arguments[_key6];
                        }

                        return this.r.apply(this, ['LPUSH'].concat(values));
                    }

                    /**
                     * return all or part of the list, list is unchanged (via LRANGE)
                     * @param {number} [from=0] index to begin slice 
                     * @param {number} [to=-1] index to end slice
                     * @return {Promise<Array, Error>} response is the requested array of data
                     */

                }, {
                    key: 'slice',
                    value: function slice() {
                        var from = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                        var to = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

                        return this.r('LRANGE', from, to);
                    }

                    /**
                     * remove elements with value v (via LREM)
                     * @param {string} v the value to remove
                     * @param {nunber} [count=0] 0 for all occurrences, otherwise limit the number of removals
                     * @return {Promise<number,Errpr>} response is the number removed
                     */

                }, {
                    key: 'remove',
                    value: function remove(v) {
                        var count = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                        return this.r('LREM', count, v);
                    }

                    /**
                     * set element i to value v (via LSET)
                     * @param {number} i index of element to set
                     * @param {string} v value
                     * @return {Promise<Array,Error>} status response
                     */

                }, {
                    key: 'set',
                    value: function set(i, v) {
                        return this.r('LSET', i, v);
                    }

                    /**
                     * set list to supplied values (via DEL and RPUSH)
                     * @param {...string} values Values to set
                     * @return {Promise<number,Error>} response is new length of list
                     */

                }, {
                    key: 'setAll',
                    value: function setAll() {
                        for (var _len7 = arguments.length, values = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                            values[_key7] = arguments[_key7];
                        }

                        var that = this;
                        return del(this.k).then(function () {
                            return that.push.apply(that, values);
                        });
                    }

                    /**
                     * trim list to only the indicated range of indexes and reindex (via LTRIM)
                     * @param {number} from the first index of elements to keep
                     * @param {number} to the last index of elements to keep, inclusive 
                     * @return {Promise<Array,Error>} status response
                     */

                }, {
                    key: 'trim',
                    value: function trim() {
                        var from = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                        var to = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

                        return this.r('LTRIM', from, to);
                    }

                    /**
                     * remove the tail from the list and return it (via RPOP)
                     * @return {Promise<string,Error>} response is the tail value from the list
                     */

                }, {
                    key: 'pop',
                    value: function pop() {
                        return this.r('RPOP');
                    }

                    /**
                     * remove the tail from the list and append (unshift) it as the head of another list (via RPOPLPUSH)
                     * @param {string} destination key to List receiving the element
                     * @return {Promise<Array,Error>} status response
                     */

                }, {
                    key: 'popTo',
                    value: function popTo(destination) {
                        return this.r('RPOPLPUSH', destination);
                    }

                    /**
                     * append values to the tail of the list (via RPUSH)
                     * @param {...string} values to append to the tail of the list
                     * @return {Promise<number,Error>} response is new length of the list
                     */

                }, {
                    key: 'push',
                    value: function push() {
                        for (var _len8 = arguments.length, values = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                            values[_key8] = arguments[_key8];
                        }

                        return this.r.apply(this, ['RPUSH'].concat(values));
                    }
                }]);

                return List;
            })();

            _export('List', List);

            Rset = (function () {

                /**
                 * Instantly create a list handler associated with a specific list, via its key, sends no requests to the server until a method is called.
                 * @param {string} k Key where a List is stored, or to be stored, on the server
                 */

                function Rset(k) {
                    _classCallCheck(this, Rset);

                    this.k = k;
                }

                /**
                 * @private
                 */

                _createClass(Rset, [{
                    key: 'r',
                    value: function r() {
                        for (var _len9 = arguments.length, cmdparams = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                            cmdparams[_key9] = arguments[_key9];
                        }

                        cmdparams.splice(1, 0, this.k);
                        return request(cmdparams);
                    }

                    /**
                     * list members of set (via SMEMBERS)
                     * @return {Promise<Array,Error>} response is array list of members of the set
                     */

                }, {
                    key: 'members',
                    value: function members() {
                        return this.r('SMEMBERS');
                    }

                    /**
                     * synonym for .members()
                     * @return {Promise<Array,Error>} response is array list of members of the set
                     */

                }, {
                    key: 'keys',
                    value: function keys() {
                        return this.members();
                    }

                    /**
                     * synonym for .members()
                     * @return {Promise<Array,Error>} response is array list of members of the set
                     */

                }, {
                    key: 'vals',
                    value: function vals() {
                        return this.members();
                    }

                    /**
                     * synonym for .members()
                     * @return {Promise<Array,Error>} response is array list of members of the set
                     */

                }, {
                    key: 'getAll',
                    value: function getAll() {
                        return this.members();
                    }

                    /**
                     * test set membership (via SISMEMBER)
                     * @param x value to find in the set
                     * @return {Promise<number,Error>} response is 1 for member and 0 for not member
                     */

                }, {
                    key: 'has',
                    value: function has(x) {
                        return this.r('SISMEMBER', x);
                    }

                    /**
                     * clone of .has, tests set membership (via SISMEMBER)
                     * @param x value to find in the set
                     * @return {Promise<number,Error>} response is 1 for member and 0 for not member
                     */

                }, {
                    key: 'isMember',
                    value: function isMember(x) {
                        return this.has(x);
                    }

                    /**
                     * delete all members by deleting key (via DEL)
                     * @return {Promise<number,Error>} response is 1 on deletion or 0 if the set does not exist
                     */

                }, {
                    key: 'clear',
                    value: function clear() {
                        return this.r('DEL');
                    }

                    /**
                     * add new values to the set
                     * @param {...string} vals New values to add to set
                     * @return {Promise<number,Error>} response is the number of additional members 
                     */

                }, {
                    key: 'add',
                    value: function add() {
                        for (var _len10 = arguments.length, vals = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                            vals[_key10] = arguments[_key10];
                        }

                        return this.r.apply(this, ['SADD'].concat(vals));
                    }

                    /**
                     * initialize the set to the passed values (via DEL and SADD)
                     * @param {...string} vals Values used to initialize the set
                     * @return {Promise<number,Error>} response is the number of unique set members
                     */

                }, {
                    key: 'set',
                    value: function set() {
                        var _this = this;

                        for (var _len11 = arguments.length, vals = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                            vals[_key11] = arguments[_key11];
                        }

                        return this.clear().then(function () {
                            return _this.add.apply(_this, vals);
                        });
                    }

                    /**
                     * remove values from the set (via SREM)
                     * @param {...string} vals Values to remove
                     * @return {Promise<number,Error>} response is the number removed
                     */

                }, {
                    key: 'remove',
                    value: function remove() {
                        for (var _len12 = arguments.length, vals = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                            vals[_key12] = arguments[_key12];
                        }

                        return this.r.apply(this, ['SREM'].concat(vals));
                    }

                    /**
                     * number of members (via SCARD)
                     * @return {Promise<number,Error>} response is the number of members in the set
                     */

                }, {
                    key: 'len',
                    value: function len() {
                        return this.r('SCARD');
                    }

                    /**
                     * find the members in the current set not in any of the other sets (by key) (via SDIFF)
                     * @param {...string} skeys Keys of other sets
                     * @return {Promise<Array, Error>} response is an array giving the values in calculated set difference
                     */

                }, {
                    key: 'withoutSets',
                    value: function withoutSets() {
                        for (var _len13 = arguments.length, skeys = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                            skeys[_key13] = arguments[_key13];
                        }

                        return this.r.apply(this, ['SDIFF'].concat(skeys));
                    }

                    /**
                     * store at this key the set difference of sets at keys given by x and y (via SDIFFSTORE)
                     * @param {string} x key for set X
                     * @param {string} y key for set Y
                     * @return {Promise<number,Error>} response is the number of members stored in this key's set
                     */

                }, {
                    key: 'fromDiff',
                    value: function fromDiff(x, y) {
                        return this.r('SDIFFSTORE', x, y);
                    }

                    /**
                     * find the members in the set intersection of the current set and the other listed sets (via SINTER)
                     * @param {...string} skeys Keys of other sets for intersection
                     * @return {Promise<Array,Error>} response is an array giving the values in the calculated set intersection
                     */

                }, {
                    key: 'intersection',
                    value: function intersection() {
                        for (var _len14 = arguments.length, skeys = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                            skeys[_key14] = arguments[_key14];
                        }

                        return this.r.apply(this, ['SINTER'].concat(skeys));
                    }

                    /**
                     * store at this key the set intersection of the listed sets (via SINTERSTORE)
                     * @param {...skeys} skeys Keys of sets for intersection
                     * @return {Promise<number,Error>} response is the number of members stored in this key's set
                     */

                }, {
                    key: 'fromIntersection',
                    value: function fromIntersection() {
                        for (var _len15 = arguments.length, skeys = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                            skeys[_key15] = arguments[_key15];
                        }

                        return this.r.apply(this, ['SINTERSTORE'].concat(skeys));
                    }

                    /**
                     * find the members in the set union of the current set and the other listed sets (via SUNION)
                     * @param {...string} skeys Keys of other sets for union
                     * @return {Promise<Array,Error>} response is an array giving the (unique) values in the calculated set union
                     */

                }, {
                    key: 'union',
                    value: function union() {
                        for (var _len16 = arguments.length, skeys = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                            skeys[_key16] = arguments[_key16];
                        }

                        return this.r.apply(this, ['SUNION'].concat(skeys));
                    }

                    /**
                     * store at this key the set union of the listed sets (via SUNIONSTORE)
                     * @param {...skeys} skeys Keys of sets for union
                     * @return {Promise<number,Error>} response is the number of members stored in this key's set
                     */

                }, {
                    key: 'fromUnion',
                    value: function fromUnion() {
                        for (var _len17 = arguments.length, skeys = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
                            skeys[_key17] = arguments[_key17];
                        }

                        return this.r.apply(this, ['SUNIONSTORE'].concat(skeys));
                    }

                    /**
                     * (always) delete a member from the current set and (potentially) add it to another set (via SMOVE)
                     * @param {string} otherSet key to destination set
                     * @param {string} member value to move
                     * @return {Promise<number,Error>} response is 1 if moved from source set to destination set, 0 if not a member of source set
                     */

                }, {
                    key: 'moveTo',
                    value: function moveTo(otherSet, member) {
                        return this.r('SMOVE', otherSet, member);
                    }

                    /**
                     * remove and return a random member of the set
                     * @return {Promise<string,Error>} response is the removed member 
                     */

                }, {
                    key: 'pop',
                    value: function pop() {
                        return this.r('SPOP');
                    }

                    /**
                     * generate a random sample from the set, of any length, potentially repeating members
                     * @param {number} count desired sample length
                     * @return {Promise<Array,Error>} response is the requested random sample
                     */

                }, {
                    key: 'sampleWithReplacement',
                    value: function sampleWithReplacement() {
                        var count = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

                        return this.r('SRANDMEMBER', -Math.abs(count));
                    }

                    /**
                     * generate a random sample that is a subset, so that the sample has no repetition of memberss
                     * @param {number} count desired subset length
                     * @param {Promise<Array,Error>} response is the requested random subset
                     */

                }, {
                    key: 'sampleSubset',
                    value: function sampleSubset() {
                        var count = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

                        return this.r('SRANDMEMBER', Math.abs(count));
                    }
                }]);

                return Rset;
            })();

            _export('Rset', Rset);
        }
    };
});
$__System.registerDynamic("40", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = [{
    "title": "zi agents vs mixed agents - unlimited order books",
    "configurations": [{
      "buyerValues": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49],
      "sellerCosts": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51],
      "L": 1,
      "H": 200,
      "numberOfBuyers": 10,
      "numberOfSellers": 10,
      "periods": 100,
      "periodDuration": 1000,
      "buyerRate": 0.2,
      "sellerRate": 0.2,
      "buyerAgentType": ["ZIAgent"],
      "sellerAgentType": ["ZIAgent"],
      "integer": false,
      "keepPreviousOrders": false,
      "ignoreBudgetConstraint": false,
      "silent": true,
      "version": 1,
      "xMarket": {
        "buySellBookLimit": 0,
        "resetAfterEachTrade": false
      }
    }, {
      "buyerValues": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49],
      "sellerCosts": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51],
      "L": 1,
      "H": 200,
      "numberOfBuyers": 10,
      "numberOfSellers": 10,
      "periods": 100,
      "periodDuration": 1000,
      "buyerRate": 0.2,
      "sellerRate": 0.2,
      "buyerAgentType": ["ZIAgent", "UnitAgent", "OneupmanshipAgent", "KaplanSniperAgent"],
      "sellerAgentType": ["ZIAgent", "UnitAgent", "OneupmanshipAgent", "KaplanSniperAgent"],
      "integer": false,
      "keepPreviousOrders": false,
      "ignoreBudgetConstraint": false,
      "silent": true,
      "version": 1,
      "xMarket": {
        "buySellBookLimit": 0,
        "resetAfterEachTrade": false
      }
    }]
  }, {
    "title": "zi agents vs mixed agents - no books - markets cleared after each trade",
    "configurations": [{
      "buyerValues": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49],
      "sellerCosts": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51],
      "L": 1,
      "H": 200,
      "numberOfBuyers": 10,
      "numberOfSellers": 10,
      "periods": 100,
      "periodDuration": 1000,
      "buyerRate": 0.2,
      "sellerRate": 0.2,
      "buyerAgentType": ["ZIAgent"],
      "sellerAgentType": ["ZIAgent"],
      "integer": false,
      "keepPreviousOrders": false,
      "ignoreBudgetConstraint": false,
      "silent": true,
      "version": 1,
      "xMarket": {
        "buySellBookLimit": 0,
        "resetAfterEachTrade": true
      }
    }, {
      "buyerValues": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49],
      "sellerCosts": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51],
      "L": 1,
      "H": 200,
      "numberOfBuyers": 10,
      "numberOfSellers": 10,
      "periods": 100,
      "periodDuration": 1000,
      "buyerRate": 0.2,
      "sellerRate": 0.2,
      "buyerAgentType": ["ZIAgent", "UnitAgent", "OneupmanshipAgent", "KaplanSniperAgent"],
      "sellerAgentType": ["ZIAgent", "UnitAgent", "OneupmanshipAgent", "KaplanSniperAgent"],
      "integer": false,
      "keepPreviousOrders": false,
      "ignoreBudgetConstraint": false,
      "silent": true,
      "version": 1,
      "xMarket": {
        "buySellBookLimit": 0,
        "resetAfterEachTrade": true
      }
    }]
  }, {
    "title": "higher price vs lower price",
    "configurations": [{
      "buyerValues": [100, 95, 90, 85, 80, 75, 70, 60, 50, 40, 30, 20, 10],
      "sellerCosts": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      "L": 1,
      "H": 200,
      "numberOfBuyers": 10,
      "numberOfSellers": 10,
      "periods": 100,
      "periodDuration": 1000,
      "buyerRate": 0.2,
      "sellerRate": 0.2,
      "buyerAgentType": ["ZIAgent"],
      "sellerAgentType": ["ZIAgent"],
      "integer": false,
      "keepPreviousOrders": false,
      "ignoreBudgetConstraint": false,
      "silent": true,
      "version": 1,
      "xMarket": {
        "buySellBookLimit": 0,
        "resetAfterEachTrade": true
      }
    }, {
      "buyerValues": [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
      "sellerCosts": [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      "L": 1,
      "H": 200,
      "numberOfBuyers": 10,
      "numberOfSellers": 10,
      "periods": 100,
      "periodDuration": 1000,
      "buyerRate": 0.2,
      "sellerRate": 0.2,
      "buyerAgentType": ["ZIAgent"],
      "sellerAgentType": ["ZIAgent"],
      "integer": false,
      "keepPreviousOrders": false,
      "ignoreBudgetConstraint": false,
      "silent": true,
      "version": 1,
      "xMarket": {
        "buySellBookLimit": 0,
        "resetAfterEachTrade": true
      }
    }]
  }];
  return module.exports;
});

$__System.register('1', ['3', '5', '7', '34', '40', 'b', '3f'], function (_export) {
    var _toConsumableArray, longArray3, deepEqual, W, totalTs;

    // delete the keys from previous test run

    /* two part async test runner
     * @param {string} n name -- name of test
     * @param {Object} x an object to test
     * @param {Object|number|string} i init value to set
     * @param {String} f an async method of x
     * @param {Array} p params to method
     * @param {Function(Object x.f(p)):boolean} check function(result) returning true or false
     * @param {String} g an async method of x
     * @param {Function(Object x.g()):boolean} confirm check getter results returning true or false
     */

    function tryConfirm(_ref) {
        var n = _ref.n;
        var x = _ref.x;
        var i = _ref.i;
        var f = _ref.f;
        var p = _ref.p;
        var params = _ref.params;
        var check = _ref.check;
        var g = _ref.g;
        var confirm = _ref.confirm;

        QUnit.test(n, function (assert) {
            assert.expect(1 + !!g);
            var done = assert.async();
            function onError(e) {
                assert.ok(false, "error: " + e);
                done();
            }
            function step3(gResult) {
                assert.ok(confirm(gResult, p || params), g + ' yielded ' + JSON.stringify(gResult));
                done();
            }
            function step2(fResult) {
                assert.ok(check(fResult, p || params), f + ' yielded ' + JSON.stringify(fResult));
                if (g) x[g]().then(step3, onError);else done();
            }
            var fparams = undefined;
            if (Array.isArray(params)) {
                fparams = params;
            } else if (p === undefined) {
                fparams = [];
            } else {
                fparams = [p];
            }
            function atest() {
                x[f].apply(x, _toConsumableArray(fparams)).then(step2, onError);
            }
            if (i === undefined) atest();else x.set(i).then(atest, onError);
        });
    }

    function same(r, p) {
        return deepEqual(r, p, true);
    }

    function r0(r) {
        return r && r[0];
    }

    return {
        setters: [function (_2) {}, function (_3) {}, function (_4) {}, function (_) {
            _toConsumableArray = _['default'];
        }, function (_5) {
            longArray3 = _5['default'];
        }, function (_b) {
            deepEqual = _b['default'];
        }, function (_f) {
            W = _f;
        }],
        execute: function () {
            /* eslint no-console:off, newline-per-chained-call:off */
            /* globals QUnit:true */

            'use strict';

            W.configure({
                method: "GET"
            }); // there might be an issue with http-proxy and POST as run by karma test runner

            totalTs = 100;

            W.del.apply(W, _toConsumableArray(Array(totalTs).fill(0).map(function (v, i) {
                return 't' + i;
            })));QUnit.test("Webdismay W exists", function (assert) {
                assert.expect(1);
                assert.ok(W, "W exists");
            });

            QUnit.test("W has Key, Hash constructors and key, hash factories", function (assert) {
                assert.expect(4);
                assert.ok(typeof W.Key === "function", "W.Key");
                assert.ok(typeof W.key === "function", "W.key");
                assert.ok(typeof W.Hash === "function", "W.Hash");
                assert.ok(typeof W.hash === "function", "W.hash");
            });

            QUnit.test("fetch exists", function (assert) {
                assert.expect(2);
                assert.ok(typeof fetch === 'function', "fetch is function");
                assert.ok(typeof window.fetch === 'function', "window.fetch is a function");
            });tryConfirm({
                n: "echo test",
                x: W,
                f: "echo",
                p: "Hello World",
                check: same
            });

            tryConfirm({
                n: "mset t1, t2, t3 ",
                x: W,
                f: "mset",
                p: { t1: "Larry", t2: "Moe", t3: "Curly" },
                check: r0
            });

            tryConfirm({
                n: "mget t1, t2, t3 ",
                x: W,
                f: "mget",
                params: ['t1', 't2', 't3'],
                check: function check(r) {
                    return r[0] === "Larry" && r[1] === "Moe" && r[2] === "Curly";
                }
            });

            tryConfirm({
                n: "msetnx t1, t2, t3, should fail",
                x: W,
                f: "msetnx",
                p: { t1: "Ma", t2: "Mo", t3: "Ja" },
                check: function check(r) {
                    return r === 0;
                }
            });

            tryConfirm({
                n: "msetnx t4, t5, t6, should succeed",
                x: W,
                f: "msetnx",
                p: { t4: "Ma", t5: "Mo", t6: "Ja" },
                check: function check(r) {
                    return r === 1;
                }
            });

            tryConfirm({
                n: "keysMatching t* should include recently set t1,t2,t3,t4,t5,t6",
                x: W,
                f: "keysMatching",
                p: "t*",
                check: function check(r) {
                    return [1, 2, 3, 4, 5, 6].every(function (n) {
                        return r.indexOf("t" + n) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "randomKey returns something",
                x: W,
                f: "randomKey",
                check: function check(r) {
                    return !!r;
                }
            });

            tryConfirm({
                n: "set t1 to [1,2,[3,4],{x:5}] and check it",
                x: W.key("t1"),
                f: "set",
                p: [1, 2, [3, 4], { x: 5 }],
                check: r0,
                g: "get",
                confirm: same
            });

            tryConfirm({
                n: "set t2 to 47.5 and check it",
                x: W.key("t2"),
                f: "set",
                p: 47.5,
                check: r0,
                g: "get",
                confirm: same
            });

            tryConfirm({
                n: "set t3 to '67 apples @ http://more.apples.please ' and check it",
                x: W.key("t3"),
                f: "set",
                p: "67 apples @ http://more.apples.please ",
                check: r0,
                g: "get",
                confirm: same
            });

            tryConfirm({
                n: "append t4 'bar' yielding 'foobar'",
                x: W.key("t4"),
                i: "foo",
                f: "append",
                p: "bar",
                check: function check(r) {
                    return r === 6;
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === "foobar";
                }
            });

            tryConfirm({
                n: "decr t5 to yield 46",
                x: W.key("t5"),
                i: 47,
                f: "decr",
                check: function check(r) {
                    return r === 46;
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === 46;
                }
            });

            tryConfirm({
                n: "decr t6 10 to yield 23",
                x: W.key("t6"),
                i: 33,
                f: "decrBy",
                p: 10,
                check: function check(r) {
                    return r === 23;
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === 23;
                }
            });

            tryConfirm({
                n: "delete a key that is not there",
                x: W.key("nowaythisisthere"),
                f: "del",
                check: function check(r) {
                    return !r;
                }
            });

            tryConfirm({
                n: "delete key t3 from previous test",
                x: W.key("t3"),
                f: "del",
                check: function check(r) {
                    return r;
                },
                g: "exists",
                confirm: function confirm(r) {
                    return !r;
                }
            });

            tryConfirm({
                n: "exists t7 yields 1",
                x: W.key("t7"),
                i: "the  purple unicorns jumped over a harvest moon",
                f: "exists",
                check: function check(r) {
                    return r === 1;
                }
            });

            /* async test for t8 to test expire had issues */

            tryConfirm({
                n: "getrange t9 0 2 yields foo",
                x: W.key("t9"),
                i: "foobar",
                f: "getRange",
                params: [0, 2],
                check: function check(r) {
                    return r === 'foo';
                }
            });

            tryConfirm({
                n: "getSet t10 fizzbuzz yields old value foobar, sets fizzbuzz",
                x: W.key("t10"),
                i: "foobar",
                f: "getSet",
                p: "fizzbuzz",
                check: function check(r) {
                    return r === "foobar";
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === "fizzbuzz";
                }
            });

            tryConfirm({
                n: "incr t11 yields 56",
                x: W.key("t11"),
                i: 55,
                f: "incr",
                check: function check(r) {
                    return r === 56;
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === 56;
                }
            });

            tryConfirm({
                n: "incrBy t12 -40 yields 60",
                x: W.key("t12"),
                i: 100,
                f: "incrBy",
                p: -40,
                check: function check(r) {
                    return r === 60;
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === 60;
                }
            });

            tryConfirm({
                n: "incrByFloat t13 2.25 yields 3.5",
                x: W.key("t12"),
                i: 1.25,
                f: "incrByFloat",
                p: 2.25,
                check: function check(r) {
                    return r === 3.5;
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === 3.5;
                }
            });

            /*
             * moveToDB untested
             */

            /*
             * persist, pExpire, etc... untested
             */

            tryConfirm({
                n: "rename t14 t14B: shows exists as key is renamed locally too",
                x: W.key("t14"),
                i: 123,
                f: "rename",
                p: "t14B",
                check: function check() {
                    return true;
                },
                g: "exists",
                confirm: function confirm(r) {
                    return r === 1;
                } // local key is renamed too
            });

            /*
             * as DUMP does not seem to work in webdis, RESTORE is also untested
             */

            tryConfirm({
                n: "setnx t15 -23 fails, as t15 exists, t15 will still be 55",
                x: W.key("t15"),
                i: 55,
                f: "setnx",
                p: -23,
                check: function check(r) {
                    return r === 0;
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === 55;
                }
            });

            tryConfirm({
                n: "setnx t16 to random number succeeds, as t16 does not exist",
                x: W.key("t16"),
                f: "setnx",
                p: Math.random(),
                check: function check() {
                    return true;
                },
                g: "get",
                confirm: same
            });

            tryConfirm({
                n: "setRange t17 3 bazz yields 7 and sets t17 to foobazz",
                i: "foobar",
                x: W.key("t17"),
                f: "setRange",
                params: [3, 'bazz'],
                check: function check(r) {
                    return r === 7;
                },
                g: "get",
                confirm: function confirm(r) {
                    return r === "foobazz";
                }
            });

            tryConfirm({
                n: "strlen t18 yields 10",
                i: "0123456789",
                x: W.key("t18"),
                f: "strlen",
                check: function check(r) {
                    return r === 10;
                }
            });

            /*
             * ttl, type untested
             *
             */

            /*
             * Tests for Hash 
             */

            tryConfirm({
                n: "create a Hash, check the fields",
                x: W.hash("t20"),
                f: "set",
                p: { foo: "bar", baz: 3 },
                check: r0,
                g: "getAll",
                confirm: same
            });

            tryConfirm({
                n: "set a Hash to some other fields, check that old fields are gone, only new fields present",
                x: W.hash("t20"),
                f: "set",
                p: { "crazy": "Larry", "mean": "Moe", "funny": "Curly" },
                check: r0,
                g: "getAll",
                confirm: same
            });

            tryConfirm({
                n: "del 'mean', check remaining fields",
                x: W.hash("t20"),
                f: "del",
                p: "mean",
                check: function check(r) {
                    return r === 1;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return r.crazy && r.funny && !r.mean;
                }
            });

            tryConfirm({
                n: "update hash t20 field z, set to 20, check all fields",
                x: W.hash("t20"),
                f: "update",
                p: { z: 20 },
                check: r0,
                g: "getAll",
                confirm: function confirm(r) {
                    return r.crazy && r.funny && !r.mean && r.z === 20;
                }
            });

            tryConfirm({
                n: "incrBy t20 z 5 yields 25",
                x: W.hash("t20"),
                f: "incrBy",
                params: ['z', 5],
                check: function check(r) {
                    return r === 25;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return r.z === 25;
                }
            });

            tryConfirm({
                n: "incrByFloat t20 z 0.5 yields 25.5",
                x: W.hash("t20"),
                f: "incrByFloat",
                params: ['z', 0.5],
                check: function check(r) {
                    return r === 25.5;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return r.z === 25.5;
                }
            });

            tryConfirm({
                n: "keys t20 should include crazy, funny, z",
                x: W.hash("t20"),
                f: "keys",
                check: function check(r) {
                    return ["crazy", "funny", "z"].every(function (k) {
                        return r.indexOf(k) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "vals t20 should include 25.5, Larry, Curly",
                x: W.hash("t20"),
                f: "vals",
                check: function check(r) {
                    return [25.5, "Larry", "Curly"].every(function (k) {
                        return r.indexOf(k) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "len should equal 3",
                x: W.hash("t20"),
                f: "len",
                check: function check(r) {
                    return r === 3;
                }
            });

            tryConfirm({
                n: "deleteAll removes t20 hash, getall returns {}",
                x: W.hash("t20"),
                f: "deleteAll",
                check: function check(r) {
                    return r === 1;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return deepEqual(r, {}, true);
                }
            });

            /*
             * Lists
             */

            tryConfirm({
                n: "set t21 list to  [ [2,7] , [1,8,3], [2,8,4,0,5], [1,8] ] ",
                x: W.list("t21"),
                f: "setAll",
                params: [[2, 7], [1, 8, 3], [2, 8, 4, 0, 5], [1, 8]],
                check: function check(r) {
                    return r === 4;
                },
                g: "getAll",
                confirm: same
            });

            tryConfirm({
                n: "set t21 to longArray3.json array",
                x: W.list("t21"),
                f: "setAll",
                params: longArray3,
                check: function check(r) {
                    return r === 3;
                },
                g: "getAll",
                confirm: same
            });

            tryConfirm({
                n: "set t21 list to [2,7,1,8,2,8,1,8]",
                x: W.list("t21"),
                f: "setAll",
                params: [2, 7, 1, 8, 2, 8, 1, 8],
                check: function check(r) {
                    return r === 8;
                },
                g: "getAll",
                confirm: same
            });

            tryConfirm({
                n: "t21 popTo t22 yields 8, shortens t20 to 2,7,1,8,2,8,1",
                x: W.list("t21"),
                f: "popTo",
                p: "t22",
                check: function check(r) {
                    return r === 8;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return deepEqual(r, [2, 7, 1, 8, 2, 8, 1], true);
                }
            });

            tryConfirm({
                n: "t22 get 0 should yield 8",
                x: W.list("t22"),
                f: "get",
                p: 0,
                check: function check(r) {
                    return r === 8;
                }
            });

            tryConfirm({
                n: "t22 pop should yield 8, empty list",
                x: W.list("t22"),
                f: "pop",
                check: function check(r) {
                    return r === 8;
                },
                g: "len",
                confirm: function confirm(r) {
                    return r === 0;
                }
            });

            tryConfirm({
                n: "t21 insertBefore 1, {z:6} yields 8, getall yields [2,7,{z:6},1,8,2,8,1]",
                x: W.list("t21"),
                f: "insertBefore",
                params: [1, { z: 6 }],
                check: function check(r) {
                    return r === 8;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return deepEqual(r, [2, 7, { z: 6 }, 1, 8, 2, 8, 1], true);
                }
            });

            tryConfirm({
                n: "t21 insertAfter 8, 'oranges' yields 9, getall yields [2,7,{z:6},1,8,'oranges',2,8,1]",
                x: W.list("t21"),
                f: "insertAfter",
                params: [8, 'oranges'],
                check: function check(r) {
                    return r === 9;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return deepEqual(r, [2, 7, { z: 6 }, 1, 8, 'oranges', 2, 8, 1], true);
                }
            });

            tryConfirm({
                n: "t21 remove 8, removes 2 elements, getall yields [2,7,{z:6},1,'oranges',2,1]",
                x: W.list("t21"),
                f: "remove",
                p: 8,
                check: function check(r) {
                    return r === 2;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return deepEqual(r, [2, 7, { z: 6 }, 1, 'oranges', 2, 1], true);
                }
            });

            tryConfirm({
                n: "t21 shift yields 2, getAll yields [7,{z:6},1,'oranges',2,1]",
                x: W.list("t21"),
                f: "shift",
                check: function check(r) {
                    return r === 2;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return deepEqual(r, [7, { z: 6 }, 1, 'oranges', 2, 1]);
                }
            });

            tryConfirm({
                n: "t21 unshift 99 yields 7, getAll yields [99,7,{z:6},1,'oranges',2,1]",
                x: W.list("t21"),
                f: "unshift",
                p: 99,
                check: function check(r) {
                    return r === 7;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return deepEqual(r, [99, 7, { z: 6 }, 1, 'oranges', 2, 1], true);
                }
            });

            tryConfirm({
                n: "t21 slice 2,3 yields [{z:6},1] and list unchanged",
                x: W.list("t21"),
                f: "slice",
                params: [2, 3],
                check: function check(r) {
                    return deepEqual(r, [{ z: 6 }, 1], true);
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return deepEqual(r, [99, 7, { z: 6 }, 1, 'oranges', 2, 1], true);
                }
            });

            tryConfirm({
                n: "t21 trim 3,4 yields ok and list truncated to [1,'oranges']",
                x: W.list("t21"),
                f: "trim",
                params: [3, 4],
                check: r0,
                g: 'getAll',
                confirm: function confirm(r) {
                    return deepEqual(r, [1, 'oranges'], true);
                }
            });

            /*
             * Set
             *
             */

            tryConfirm({
                n: "rset t30 set [2,3,5,7,7,11,13] yields 6, members yields [2,3,5,7,11,13] ",
                x: W.rset('t30'),
                f: "set",
                params: [2, 3, 5, 7, 7, 11, 13],
                check: function check(r) {
                    return r === 6;
                },
                g: "members",
                confirm: function confirm(r) {
                    return [2, 3, 5, 7, 11, 13].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t30 has 6 should yield false",
                x: W.rset('t30'),
                f: "has",
                p: 6,
                check: function check(r) {
                    return r === 0;
                }
            });

            tryConfirm({
                n: "rset t30 has 7 should yield true",
                x: W.rset('t30'),
                f: "has",
                p: 7,
                check: function check(r) {
                    return r === 1;
                }
            });

            tryConfirm({
                n: "rset t30 remove 13 should remove 1 member",
                x: W.rset('t30'),
                f: "remove",
                p: 13,
                check: function check(r) {
                    return r === 1;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return [2, 3, 5, 7, 11].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t30 add 11 13 should yield 1 (only 13 new)",
                x: W.rset('t30'),
                f: "add",
                params: [11, 13],
                check: function check(r) {
                    return r === 1;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return [2, 3, 5, 7, 11, 13].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t30 len should yield 6",
                x: W.rset('t30'),
                f: "len",
                check: function check(r) {
                    return r === 6;
                }
            });

            tryConfirm({
                n: "rset t31 set to 5,10,15",
                x: W.rset('t31'),
                f: "set",
                params: [5, 10, 15],
                check: function check(r) {
                    return r === 3;
                },
                g: "members",
                confirm: function confirm(r) {
                    return [5, 10, 15].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t30 withoutSets t31 yields [2,3,7,11,13] and t30 unchanged with [2,3,5,7,11,13]",
                x: W.rset('t30'),
                f: "withoutSets",
                p: "t31",
                check: function check(r) {
                    return [2, 3, 7, 11, 13].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                },
                g: "members",
                confirm: function confirm(r) {
                    return [2, 3, 5, 7, 11, 13].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t32 fromDiff t30 t31 yields 5 members [2,3,7,11,13]",
                x: W.rset('t32'),
                f: "fromDiff",
                params: ['t30', 't31'],
                check: function check(r) {
                    return r === 5;
                },
                g: "members",
                confirm: function confirm(r) {
                    return [2, 3, 7, 11, 13].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t30 intersection t31 yields [5] and t30 unchanged with [2,3,5,7,11,13]",
                x: W.rset('t30'),
                f: "intersection",
                p: "t31",
                check: function check(r) {
                    return r.length === 1 && r[0] === 5;
                },
                g: "members",
                confirm: function confirm(r) {
                    return [2, 3, 5, 7, 11, 13].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t33 fromIntersection t30 t31 yields 1 member [5]",
                x: W.rset('t33'),
                f: "fromIntersection",
                params: ['t30', 't31'],
                check: function check(r) {
                    return r === 1;
                },
                g: "members",
                confirm: function confirm(r) {
                    return r.length === 1 && r[0] === 5;
                }
            });

            tryConfirm({
                n: "rset t30 union t31 yields [2,3,5,7,10,11,13,15] and t30 unchanged with [2,3,5,7,11,13]",
                x: W.rset('t30'),
                f: "union",
                p: "t31",
                check: function check(r) {
                    return [2, 3, 5, 7, 10, 11, 13, 15].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                },
                g: "members",
                confirm: function confirm(r) {
                    return [2, 3, 5, 7, 11, 13].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t34 fromUnion t30 t31 yields 8 members [2,3,5,7,10,11,13,15]",
                x: W.rset('t34'),
                f: "fromUnion",
                params: ['t30', 't31'],
                check: function check(r) {
                    return r === 8;
                },
                g: "members",
                confirm: function confirm(r) {
                    return [2, 3, 5, 7, 10, 11, 13, 15].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "rset t34 moveTo t33 2 yields 1, members [3,5,7,10,11,13,15]",
                x: W.rset('t34'),
                f: "moveTo",
                params: ['t33', 2],
                check: function check(r) {
                    return r === 1;
                },
                g: 'members',
                confirm: function confirm(r) {
                    return r.indexOf(2) === -1 && [3, 5, 7, 10, 11, 13, 15].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "t33 members should be [2,5]",
                x: W.rset('t33'),
                f: "members",
                check: function check(r) {
                    return r.length === 2 && [2, 5].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "t33 pop should be 2 or 5 leaving 1 member",
                x: W.rset('t33'),
                f: "pop",
                check: function check(r) {
                    return r === 2 || r === 5;
                },
                g: "len",
                confirm: function confirm(r) {
                    return r === 1;
                }
            });

            tryConfirm({
                n: "t34 sampleWithReplacement 20 picks 20 items and t34 unchanged",
                x: W.rset('t34'),
                f: "sampleWithReplacement",
                p: 20,
                check: function check(r) {
                    return r.length === 20;
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return r.length === 7 && [3, 5, 7, 10, 11, 13, 15].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });

            tryConfirm({
                n: "t34 sampleSubset 20 picks 7 items because only 7 items in set and t34 unchanged",
                x: W.rset('t34'),
                f: "sampleSubset",
                p: 20,
                check: function check(r) {
                    return r.length === 7 && [3, 5, 7, 10, 11, 13, 15].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                },
                g: "getAll",
                confirm: function confirm(r) {
                    return r.length === 7 && [3, 5, 7, 10, 11, 13, 15].every(function (x) {
                        return r.indexOf(x) >= 0;
                    });
                }
            });
        }
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle.js.map