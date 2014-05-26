define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require('backbone'),
  HomePageView      = require('views/homePageView'),
  HeaderView        = require('views/headerView'),
  FooterView        = require('views/footerView')

  var MainRouter = Backbone.Router.extend({
    routes: {
      '' : 'home',
    }
  });
  var initialize = function(){

    this.headerView = new HeaderView();
    $('.header').html(this.headerView.render());

    this.footerView = new FooterView();
    $('.footer').html(this.footerView.render());

    var router = new MainRouter();
    var homePageView = new HomePageView({
      router: router
    });
    router.on('route:home', function(){
      homePageView.render();
    })


    Backbone.history.start();
  };
  return {
    initialize: initialize

  };
});
