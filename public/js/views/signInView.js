define(function(require){

    "use strict";

    var $             = require('jquery'),
    _                 = require('underscore'),
    Backbone          = require( 'backbone'),
    //AuthModel         = require('models/authModel'),
    SignInTemplate    = require('text!../../templates/signIn.html'),
    cookie            = require('cookie'),
    Session           = require('models/session'),
    serializeObject   = require ('serializeObject' )

    var SignInView = Backbone.View.extend({
        initialize : function(options){
            this.options = options || {};
        },
        el: '.page',

        events:{
            'click .auth-button' : 'authUser'
        },

        render : function(options){
            var template = _.template($(SignInTemplate).html());
            this.$el.html(template);
        },

        authUser: function(ev){
            var session = new Session();
            session.login({
                userName: $('#userName').val(),
                password: $('#password').val()
            });
            this.options.router.navigate('', {trigger: true});
        }

    });
    return SignInView ;
});
