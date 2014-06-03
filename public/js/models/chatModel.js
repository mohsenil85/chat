define(function(require){
  "use strict";
  var _ = require( 'underscore'),
  Backbone = require( 'backbone'),
  io = require('io')

  var ChatModel = Backbone.Model.extend({

    initialize : function(options){
      this.options = options || {};
      var that = this;
      this.messages = [];
      this.socket = io.connect('http://localhost:7000');
      this.socket.on('message', function(data){
        console.log('message');
        console.log(data);
      });
      this.socket.on('chatBack', function(data){
        that.messages.push(data);
      });

      this.socket.on('send', function(data){
        console.log('send');
        console.log(data);
      });
    },
    display : function(data){
        console.log(data);
    },
    message : function(){

      this.socket.on('send', function(data){
        console.log(data);
      })
    },
    send : function(uName, msg){
        var message = {
            name : uName,
            mesg : msg
        };
      this.socket.emit('send',  message);
    },
    test: function(){
      console.log('test');
    }

  });
  return ChatModel;
});
