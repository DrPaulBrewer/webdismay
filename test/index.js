/* eslint no-console:off, newline-per-chained-call:off */
/* globals QUnit:true */

import 'es5-shim';
import 'es6-shim';
import 'whatwg-fetch';
import deepEqual from "deep-equal";
import * as W from "../src/index.js";

W.configure({
    method: "GET"
}); // there might be an issue with http-proxy and POST as run by karma test runner

const totalTs = 100;
W.del(...Array(totalTs).fill(0).map((v,i)=>('t'+i))); // delete the keys from previous test run

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

function tryConfirm({n, x, i, f, p, params, check, g, confirm}){
    QUnit.test(n, function(assert){
        assert.expect(1+(!!g));
        const done=assert.async();
        function onError(e){
            assert.ok(false, "error: "+e);
            done();
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
        let fparams;
        if (Array.isArray(params)){
            fparams = params;
        } else if (p===undefined){
            fparams = [];
        } else {
            fparams = [p];
        }
        function atest(){
            x[f](...fparams).then(step2, onError);
        }
        if (i===undefined)
            atest();
        else 
            x.set(i).then(atest, onError);
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
    return deepEqual(r,p,true);
}

function r0(r){
    return (r && r[0]);
}

tryConfirm({
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
    p: {t1: "Larry", t2: "Moe", t3:"Curly"},
    check: r0
});

tryConfirm({
    n: "mget t1, t2, t3 ",
    x: W,
    f: "mget",
    params: ['t1','t2','t3'],
    check: (r)=>(r[0]==="Larry" && r[1]==="Moe" && r[2]==="Curly")
});

tryConfirm({
    n:"msetnx t1, t2, t3, should fail",
    x: W,
    f: "msetnx",
    p: {t1: "Ma", t2:"Mo", t3:"Ja"},
    check: (r)=>(r===0)
});

tryConfirm({
    n:"msetnx t4, t5, t6, should succeed",
    x: W,
    f: "msetnx",
    p: {t4: "Ma", t5:"Mo", t6:"Ja"},
    check: (r)=>(r===1)
});

tryConfirm({
    n:"keysMatching t* should include recently set t1,t2,t3,t4,t5,t6",
    x: W,
    f: "keysMatching",
    p: "t*",
    check: (r)=>([1,2,3,4,5,6].every((n)=>(r.indexOf("t"+n)>=0)))
});

tryConfirm({
    n: "randomKey returns something",
    x: W,
    f: "randomKey",
    check: (r)=>(!!r)
});

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

/* async test for t8 to test expire had issues */

tryConfirm({
    n: "getrange t9 0 2 yields foo",
    x: new W.Key("t9"),
    i: "foobar",
    f: "getRange",
    params: [0,2],
    check: (r)=>(r==='foo')
});

tryConfirm({
    n: "getSet t10 fizzbuzz yields old value foobar, sets fizzbuzz",
    x: new W.Key("t10"),
    i: "foobar",
    f: "getSet",
    p: "fizzbuzz",
    check: (r)=>(r==="foobar"),
    g: "get",
    confirm: (r)=>(r==="fizzbuzz")
});

tryConfirm({
    n: "incr t11 yields 56",
    x: new W.Key("t11"),
    i: 55,
    f: "incr",
    check: (r)=>(r===56),
    g: "get",
    confirm: (r)=>(r===56)
});

tryConfirm({
    n: "incr t12 -40 yields 60",
    x: new W.Key("t12"),
    i: 100,
    f: "incrBy",
    p: -40,
    check: (r)=>(r===60),
    g: "get",
    confirm: (r)=>(r===60)
});

tryConfirm({
    n: "incr t13 2.25 yields 3.5",
    x: new W.Key("t12"),
    i: 1.25,
    f: "incrByFloat",
    p: 2.25,
    check: (r)=>(r===3.5),
    g: "get",
    confirm: (r)=>(r===3.5)
});


/*
 * moveToDB untested
 */

/*
 * persist, pExpire, etc... untested
 */

tryConfirm({
    n: "rename t14 t14B: shows exists as key is renamed locally too",
    x: new W.Key("t14"),
    i: 123,
    f: "rename",
    p: "t14B",
    check: ()=>(true),
    g: "exists", 
    confirm: (r)=>(r===1) // local key is renamed too
});

/*
 * as DUMP does not seem to work in webdis, RESTORE is also untested
 */

tryConfirm({
    n: "setnx t15 -23 fails, as t15 exists, t15 will still be 55",
    x: new W.Key("t15"),
    i: 55,
    f: "setnx",
    p: -23,
    check: (r)=>(r===0),
    g: "get",
    confirm: (r)=>(r===55)
});

tryConfirm({
    n: "setnx t16 to random number succeeds, as t16 does not exist",
    x: new W.Key("t16"),
    f: "setnx",
    p: Math.random(),
    check: ()=>(true),
    g: "get",
    confirm: same
});


tryConfirm({
    n: "setRange t17 3 bazz yields 7 and sets t17 to foobazz",
    i: "foobar",
    x: new W.Key("t17"),
    f: "setRange",
    params: [3,'bazz'],
    check: (r)=>(r===7),
    g: "get",
    confirm: (r)=>(r==="foobazz")
});

tryConfirm({
    n: "strlen t18 yields 10",
    i: "0123456789",
    x: new W.Key("t18"),
    f: "strlen",
    check: (r)=>(r===10)
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
    x: new W.Hash("t20"),
    f: "set",
    p: {foo:"bar",baz:3},
    check: r0,
    g: "getAll",
    confirm: same
});

tryConfirm({
    n: "set a Hash to some other fields, check that old fields are gone, only new fields present",
    x: new W.Hash("t20"),
    f: "set",
    p: {"crazy": "Larry", "mean": "Moe", "funny": "Curly"},
    check: r0,
    g: "getAll",
    confirm: same
});

tryConfirm({
    n: "del 'mean', check remaining fields",
    x: new W.Hash("t20"),
    f: "del",
    p: "mean",
    check: (r)=>r===1,
    g: "getAll",
    confirm: (r)=>(r.crazy && r.funny && !r.mean)
});

tryConfirm({
    n: "update hash t20 field z, set to 20, check all fields",
    x: new W.Hash("t20"),
    f: "update",
    p: {z:20},
    check: r0,
    g: "getAll",
    confirm: (r)=>(r.crazy && r.funny && !r.mean && (r.z===20))
});

tryConfirm({
    n: "deleteAll removes t20 hash, getall returns {}",
    x: new W.Hash("t20"),
    f: "deleteAll",
    check: (r)=>(r===1),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,{},true))
});

