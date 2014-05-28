define(function(require){
    "use strict";
    var _ = require( 'underscore'),
    Backbone = require( 'backbone'),
    UserModel = require( 'models/userModel')

    var SessionModel = Backbone.Model.extend({
        initialize : function(options){
            var options = options || {};
            var that = this;
        },
        urlRoot : 'http://localhost:7000/session',
        login: function(creds){
            var that = this;
            this.save(creds, {
                error: function(model, response){
                    if (response.status == 200){
                        console.log(that);
                    } 
                }

            });
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
    return new SessionModel;
});
