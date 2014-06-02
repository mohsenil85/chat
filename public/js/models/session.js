define(function(require){
    "use strict";
    var _ = require( 'underscore'),
    Backbone = require( 'backbone'),
    cookie = require( 'cookie')

    var SessionModel = Backbone.Model.extend({
        initialize : function(options){
            var options = options || {};
            var that = this;
        },
        urlRoot : 'http://localhost:7000/session',
        login: function(creds){
            var that = this;
            this.save(creds)
            .error(
                function(){ console.log('hi') }
            );
        },
        logout: function(creds){
            this.destroy({
                success : function(model, resp){
                    model.clear();
                    model.id = null;
                }
            })
        },
        getAuth: function(callback){
            this.fetch({
                success: callback 
            })
        }
    });
    //why returning a new model??
    return SessionModel;
});
