var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();

var connection = require('./db').connection;
var UserSchema = require('./db').UserSchema;
var User = require('./db').User;

router.route('/')
  .post(function(req, res){
    console.log(req.body);
    User.findOne({
      userName: req.body.userName, 
      password: req.body.password
    }, function(err, user){
      if(user){
        var editPath = '/#/edit/' + user.id + '/';
        var editPath = '/#/edit/' + user.id + '/';
        console.log(editPath);
        res.clearCookie('id')
        //res.cookie('id', user.id, { path: editPath, httpOnly: false});
        res.cookie('id', user.id)
        res.send(200)
      } else {
        res.send(401)
      }
    });
  });


module.exports = router;
