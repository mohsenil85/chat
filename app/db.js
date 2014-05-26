var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost/api');
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

var User = mongoose.model('User', UserSchema);

module.exports = {
  connection: connection,
  UserSchema: UserSchema,
  User: User
}
