var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();


var connection = require('./db').connection;
var Schema = mongoose.Schema;

var UserSchema = require('./db').UserSchema;
var User = require('./db').User;

router.use(function(req, res, next){
  console.log(req.method + " :  " + req.url);
  console.log(req.body);
  next();
});

router.route('/users')
  .post(function(req, res){
    var user = new User({
      email : req.body.email,
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      age : req.body.age,
      date : req.body.date,
      userName: req.body.userName,
      password: req.body.password
    });
    user.save(function(err){
      if (err) res.send(err);
      res.json({ message: 'User created' });
    });
  })
  .get(function(req, res){
    User.find(function(err, users){
      if (err) res.send(err);
      res.json(users);
    });
  });

router.route('/users/:id')
  .get(function(req, res){
    console.log(req.params.id);
    User.findById(req.params.id, function(err, user){
      if (err) res.send(err);
      res.json(user);
    });
  })
  .put(function(req, res){
    console.log(req.params);
    var id = new mongoose.Types.ObjectId(req.params.id);
    User.findById(id, function(err, user){
      if (err) res.send(err);
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.age = req.body.age;
      user._id = id;
      user.userName = req.body.userName;
      user.password = req.body.password;
      user.save(function(err){
        if (err) res.send(err);
        res.json({message: 'User updated'});
      });
    });
  })
  .delete(function(req, res){
    User.remove({
      _id : req.params.id
    }, function(err, user){
      if (err) res.send(err);
      res.json({message: 'User deleted'});
    });
  });
    
module.exports = router;
