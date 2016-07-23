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

function same(r,p){
    return JSON.stringify(r)===JSON.stringify(p);
}

function r0(r){
    return (r && r[0]);
}

tryConfirm({
    name: "set t1 to [1,2,[3,4],{x:5}] and check it",
    x: new W.Key("t1"),
    f: "set",
    p: [1,2,[3,4],{x:5}],
    check: r0,
    g: "get",
    confirm:  same
});

tryConfirm({
    name: "set t2 to 47.5 and check it",
    x: new W.Key("t2"),
    f: "set",
    p: 47.5,
    check: r0,
    g: "get",
    confirm: same
});

tryConfirm({
    name: "set t3 to '67 apples @ http://more.apples.please ' and check it",
    x: new W.Key("t3"),
    f: "set",
    p: "67 apples @ http://more.apples.please ",
    check: r0,
    g: "get",
    confirm: same
});

tryConfirm({
    name: "delete a key that is not there",
    x: new W.Key("nowaythisisthere"),
    f: "del",
    check: (r)=>(!r)
});

tryConfirm({
    name: "delete key t3 from previous test",
    x: new W.Key("t3"),
    f: "del",
    check:(r)=>(r),
    g: "get",
    confirm: (r)=>(!r)
});


