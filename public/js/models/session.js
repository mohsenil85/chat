define(function(require){
  "use strict";
  var _ = require( 'underscore'),
  Backbone = require( 'backbone')

  var SessionModel = Backbone.Model.extend({
    initialize : function(){
      var that = this;
    },
   defaults : {
     loggedIn : false,
     id : null
   },
    urlRoot : 'http://localhost:7000/session',
    login: function(creds){
      this.save(creds);
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
