
var socket = io.connect('http://localhost', {reconnection:false});

socket.on('news', function (data) {

    console.log(data);
    socket.emit('my other event', {my:"anthony connected... "});

});


