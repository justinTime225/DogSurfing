var mongoose = require('mongoose');
// var restful = require('node-restful');
mongoose.connect('mongodb://localhost/greenfield');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Mongodb connection open');
});

var profileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  about: {
    type: String,
    required: true
  }
});

var postSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// var Car = function(color) {
//   this.color = red;
// };

// exports.myCar = new Car('red');
// a model can only be created if it is given a schema/blueprint
// we are exporting the constructors as .profile and .post
// which contian mongoos methods

// var Car = function(color) {
//   this.color = red;
// };

// exports.myCar = new Car('red');
// a model can only be created if it is given a schema/blueprint
// we are exporting the constructors as .profile and .post
// with mongoos methods


exports.profile = mongoose.model('Profile', profileSchema);
exports.post = mongoose.model('Post', postSchema);



// id
// username
// email
// description
// img
// watching or needing



// username
// description