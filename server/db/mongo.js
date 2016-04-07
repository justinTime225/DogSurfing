var mongoose = require('mongoose');
// var restful = require('node-restful');
mongoose.connect('mongodb://localhost/restful');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Mongodb connection open');
});

