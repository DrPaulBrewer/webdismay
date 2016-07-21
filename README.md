webdismay
=========
Disturbingly open browser-side middleware for webdis-redis stack.  

Access webdis/redis functionality and models from the browser-side via `Promises`

##Status

* This is an early pre-release.  
* There is a generic request function that should return a `Promise` for data from most webdis-supported functionality.
* Classes exist for key-based commands (KeyAt) and key-based hashes (HashAt) 
* Currently unimplemented in any classes are sort, scan, bitwise operations, sets, sorted sets, lists, hyperloglog.
* My time to develop this fully may be limited; I am tinkering with this primarily as a placeholder for an API.  
* Code contributions or offers to take over this project are encouraged, file an issue to discuss.

##Access Control

The only access controls are those provided by [webdis ACL](https://github.com/nicolasff/webdis#acl) and [redis security](http://redis.io/topics/security), which may require additional work to set up or
simply be insufficient for some applications (e.g. money and e-commerce, pacemakers, nuclear weapons).  When run completely open, anyone can delete the entire database, read any data, or write or alter 
any data.  You must accept all responsibility and consequences for using this software or including it in your work on other systems.  

##window.fetch Polyfill Recommended

To support more browsers, you may need to load this [polyfill for window.fetch](https://github.com/github/fetch) before loading this library.

##Programmer's documentation

Not ready yet.  See source code. 

##Copyright

Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC

##License

The MIT License (MIT)

This software Copyright (c) 2016 Paul Brewer, Economic & Financial Technology Consulting LLC <drpaulbrewer@eaftc.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.