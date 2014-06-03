var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var io = require('socket.io');

var app = express();
var api = require('./api');
//var chat = require('./chat');
var session = require('./session');

var port = 7000;

app.use(bodyParser());
app.use(cookieParser());
app.use(logger('dev'));

app.use('/api', api);
app.use('/session', session);
app.use(favicon(__dirname + './../public/img/favicon.ico'));
app.use(express.static(__dirname + './../public'));
 
//app.listen(port);

var io = io.listen(app.listen(port));

io.on('connection', function(socket){
  socket.emit('message', {message: 'welcome to chat'});
  socket.on('send', function(data){
  socket.emit('thing', {message: 'thing was recvd'});
  console.log("howdy");
    console.log(data);
    //io.sockets.emit('message', data)
  });
});
