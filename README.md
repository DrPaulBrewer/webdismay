webdismay
=========
Disturbingly open browser-side middleware for webdis-redis stack.  

Access webdis/redis functionality and models from the browser-side via `Promises`

##Status

* This is an early, untested, pre-release.  
* There is a generic request function that should return a `Promise` for data from most webdis-supported functionality.
* Classes exist for key-based commands (Key) and key-based hashes (Hash) 
* Currently unimplemented in any classes are sort, scan, bitwise operations, sets, sorted sets, lists, hyperloglog.
* My time to develop this fully may be limited; I am tinkering with this primarily as a placeholder for an API.  
* Code contributions or offers to take over this project are encouraged, file an issue to discuss.

##Access Control

The only access controls are those provided by [webdis ACL](https://github.com/nicolasff/webdis#acl) and [redis security](http://redis.io/topics/security),
which may require additional work to set up or simply be insufficient for some applications (e.g. public facing sites,
money and e-commerce, pacemakers, nuclear weapons).  When run completely open, anyone can delete the entire database, 
read any data, or write or alter  any data.  You must accept all responsibility and consequences for using this software
or including it in your work on other systems.  

##window.fetch Polyfill Recommended

To support more browsers, you may need to load this [polyfill for window.fetch](https://github.com/github/fetch) before loading this library.

##Programmer's documentation

Not ready yet.  See source code. 

##Example

Back-end pre-requisites: 
* redis
* webdis

See webdis docs for a quick docker-based solution for getting a dev stack up.

App code:

```js
import 'whatwg-fetch'; // polyfills window.fetch
import * as W from 'webdismay'; // Promises interface to webdis fetch:post to "/" 
```

Playing around with some basic functions in a chrome browser dev window:

```js
con = (x)=>console.log(x);
new W.Key("test123").set('hello, there').then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 [true, "OK"]
t = new W.Key("test123");
--> Key {k: "test123", endPoint: "/"}
t.get().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 hello, there
t.incr().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 [false, "ERR value is not an integer or out of range"]
t.set(1).then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 [true, "OK"]
t.get().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 1
t.incrBy(1).then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 [false, "ERR wrong number of arguments for 'incr' command"]
t.incr().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 2
t.incr().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 3
t.incr().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 4
new W.Generic().keysMatching("*").then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 ["foo", "test123", "paul-1", "hello"]
new W.Generic().keysMatching("").then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 []
new W.Generic().keysMatching().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 ["foo", "test123", "paul-1", "hello"]
new W.Generic().keysMatching("*e*").then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 ["test123", "hello"]
```

Automagical JSON serialization/de-serialization is planned, but isn't quite ready,
nor is there a boolean switch for it yet, and it seems there should be. 

```
t.set([{why:'me'},[42,666],"Donald"]); // this won't work yet because of our internal Array.concat before serialization
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
t.get().then(con); 
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 4  // see!
t.set(JSON.stringify([{why:'me'},[42,666],"Donald"]));  // this will decode to an object, but are we sure the developer wants that?
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
t.get().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 [{"why":"me"},[42,666],"Donald"]  // automagically decoded to object, not string, with internal .then resolvers
```

##Copyright

Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC

##License

The MIT License (MIT)

This software Copyright (c) 2016 Paul Brewer, Economic & Financial Technology Consulting LLC <drpaulbrewer@eaftc.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
