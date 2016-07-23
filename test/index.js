/* eslint no-console:off, newline-per-chained-call:off */
/* globals QUnit:true */

import 'es5-shim';
import 'es6-shim';
import 'whatwg-fetch';
import * as W from "../src/index.js";

W.setMethod("GET"); // there might be an issue with http-proxy and POST as run by karma test runner

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

function tryConfirm({n, x, i, f, p, check, g, confirm}){
    QUnit.test(n, function(assert){
        assert.expect(1+(!!g));
        const done=assert.async();
        function onError(e){
            assert.ok(false, "error: "+e);
        }
        function step3(gResult){
            assert.ok(confirm(gResult,p), g+' yielded '+JSON.stringify(gResult));
            done();
        }
        function step2(fResult){
            assert.ok(check(fResult,p), f+' yielded '+JSON.stringify(fResult));
            if (g)
                x[g]().then(step3, onError);
            else
                done();
        }
        function atest(){
            x[f](p).then(step2, onError);
        }
        if (i===undefined)
            atest();
        else 
            x.set(i).then(atest);
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

function same(r,p){
    return JSON.stringify(r)===JSON.stringify(p);
}

function r0(r){
    return (r && r[0]);
}

tryConfirm({
    n: "set t1 to [1,2,[3,4],{x:5}] and check it",
    x: new W.Key("t1"),
    f: "set",
    p: [1,2,[3,4],{x:5}],
    check: r0,
    g: "get",
    confirm:  same
});

tryConfirm({
    n: "set t2 to 47.5 and check it",
    x: new W.Key("t2"),
    f: "set",
    p: 47.5,
    check: r0,
    g: "get",
    confirm: same
});

tryConfirm({
    n: "set t3 to '67 apples @ http://more.apples.please ' and check it",
    x: new W.Key("t3"),
    f: "set",
    p: "67 apples @ http://more.apples.please ",
    check: r0,
    g: "get",
    confirm: same
});

tryConfirm({
    n: "append t4 'bar' yielding 'foobar'",
    x: new W.Key("t4"),
    i: "foo",
    f: "append",
    p: "bar",
    check: (r)=>(r===6),
    g: "get",
    confirm: (r)=>(r==="foobar")
});

tryConfirm({
    n: "decr t5 to yield 46",
    x: new W.Key("t5"),
    i: 47,
    f: "decr",
    check: (r)=>(r===46),
    g: "get",
    confirm: (r)=>(r===46)
});


tryConfirm({
    n: "decr t6 10 to yield 23",
    x: new W.Key("t6"),
    i: 33,
    f: "decrBy",
    p: 10,
    check: (r)=>(r===23),
    g: "get",
    confirm: (r)=>(r===23)
});

tryConfirm({
    n: "delete a key that is not there",
    x: new W.Key("nowaythisisthere"),
    f: "del",
    check: (r)=>(!r)
});

tryConfirm({
    n: "delete key t3 from previous test",
    x: new W.Key("t3"),
    f: "del",
    check:(r)=>(r),
    g: "exists",
    confirm: (r)=>(!r)
});

tryConfirm({
    n: "exists t7 yields 1",
    x: new W.Key("t7"),
    i: "the  purple unicorns jumped over a harvest moon",
    f: "exists",
    check: (r)=>(r===1)
});

new W.Key("t8").set(1).then(function(){
    new W.Key("t8").expire(1).then(function(){
        setTimeout(function(){
            tryConfirm({
                n: "expired key t8 does not exist",
                x: new W.Key("t8"),
                f: "exists",
                check: (r)=>(r===0)
            });
        }, 2000);
        tryConfirm({
            n: "immediately after expire t8 1 key t8 till exists",
            x: new W.Key("t8"),
            f: "exists",
            check: (r)=>(r===1)
        });
    });
});

    
