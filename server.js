
var app = require('express')();

var server = require('http').Server(app);

var io = require('socket.io')(server);

server.listen(80);

io.on('connection', function (socket) {

    console.log("someone connected. ");

    socket.emit('news', {hello: 'world'});

    socket.on('my other event', function (data) {
        console.log(data);
    });

});
