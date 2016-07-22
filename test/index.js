/* eslint no-console:off, newline-per-chained-call:off */
/* globals QUnit:true */

import 'whatwg-fetch';
import * as W from "../src/index.js";

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
         t.get().then(
             function(result){
                 assert.ok(result===57, 'get result should equal the set value, 57');
                 return result;
             }
         ).then(done,done);
     }, done)
    );
});
             
           
