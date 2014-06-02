define(function (require) {

    "use strict";

    var $             = require('jquery'),
    _             = require('underscore'),
    Backbone      = require('backbone'),
    cookie        = require('cookie'),
    router        = require('router'),
    UserModel          = require('models/userModel')

    var initialize = function(){
        router.initialize();

        if ($.cookie('id')){
            var id = $.cookie('id')
            var user = new UserModel({id: id });
            user.fetch({
                success: function(user){
                    console.log('success');
                    console.log(user);

                }
            });
        } else {
            console.log('no cooks');
        }

        Backbone.history.start();
    }
    return {
        initialize: initialize
    };
});
