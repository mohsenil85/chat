define(function(require){

    "use strict";

    var $             = require('jquery'),
    _                 = require('underscore'),
    Backbone          = require('backbone'),
    HomePageView      = require('views/homePageView'),
    EditUserView      = require( 'views/editUserView'),
    SignInView        = require( 'views/signInView'),
    ChatView          = require( 'views/chatView'),
    HeaderView        = require('views/headerView'),
    FooterView        = require('views/footerView')


    var MainRouter = Backbone.Router.extend({
        routes: {
            '' : 'home',
            'new' :'editUser',
            'auth' :'authUser',
            'chat' :'userChat'

        }
    });
    var initialize = function(){

        this.headerView = new HeaderView();
        $('.header').html(this.headerView.render());

        this.footerView = new FooterView();
        $('.footer').html(this.footerView.render());

        var router = new MainRouter();

        router.on('route:editUser', function(){
            var editUserView = new EditUserView({
                router: router
            });
            editUserView.render();
        })
        router.on('route:home', function(){
            var homePageView = new HomePageView({
                router: router
            });
            homePageView.render();
        })
        router.on('route:authUser', function(){
            var signInView = new SignInView({
                router: router
            });
            signInView.render();
        })
        router.on('route:userChat', function(){
            var chatView = new ChatView({
                router: router
            });
            chatView.render();
        })

    };
    return {
        initialize: initialize

    };
});
