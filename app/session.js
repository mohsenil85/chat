var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();

var connection = require('./api');

//mongoose.connect('mongodb://localhost/api');

/*
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: false
  },
   date: { 
     type: Date,
     default: Date.now 
   },
   userName:{
    type: String,
    required: true,
    trim: true
   },
   password : {
     type: String
   }
});

var User2 = mongoose.model('User2', UserSchema);

router.route('/users')
  .post(function(req, res){
    var user = new User2({
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
    User2.find(function(err, users){
      if (err) res.send(err);
      res.json(users);
    });
  });

router.route('/users/:id')
  .get(function(req, res){
    console.log(req.params.id);
    User2.findById(req.params.id, function(err, user){
      if (err) res.send(err);
      res.json(user);
    });
  })
  .put(function(req, res){
    console.log(req.params);
    var id = new mongoose.Types.ObjectId(req.params.id);
    User2.findById(id, function(err, user){
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
    
router.route('/auth/:userName')
  .post(function(req, res){
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
*/
router.route('/')
  .get(function(req, res){ 
    console.log('this');
    res.json({message: "this was hit" });
  });
//app.use('/api', router);
//app.listen(port);


module.exports = router;
