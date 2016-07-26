webdismay
=========
[![Build Status](https://travis-ci.org/DrPaulBrewer/webdismay.svg?branch=master)](https://travis-ci.org/DrPaulBrewer/webdismay)

Disturbingly open browser-side middleware for webdis-redis stack.  

Access webdis/redis functionality and models from the browser-side via `Promises`

##Status

* This is an early release with minimal actual use in production. 
* End-to-end testing of many javascript wrappers to webdis/redis backend functionality is perfomed, and travis-ci actually spins up webdis/redis docker containers and does over 50 tests as part for our "build passing" badge.  
* Not all redis database functionality is present.  MULTI, for instance, does not work currently. 
* An ES6 `Promise` is returned for all requests. There is a generic request function from which you can try any redis commands, or you can use the provided classes where functionality is reorganized.
* Classes exist for key-based commands (Key), hashes (Hash), lists (List), and sets (Rset). 
* The classes are organzied around more javascript-familiar idioms, so you can use .shift or .pop in List from JavaScript without translating a .shift to a redis LPOP and a .pop to a redis RPOP.  
* Documentation explains clearly which redis command is called for each class method.
* Currently unimplemented in any classes are sort, scan, bitwise operations, sorted sets, hyperloglog.
* My time to develop this further is limited; I am tinkering with it primarily as a placeholder and for data storage in private tools
* Code contributions are encouraged and will be acknowledged, but file an issue to discuss -- espeically before any massive undertaking.

##Access Control

The only access controls are those provided by [webdis ACL](https://github.com/nicolasff/webdis#acl) and [redis security](http://redis.io/topics/security),
which may require additional work to set up or simply be insufficient for some applications (e.g. some kinds of public facing sites,
money and e-commerce, pacemakers, nuclear weapons).  When run completely open, anyone can delete the entire database, 
read any data, or write or alter  any data.  You must accept all responsibility and consequences for using this software
or including it in your work on other systems.  

##window.fetch Polyfill Recommended

To support more browsers, you may need to load this [polyfill for window.fetch](https://github.com/github/fetch) before loading this library.

##Programmer's documentation

See the [documentation for webdismay hosted at ESDoc](https://doc.esdoc.org/github.com/DrPaulBrewer/webdismay/)

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
new W.keysMatching("*").then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 ["foo", "test123", "paul-1", "hello"]
new W.keysMatching("").then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 []
new W.keysMatching().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 ["foo", "test123", "paul-1", "hello"]
new W.keysMatching("*e*").then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM796:1 ["test123", "hello"]
```

Automagical JSON serialization/de-serialization done in preProcessing/postProcessing seems to work.
It can be turned off or altered by using the `configure` function and setting your own preProcessing/postProcessing.

```
t = W.key("t");
t.set([{"R":"Trump"},{"D":"Clinton"}]).then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM3132:1 [true, "OK"]
t.get().then(con);
--> Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
--> VM3132:1 [{"R":"Trump"},{"D":"Clinton"}]
```

##Copyright

Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC

##License

The MIT License (MIT)

This software Copyright (c) 2016 Paul Brewer, Economic & Financial Technology Consulting LLC <drpaulbrewer@eaftc.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

##Trademarks and relationship to other projects

Redis[tm] is a trademark of Salvatore Sanfilippo, for database software and related products and services.

Webdis is an open source project of Nicolas Favre-Felix, providing an HTTP and Websocket interface to a Redis server instance.

Webdismay is not officially associated with either the redis or webdis effort and is an independent 3rd party library for sending commands from javascript to redis, through webdis, and receiving responses.

