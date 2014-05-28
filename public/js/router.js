define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require('backbone'),
  session           = require('models/session'),
  HomePageView      = require('views/homePageView'),
  EditUserView      = require( 'views/editUserView'),
  HeaderView        = require('views/headerView'),
  FooterView        = require('views/footerView')

  var MainRouter = Backbone.Router.extend({
    routes: {
      '' : 'home',
      'new' :'editUser'
    }
  });
  var initialize = function(){

    this.headerView = new HeaderView();
    $('.header').html(this.headerView.render());

    this.footerView = new FooterView();
    $('.footer').html(this.footerView.render());

    var router = new MainRouter();
    var editUserView = new EditUserView({
      router: router,
      session: session
    });
    var homePageView = new HomePageView({
      router: router,
      session: session
    });
   router.on('route:editUser', function(){
      editUserView.render();
    })
   router.on('route:home', function(){
      homePageView.render();
    })


    Backbone.history.start();
  };
  return {
    initialize: initialize

  };
});
