define(function(require){

  "use strict";

  var $     = require('jquery'),
  _         = require('underscore'),
  Backbone  = require( 'backbone'),
  homePage  = require('text!../templates/homePageTemplate.html'),
  session  = require('models/session'),
  signIn  = require('text!../templates/signIn.html')

  var HomePageView = Backbone.View.extend({
    el: '.page',

    initialize : function(options){
      this.options = options || {};
    },

    render: function (){
      if (session.get('loggedIn')){
        var template = _.template($(homePage).html())
        this.$el.html(template);
      } else {
        var template = _.template($(signIn).html())
        this.$el.html(template);
//        this.options.router.navaigate('', {trigger: true});
      }
    },

    events:{
      'click .signIn' : 'login',
      'click .logout' : 'logout'
    },
    login : function(){
      console.log('about to save....')
      session.login({
      userName: $('#userName').val(),
      password: $('#password').val()
      });
      this.render();
    },
    logout : function(){
      this.options.router.navigate('/new', {trigger: true});
    }
  });

  return HomePageView ;
});
