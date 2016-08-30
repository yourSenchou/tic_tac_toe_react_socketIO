var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('user connected');

  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  })
});


http.listen(1357, function(){
  console.log('listening on *:1357');
});
