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
}

QUnit.test("set Key test123 to 42", function(assert){
    assert.expect(1);
    const done = assert.async();
    (new W
     .Key('test123')
     .set(42)
     .catch(function(e){
	 console.log("promise threw error caught in catch:"+e);
         assert.ok(false, 'promise resolved to error:'+e);
         done();
     })
     .then(function(result){
         assert.ok(result && result[0], 'promise resolved to array with true as 1st element');
         done();
     })
    );
});

