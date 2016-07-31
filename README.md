webdismay
=========
[![Build Status](https://travis-ci.org/DrPaulBrewer/webdismay.svg?branch=master)](https://travis-ci.org/DrPaulBrewer/webdismay)

Disturbingly open browser-side middleware for webdis-redis stack.  

Access webdis/redis functionality and models from the browser-side via `Promises`

##Status

* This is an early release with minimal actual use in production. 
* End-to-end testing of many javascript wrappers to webdis/redis backend functionality is perfomed, and travis-ci actually spins up webdis/redis docker containers and does over 50 tests as part for our "build passing" badge.  
* Webdismay uses webdis, and not all redis database functionality is present in webdis.  Redis MULTI/EXEC is not supported.
* An ES6 `Promise` is returned for all requests. There is a generic request function from which you can try any redis commands, or you can use the provided classes where functionality is reorganized.
* Classes exist for key-based commands (Key), hashes (Hash), lists (List), and sets (Rset). 
* Javascript-familiar idioms are used in these classes, so someone new to redis can use .shift or .pop in List from JavaScript without having to know the redis details, such as knowing a .shift is a redis LPOP and a .pop is a redis RPOP.  For those that are already very familiar with redis, you can use the generic `request` function to access any redis functionality available through webdis, not limited to the functionality wrapped here by webdismay. Note that the corresponding redis command for each webdismay class method is provided in the ESDOC documentation.
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

###Back-end pre-requisites: 
* redis
* webdis

###Creating a back-end quickly with Docker and Nginx reverse-proxy

####Docker

My docker container for webdis should block most redis admin commands, such as the database deleting `FLUSHDB`, but 
an attacker can still list all of the redis keys and delete them one at a time.

    docker run -v /var/local/data:/data --name "red" -d redis redis-server --appendonly yes
    docker run -d -p 127.0.0.1:7379:7379 --link red:redis drpaulbrewer/webdis

####Nginx

To redirect POST / to the back-end, the Nginx host file in `/etc/nginx/sites-enabled/` could include these stanzas:

     upstream webdis {
       server 127.0.0.1:7379;
     }
     
     server {
     
         listen NNN.NNN.NNN.NNN:80;  # replace with your ip address
            server_name your.name.com; # replace with your domain name
            access_log "off";  # optionally turn access logs off to save disk space
            root /path/to/your/html/files;    
            index index.html;  
    
    
            location / {
                    auth_basic "Login";  # only if using http basic auth
                    auth_basic_user_file path/to/http/passwd/file; # only for http basic auth
                    expires off;  # turns off expires headers
                    limit_except GET {  
                                   auth_basic "Login"; # only if using http basic auth
                                   auth_basic_user_file path/to/http/passwd/file; # only for http basic auth 
                                   proxy_pass http://webdis; # sends POST and PUT (non-GET) to webdis
                    }
            }
    }


###Simplest Example App code (ES6):

Babel and jspm would be needed to transpile and package this example for most older browsers.

```js
import 'whatwg-fetch'; // polyfills window.fetch
import * as W from 'webdismay'; // Promises interface to webdis fetch:post to "/" 
```

###Playing around with some basic functions in a chrome browser dev window:

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

###PUT and Binary blob upload
Did you know that, given available memory, [redis can store around 512MB in a single value](http://redis.io/topics/data-types)?  

This capability is also explored here, but involves a bit more complexity and uncertainity than optimal. 

If you redirect HTTP `PUT /` to the back-end, webdismay will pass a PUT file upload to webdis/redis when a `Blob` is passed 
to webdismay in Javascript as the data parameter of a `SET` or similar redis command.  Unfortunately, as of July 2016, 
it is not entirely clean or certain.  You can set a key to the binary content of a file, but fetching the binary content back
into the browser (or another browser) typically is truncated or otherwise does not function properly.    

To export the stored binary data back out of webdis, the best results have been with
     
     curl http://webdis.ip.addr:port/GET/somekey.raw >somekey.ext
     
where `ext` is a placeholder for the correct extension for the raw binary data (i.e., zip, png, jpg), e.g.

     curl http://127.0.0.1:7379/GET/upload12345.raw > upload12345.zip
     
Note: Without `.raw`, the binary data tends to be truncated. 

Getting nginx to play along seems to depend on disabling the `Connection: Close` header in any forwarded upstream
requests.  Here is a configuration for attaching a webdis back end running on localhost to an internal (non-public) site
running on the LAN at 192.168.1.10;  this can be combined with some of the http basic auth listed above for additional access
control on a public ip.  

```
upstream webdis {
   server 127.0.0.1:7379;
}


server {
       listen 192.168.1.10:80;
       root /var/web/192.168.1.10;
       index index.html;
       client_max_body_size 1000M;
       proxy_http_version 1.1;
       proxy_set_header Connection "";
       location / {
           autoindex on;
           limit_except GET {  
                    proxy_pass http://webdis; # sends POST and PUT (non-GET) to webdis
                }
       }
}
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

