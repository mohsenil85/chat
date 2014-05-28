define(function(require){
    "use strict";
    var _ = require( 'underscore'),
    Backbone = require( 'backbone')

    var UserModel = Backbone.Model.extend({

        defaults: {
            session: false
        },
        urlRoot : 'http://localhost:7000/api/users',
        idAttribute : 'id'
    });
    return UserModel;
});
