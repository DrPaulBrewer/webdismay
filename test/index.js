/* eslint no-console:off, newline-per-chained-call:off */
/* globals QUnit:true */

import 'es5-shim';
import 'es6-shim';
import 'whatwg-fetch';
import * as W from "../src/index.js";

W.setMethod("GET"); // there might be an issue with http-proxy and POST as run by karma test runner

/* two part async test runner
 * @param {string} name -- name of test
 * @param {Object} x an object to test
 * @param {String} f an async method of x
 * @param {Array} p params to method
 * @param {Function(Object x.f(p)):boolean} check function(result) returning true or false
 * @param {String} g an async method of x
 * @param {Function(Object x.g()):boolean} confirm check getter results returning true or false
 */

function tryConfirm({name, x, f, p, check, g, confirm}){
    QUnit.test(name, function(assert){
        assert.expect(2);
        const done=assert.async();
        function onError(e){
            assert.ok(false, "error: "+e);
        }
        function step3(gResult){
            assert.ok(confirm(gResult), g+' yielded '+JSON.stringify(gResult));
            done();
        }
        function step2(fResult){
            assert.ok(check(fResult), f+' yielded '+JSON.stringify(fResult));
            if (g)
                x[g]().then(step3, onError);
            else
                done();
        }
        x[f](p).then(step2, onError);
    });
}

QUnit.test("Webdismay W exists", function(assert){
    assert.expect(1);
    assert.ok(W, "W exists");
});

QUnit.test("W has Key, Hash constructors",function(assert){
    assert.expect(2);
    assert.ok( (typeof W.Key ==="function"), "W.Key");
    assert.ok( (typeof W.Hash ==="function"), "W.Hash");
});

QUnit.test("fetch exists", function(assert){
    assert.expect(2);
    assert.ok((typeof(fetch) === 'function'), "fetch is function");
    assert.ok((typeof(window.fetch) === 'function'), "window.fetch is a function");
});

QUnit.test("set Key test123 to 42 without testing", function(assert){
    assert.expect(1);
    const done = assert.async();
    (new W
     .Key('test123')
     .set(42)
     .then(
         function(result){
             assert.ok(result && result[0], 'promise resolved to array with true as 1st element');
             return result;
         },
         function(e){
             assert.ok(false, e);
             return e;
         }
     )
     .then(done,done)
    );
});

QUnit.test("set key test345 to 57 and check it", function(assert){
    assert.expect(2);
    const done = assert.async(1);
    const t = new W.Key('test345');
    (t.set(57)
     .then(function(result){
         assert.ok(result && result[0], 'promise resolved to array with true as 1st element');
         return result;
     })
     .then(function(){
         console.log("about to call t.get() ");
         t.get().then(
             function(result){
                 assert.ok(result===57, 'get result should equal the set value, 57, got:'+result);
                 return result;
             }
         ).then(done,done);
     }, done)
    );
});
             
tryConfirm({
    name: "set xyz to [1,2,3] and check it",
    x: new W.Key("xyz"),
    f: "set",
    p: [1,2,3],
    check: (r)=>(r && r[0]),
    g: "get",
    confirm: (r)=>(JSON.stringify(r)==='[1,2,3]')
});

