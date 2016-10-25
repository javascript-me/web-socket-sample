
var socket = io.connect('http://localhost', {reconnection:false});

var content = document.getElementById("content");

socket.on('news', function (data) {

    console.log(data);

    content.innerHTML = content.innerHTML + JSON.stringify(data, null, 4);

    socket.emit('my other event', {my:"anthony connected... "});

});


