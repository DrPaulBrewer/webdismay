
webdis docs for .json websocket work but finding socket closes in less than 500ms.  

Websocket is also exposed to the broad public and not affected by basic-auth or same-origin-policy.

function testJSON() {
    var jsonSocket = new WebSocket("ws://"+document.location.hostname+"/.json");
    jsonSocket.onclose = function(code,reason){ console.log("CLOSED:"+JSON.stringify(code)+" reason:"+reason); };
    jsonSocket.onopen = function() {
        console.log("JSON socket connected!");
        jsonSocket.send(JSON.stringify(["SET", "hello", "world"]));
        jsonSocket.send(JSON.stringify(["GET", "hello"]));
	setInterval(function(){
	   jsonSocket.send(JSON.stringify(["TIME"]));
        }, 500);
    };
    jsonSocket.onmessage = function(messageEvent) {
        console.log("JSON received:", messageEvent.data);
    };
}
testJSON();






webdis docs for chunked transfer encoding of PUBSUB work behind basic-auth with minimal changes, connections last longer but are still intermittent

var previous_response_length = 0
xhr = new XMLHttpRequest(); xhr.withCredentials=true;
xhr.open("POST", "/", true);
xhr.onreadystatechange = checkData;
xhr.send("SUBSCRIBE/hello");

function checkData() {
    if(xhr.readyState == 3)  {
        response = xhr.responseText;
        chunk = response.slice(previous_response_length);
        previous_response_length = response.length;
        console.log(chunk);
    }
};
undefined
VM3457:12 {"SUBSCRIBE":["subscribe","hello",1]}
VM3457:12 {"SUBSCRIBE":["message","hello","World"]}
VM3457:5 POST http://lab.eaftc.com/ net::ERR_INCOMPLETE_CHUNKED_ENCODING(anonymous function) @ VM3457:5
var previous_response_length = 0
xhr = new XMLHttpRequest(); xhr.withCredentials=true;
xhr.open("POST", "/", true);
xhr.onreadystatechange = checkData;
xhr.send("SUBSCRIBE/hello");

function checkData() {
    if(xhr.readyState == 3)  {
        response = xhr.responseText;
        chunk = response.slice(previous_response_length);
        previous_response_length = response.length;
        console.log(chunk);
    }
};
undefined
VM3458:12 {"SUBSCRIBE":["subscribe","hello",1]}
VM3458:12 {"SUBSCRIBE":["message","hello","on-the-first-of-november-the-world-will-end"]}
VM3458:5 POST http://lab.eaftc.com/ net::ERR_INCOMPLETE_CHUNKED_ENCODING(anonymous function) @ VM3458:5