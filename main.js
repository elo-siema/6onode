var SockJS = require('sockjs-client');
var sockjs_url = "http://server.6obcy.pl:7001/echoup"

//console.log(SockJS);
var protocols = ['websocket', 'xhr - streaming', 'iframe - eventsource', 'iframe - htmlfile', 'xhr - polling', 'iframe - xhr - polling', 'xdr - streaming', 'xdr - polling'];
console.log(protocols);

var sockjs = new SockJS(sockjs_url, null, {
    protocols_whitelist: protocols,
    transports: protocols
});
console.log('Connecting...');
sockjs.onopen    = function()  {
  console.log('Connected.');

  };
sockjs.onmessage = function(e) {console.log(e.data);};
sockjs.onerror = function(e) {console.log(e.data);};
sockjs.onclose   = function()  {console.log('Closing Connection.');};

console.log(sockjs.readyState);

console.log('Sending to server...');



/*
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });

    function sendNumber() {
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});

client.connect('http://server.6obcy.pl:7017/echoup/013/y64q_cnf/websocket', 'Sec-WebSocket-Protocol');*/
