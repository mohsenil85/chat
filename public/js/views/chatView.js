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
      this.chat = this.options.chat;
    },
    el: '.page',

    events:{
      'click .chat-button' : 'sendChat',
      'click .recv-button' : 'recvChat'
    },

    render : function(options){
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
      console.log('sendChat');
      var msg = $('#chat-input').val();
      var uName = this.user.get('userName');
      this.chat.send(uName, msg);
    },
    recvChat: function(ev){
      console.log('recvChat');
      console.log('&&&&&&&&&');
      console.log(this.chat.messages.pop());
    }

  });
  return ChatView ;
});
