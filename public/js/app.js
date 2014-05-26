define(function (require) {

  "use strict";

  var $             = require('jquery'),
      _             = require('underscore'),
      Backbone      = require('backbone'),
      router    = require('router')

    var initialize = function(){
      router.initialize();

    }
    return {
        initialize: initialize
    };
});
