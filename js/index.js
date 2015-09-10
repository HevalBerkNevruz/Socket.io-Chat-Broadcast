var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('/home/heval/socket.io/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.broadcast.emit('hi');
    socket.on('chat message', function(message){
        io.emit('chat message', message);
    });
    socket.on('disconnect',function(){
       console.log('user disconnect');
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});