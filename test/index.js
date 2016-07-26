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

QUnit.test("W has Key, Hash constructors and key, hash factories",function(assert){
    assert.expect(4);
    assert.ok( (typeof W.Key ==="function"), "W.Key");
    assert.ok( (typeof W.key ==="function"), "W.key");
    assert.ok( (typeof W.Hash ==="function"), "W.Hash");
    assert.ok( (typeof W.hash === "function"), "W.hash");
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
    x: W.key("t1"),
    f: "set",
    p: [1,2,[3,4],{x:5}],
    check: r0,
    g: "get",
    confirm:  same
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
    check: (r)=>(r===6),
    g: "get",
    confirm: (r)=>(r==="foobar")
});

tryConfirm({
    n: "decr t5 to yield 46",
    x: W.key("t5"),
    i: 47,
    f: "decr",
    check: (r)=>(r===46),
    g: "get",
    confirm: (r)=>(r===46)
});


tryConfirm({
    n: "decr t6 10 to yield 23",
    x: W.key("t6"),
    i: 33,
    f: "decrBy",
    p: 10,
    check: (r)=>(r===23),
    g: "get",
    confirm: (r)=>(r===23)
});

tryConfirm({
    n: "delete a key that is not there",
    x: W.key("nowaythisisthere"),
    f: "del",
    check: (r)=>(!r)
});

tryConfirm({
    n: "delete key t3 from previous test",
    x: W.key("t3"),
    f: "del",
    check:(r)=>(r),
    g: "exists",
    confirm: (r)=>(!r)
});

tryConfirm({
    n: "exists t7 yields 1",
    x: W.key("t7"),
    i: "the  purple unicorns jumped over a harvest moon",
    f: "exists",
    check: (r)=>(r===1)
});

/* async test for t8 to test expire had issues */

tryConfirm({
    n: "getrange t9 0 2 yields foo",
    x: W.key("t9"),
    i: "foobar",
    f: "getRange",
    params: [0,2],
    check: (r)=>(r==='foo')
});

tryConfirm({
    n: "getSet t10 fizzbuzz yields old value foobar, sets fizzbuzz",
    x: W.key("t10"),
    i: "foobar",
    f: "getSet",
    p: "fizzbuzz",
    check: (r)=>(r==="foobar"),
    g: "get",
    confirm: (r)=>(r==="fizzbuzz")
});

tryConfirm({
    n: "incr t11 yields 56",
    x: W.key("t11"),
    i: 55,
    f: "incr",
    check: (r)=>(r===56),
    g: "get",
    confirm: (r)=>(r===56)
});

tryConfirm({
    n: "incr t12 -40 yields 60",
    x: W.key("t12"),
    i: 100,
    f: "incrBy",
    p: -40,
    check: (r)=>(r===60),
    g: "get",
    confirm: (r)=>(r===60)
});

tryConfirm({
    n: "incr t13 2.25 yields 3.5",
    x: W.key("t12"),
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
    x: W.key("t14"),
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
    x: W.key("t15"),
    i: 55,
    f: "setnx",
    p: -23,
    check: (r)=>(r===0),
    g: "get",
    confirm: (r)=>(r===55)
});

tryConfirm({
    n: "setnx t16 to random number succeeds, as t16 does not exist",
    x: W.key("t16"),
    f: "setnx",
    p: Math.random(),
    check: ()=>(true),
    g: "get",
    confirm: same
});


tryConfirm({
    n: "setRange t17 3 bazz yields 7 and sets t17 to foobazz",
    i: "foobar",
    x: W.key("t17"),
    f: "setRange",
    params: [3,'bazz'],
    check: (r)=>(r===7),
    g: "get",
    confirm: (r)=>(r==="foobazz")
});

tryConfirm({
    n: "strlen t18 yields 10",
    i: "0123456789",
    x: W.key("t18"),
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
    x: W.hash("t20"),
    f: "set",
    p: {foo:"bar",baz:3},
    check: r0,
    g: "getAll",
    confirm: same
});

tryConfirm({
    n: "set a Hash to some other fields, check that old fields are gone, only new fields present",
    x: W.hash("t20"),
    f: "set",
    p: {"crazy": "Larry", "mean": "Moe", "funny": "Curly"},
    check: r0,
    g: "getAll",
    confirm: same
});

tryConfirm({
    n: "del 'mean', check remaining fields",
    x: W.hash("t20"),
    f: "del",
    p: "mean",
    check: (r)=>r===1,
    g: "getAll",
    confirm: (r)=>(r.crazy && r.funny && !r.mean)
});

tryConfirm({
    n: "update hash t20 field z, set to 20, check all fields",
    x: W.hash("t20"),
    f: "update",
    p: {z:20},
    check: r0,
    g: "getAll",
    confirm: (r)=>(r.crazy && r.funny && !r.mean && (r.z===20))
});

tryConfirm({
    n: "incrBy t20 z 5 yields 25",
    x: W.hash("t20"),
    f: "incrBy",
    params: ['z',5],
    check: (r)=>(r===25),
    g: "getAll",
    confirm: (r)=>(r.z===25)
});

tryConfirm({
    n: "incrByFloat t20 z 0.5 yields 25.5",
    x: W.hash("t20"),
    f: "incrByFloat",
    params: ['z', 0.5],
    check: (r)=>(r===25.5),
    g: "getAll",
    confirm: (r)=>(r.z===25.5)
});

tryConfirm({
    n: "keys t20 should include crazy, funny, z",
    x: W.hash("t20"),
    f: "keys",
    check: (r)=>(["crazy","funny","z"].every((k)=>(r.indexOf(k)>=0)))
});

tryConfirm({
    n: "vals t20 should include 25.5, Larry, Curly",
    x: W.hash("t20"),
    f: "vals",
    check: (r)=>([25.5, "Larry","Curly"].every((k)=>(r.indexOf(k)>=0)))
});

tryConfirm({
    n: "len should equal 3",
    x: W.hash("t20"),
    f: "len",
    check: (r)=>(r===3)
});

tryConfirm({
    n: "deleteAll removes t20 hash, getall returns {}",
    x: W.hash("t20"),
    f: "deleteAll",
    check: (r)=>(r===1),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,{},true))
});

/*
 * Lists
 */

tryConfirm({
    n: "set t21 list to [2,7,1,8,2,8,1,8]",
    x: W.list("t21"),
    f: "setAll",
    params: [2,7,1,8,2,8,1,8],
    check: (r)=>(r===8),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,[2,7,1,8,2,8,1,8],true))
});

tryConfirm({
    n: "t21 popTo t22 yields 8, shortens t20 to 2,7,1,8,2,8,1",
    x: W.list("t21"),
    f: "popTo",
    p: "t22",
    check: (r)=>(r===8),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,[2,7,1,8,2,8,1],true))
});

tryConfirm({
    n: "t22 get 0 should yield 8",
    x: W.list("t22"),
    f: "get",
    p: 0,
    check: (r)=>(r===8)
});

tryConfirm({
    n: "t22 pop should yield 8, empty list",
    x: W.list("t22"),
    f: "pop",
    check: (r)=>(r===8),
    g: "len",
    confirm: (r)=>(r===0)
});

tryConfirm({
    n: "t21 insertBefore 1, {z:6} yields 8, getall yields [2,7,{z:6},1,8,2,8,1]",
    x: W.list("t21"),
    f: "insertBefore",
    params: [1, {z:6}],
    check: (r)=>(r===8),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,[2,7,{z:6},1,8,2,8,1],true))
});

tryConfirm({
    n: "t21 insertAfter 8, 'oranges' yields 9, getall yields [2,7,{z:6},1,8,'oranges',2,8,1]",
    x: W.list("t21"),
    f: "insertAfter",
    params: [8, 'oranges'],
    check: (r)=>(r===9),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,[2,7,{z:6},1,8,'oranges',2,8,1],true))
});

tryConfirm({
    n: "t21 remove 8, removes 2 elements, getall yields [2,7,{z:6},1,'oranges',2,1]",
    x: W.list("t21"),
    f: "remove", 
    p: 8,
    check: (r)=>(r===2),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,[2,7,{z:6},1,'oranges',2,1],true))
});

tryConfirm({
    n: "t21 shift yields 2, getAll yields [7,{z:6},1,'oranges',2,1]",
    x: W.list("t21"),
    f: "shift",
    check: (r)=>(r===2),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,[7,{z:6},1,'oranges',2,1]))
});

tryConfirm({
    n: "t21 unshift 99 yields 7, getAll yields [99,7,{z:6},1,'oranges',2,1]",
    x: W.list("t21"),
    f: "unshift",
    p: 99,
    check: (r)=>(r===7),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,[99,7,{z:6},1,'oranges',2,1],true))
});

tryConfirm({
    n: "t21 slice 2,3 yields [{z:6},1] and list unchanged",
    x: W.list("t21"),
    f: "slice",
    params: [2,3],
    check: (r)=>(deepEqual(r,[{z:6},1],true)),
    g: "getAll",
    confirm: (r)=>(deepEqual(r,[99,7,{z:6},1,'oranges',2,1],true)) 
});

tryConfirm({
    n: "t21 trim 3,4 yields ok and list truncated to [1,'oranges']",
    x: W.list("t21"),
    f: "trim",
    params: [3,4],
    check: r0,
    g: 'getAll',
    confirm: (r)=>(deepEqual(r,[1,'oranges'],true))
});

/*
 * Set
 *
 */

tryConfirm({
    n: "rset t30 set [2,3,5,7,7,11,13] yields 6, members yields [2,3,5,7,11,13] ",
    x: W.rset('t30'),
    f: "set",
    params: [2,3,5,7,7,11,13],
    check: (r)=>(r===6),
    g: "members",
    confirm: (r)=>([2,3,5,7,11,13].every((x)=>(r.indexOf(x)>=0)))
});

tryConfirm({
    n: "rset t30 has 6 should yield false",
    x: W.rset('t30'),
    f: "has",
    p: 6,
    check: (r)=>(r===0)
});

tryConfirm({
    n: "rset t30 has 7 should yield true",
    x: W.rset('t30'),
    f: "has",
    p: 7,
    check: (r)=>(r===1)
});

tryConfirm({
    n: "rset t30 remove 13 should remove 1 member",
    x: W.rset('t30'),
    f: "remove",
    p: 13,
    check: (r)=>(r===1),
    g: "getAll",
    confirm: (r)=>([2,3,5,7,11].every((x)=>(r.indexOf(x)>=0)))
});
    
tryConfirm({
    n: "rset t30 add 11 13 should yield 1 (only 13 new)",
    x: W.rset('t30'),
    f: "add",
    params: [11,13],
    check: (r)=>(r===1),
    g: "getAll",
    confirm: (r)=>([2,3,5,7,11,13].every((x)=>(r.indexOf(x)>=0)))
});

tryConfirm({
    n: "rset t30 len should yield 6",
    x: W.rset('t30'),
    f: "len",
    check: (r)=>(r===6)
});

tryConfirm({
    n: "rset t31 set to 5,10,15",
    x: W.rset('t31'),
    f: "set",
    params: [5,10,15],
    check: (r)=>(r===3),
    g: "members",
    confirm: (r)=>([5,10,15].every((x)=>(r.indexOf(x)>=0)))
});

tryConfirm({
    n: "rset t30 withoutSets t31 yields [2,3,7,11,13] and t30 unchanged with [2,3,5,7,11,13]",
    x: W.rset('t30'),
    f: "withoutSets",
    p: "t31",
    check: (r)=>([2,3,7,11,13].every((x)=>(r.indexOf(x)>=0))),
    g: "members",
    confirm: (r)=>([2,3,5,7,11,13].every((x)=>(r.indexOf(x)>=0)))
});

tryConfirm({
    n: "rset t32 fromDiff t30 t31 yields 5 members [2,3,7,11,13]",
    x: W.rset('t32'),
    f: "fromDiff",
    params: ['t30','t31'],
    check: (r)=>(r===5),
    g: "members",
    confirm: (r)=>([2,3,7,11,13].every((x)=>(r.indexOf(x)>=0)))
});

tryConfirm({
    n: "rset t30 intersection t31 yields [5] and t30 unchanged with [2,3,5,7,11,13]",
    x: W.rset('t30'),
    f: "intersection",
    p: "t31",
    check: (r)=>((r.length===1) && (r[0]===5)),
    g: "members",
    confirm: (r)=>([2,3,5,7,11,13].every((x)=>(r.indexOf(x)>=0)))
});

tryConfirm({
    n: "rset t33 fromIntersection t30 t31 yields 1 member [5]",
    x: W.rset('t33'),
    f: "fromIntersection",
    params: ['t30','t31'],
    check: (r)=>(r===1),
    g: "members",
    confirm: (r)=>( (r.length===1) && (r[0]===5) )
});

tryConfirm({
    n: "rset t30 union t31 yields [2,3,5,7,10,11,13,15] and t30 unchanged with [2,3,5,7,11,13]",
    x: W.rset('t30'),
    f: "union",
    p: "t31",
    check: (r)=>([2,3,5,7,10,11,13,15].every((x)=>(r.indexOf(x)>=0))),
    g: "members",
    confirm: (r)=>([2,3,5,7,11,13].every((x)=>(r.indexOf(x)>=0)))
});

tryConfirm({
    n: "rset t34 fromUnion t30 t31 yields 8 members [2,3,5,7,10,11,13,15]",
    x: W.rset('t34'),
    f: "fromUnion",
    params: ['t30','t31'],
    check: (r)=>(r===8),
    g: "members",
    confirm: (r)=>([2,3,5,7,10,11,13,15].every((x)=>(r.indexOf(x)>=0)))
});


tryConfirm({
    n: "rset t34 moveTo t33 2 yields 1, members [3,5,7,10,11,13,15]",
    x: W.rset('t34'),
    f: "moveTo",
    params: ['t33',2],
    check: (r)=>(r===1),
    g: 'members',
    confirm: (r)=>( (r.indexOf(2)===-1) && ([3,5,7,10,11,13,15].every((x)=>r.indexOf(x)>=0)))
});

tryConfirm({
    n:"t33 members should be [2,5]",
    x: W.rset('t33'),
    f: "members",
    check: (r)=>( (r.length===2) && ([2,5].every((x)=>r.indexOf(x)>=0)))
});

tryConfirm({
    n: "t33 pop should be 2 or 5 leaving 1 member",
    x: W.rset('t33'),
    f: "pop",
    check: (r)=>( (r===2) || (r===5) ),
    g: "len",
    confirm: (r)=>(r===1)
});

tryConfirm({
    n: "t34 sampleWithReplacement 20 picks 20 items and t34 unchanged",
    x: W.rset('t34'),
    f: "sampleWithReplacement",
    p: 20,
    check: (r)=>( r.length === 20 ),
    g: "getAll",
    confirm: (r)=>( (r.length===7) && ([3,5,7,10,11,13,15].every((x)=>r.indexOf(x)>=0)))
});

tryConfirm({
    n: "t34 sampleSubset 20 picks 7 items because only 7 items in set and t34 unchanged",
    x: W.rset('t34'),
    f: "sampleSubset",
    p: 20,
    check: (r)=>( (r.length===7) && ([3,5,7,10,11,13,15].every((x)=>r.indexOf(x)>=0))),
    g: "getAll",
    confirm: (r)=>( (r.length===7) && ([3,5,7,10,11,13,15].every((x)=>r.indexOf(x)>=0)))
});


