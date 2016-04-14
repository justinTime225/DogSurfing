
var obj = require('./mongo');


exports.profile = {
  get: function(email, cb) {
    obj.profile.findOne({email:email}, function(err, data){
      if(err){
        cb(err);
      }
      cb(data);
    });
  },
  getAll: function(cb) {
    obj.profile.find(function(err, data){
      if(err){
        cb(err);
      }
      cb(data);
    });
  },
  post: function(inputObj, cb) {
    // create an instance of a profile so the data pertains to the profile
    // property on obj
    var user = new obj.profile(inputObj);
    //instance of the profile we can save to db
    user.save( function(err, data){
      if(err){
        console.log(err);
      }
      if(data){
        cb('Post successful');
      }
    });
  }
};

exports.post = {
  get: function(cb) {
    //grab records from the database using the find method
    // providing access to this method through post property on the obj
    obj.post.find(function(err, data){
      if(err){
        console.log(err);
      }
      cb(data);
    });
  },
  post: function(inputObj, cb) {
    var post = new obj.post(inputObj);
    post.save(function(err, data){
      if(err){
        console.log(err);
      }
      if(data){
        cb('Post successful');
      }

    });
  }
};



var profile = {
  name: 'larry',
  email: 'larry@gmail.com',
  location: 'orange county',
  image: 'some string',
  about: 'some info about me',
  events: [{
    year: 2016,
    month: 4,
    day: 21,
    event: {
      date: 'Sat Apr 16 2016 00:00:00 GMT-0700 (PDT)',
      title: 'Available'
    }
  }]
};
exports.profile.post(profile, function(data) {
  console.log(data);
});

