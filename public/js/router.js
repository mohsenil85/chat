define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require('backbone'),
  HomePageView      = require('views/homePageView'),
  EditUserView      = require( 'views/editUserView'),
  SignInView        = require( 'views/signInView'),
  HeaderView        = require('views/headerView'),
  FooterView        = require('views/footerView')


  var MainRouter = Backbone.Router.extend({
    routes: {
      '' : 'home',
      'new' :'editUser',
      'auth' :'authUser'
    }
  });
  var initialize = function(){

    this.headerView = new HeaderView();
    $('.header').html(this.headerView.render());

    this.footerView = new FooterView();
    $('.footer').html(this.footerView.render());

    var router = new MainRouter();
    var signInView = new SignInView({
      router: router
    });
    var editUserView = new EditUserView({
      router: router
    });
    var homePageView = new HomePageView({
      router: router
    });

   router.on('route:editUser', function(){
      editUserView.render();
    })
   router.on('route:home', function(){
      homePageView.render();
    })
   router.on('route:authUser', function(){
      signInView.render();
    })

  };
  return {
    initialize: initialize

  };
});
