// Setup basic express server
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected on :', socket.id);
});

io.on('connection', function(socket){
  socket.on('chatMessage', function(msg){
    console.log("chatMessage :", msg.name,msg.chat);
    io.emit('chatMessage', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
