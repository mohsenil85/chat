define(function(require){
  "use strict";
  var _ = require( 'underscore'),
  Backbone = require( 'backbone'),
  io = require('io')

  var ChatModel = Backbone.Model.extend({

    initialize : function(options){
      var messages = [];
      this.socket = io.connect('http://localhost:7000');
      this.socket.on('message', function(data){
        console.log('message');
        console.log(data);
      });

      this.socket.on('send', function(data){
        console.log('send');
        console.log(data);
      });
    },
    message : function(){

      this.socket.on('send', function(data){
        console.log(data);
      })
    },
    send : function(){
      this.socket.emit('send',  {hello:"world "});
    },
    test: function(){
      console.log('test');
    }

  });
  return ChatModel;
});
