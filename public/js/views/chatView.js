define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require( 'backbone'),
  ChatTemplate      = require('text!../../templates/chatTemplate.html'),
  UserModel         = require('models/userModel'),
  cookie            = require('cookie'),
  io                = require('io'),
  ChatModel         = require('models/chatModel'),
  serializeObject   = require ('serializeObject' )

  var ChatView = Backbone.View.extend({
    initialize : function(options){
      this.options = options || {};
      this.chat = new ChatModel();
    },
    el: '.page',

    events:{
      'click .chat-button' : 'sendChat',
      'click .recv-button' : 'recvChat'
    },

    render : function(options){
      console.log(this);
      var that = this; 
      var id = $.cookie('id');

      if(id){
        that.user = new UserModel({id: id });
        that.user.fetch({
          success: function(user){
            var template = _.template($(ChatTemplate).html(),
                                      {user: user});
                                      that.$el.html(template);
          }
        })
      } else {
        console.log('other branch hit');
        this.options.router.navigate('', {trigger: true});
      } 
    },

    sendChat: function(ev){
      console.log(this);
      console.log('sendChat');
      //var chat = new ChatModel();
      var msg = $.('#chat-input').val();
      console.log(msg);
      this.chat.send();
    },
    recvChat: function(ev){
      var chat = new ChatModel();
      console.log('recvChat');
      this.chat.message();
    }

  });
  return ChatView ;
});
