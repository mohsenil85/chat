define(function(require){

  "use strict";

  var $     = require('jquery'),
  _         = require('underscore'),
  Backbone  = require( 'backbone'),
  homePage  = require('text!../templates/homePageTemplate.html'),
  signIn  = require('text!../templates/signIn.html')

  var HomePageView = Backbone.View.extend({
    el: '.page',

    initialize : function(options){
      this.options = options || {};
    },

    render: function (){
      if (!this.options.session.get('loggedIn')){
        var template = _.template($(homePage).html())
        this.$el.html(template);
      } else {
        var template = _.template($(signIn).html())
        this.$el.html(template);
      }
    },

    events:{
      'click .view-users' : 'viewUsers',
      'click .new-user' : 'newUser'
    },
    viewUsers : function(){
      this.options.router.navigate('/userlist', {trigger: true});
    },
    newUser : function(){
      this.options.router.navigate('/new', {trigger: true});
    }
  });

  return HomePageView ;
});
