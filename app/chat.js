var io = require('socket.io');

io.on('connection', function(socket){
    socket.emit('message', {message: 'welcome to chat'});
    socket.on('send', function(data){
        socket.emit('chatBack', data );
        console.log(data);
        //io.sockets.emit('message', data)
    });
});


module.exports = io;
