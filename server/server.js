var db = require('./db/model');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/clients'));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.get('/profile', function(req, res){
  db.profile.get(function(dataFromDb){
    res.send(dataFromDb);
  });
});

app.get('/post', function(req, res){
  db.post.get(function(dataFromDb){
    res.send(dataFromDb);
  });
});

app.post('/profile', function(req, res){
  db.profile.post(req.body, function(data){
    res.send(data);
  });
});

app.post('/post', function(req, res){
  db.post.post(req.body, function(success){
    res.send(success);
  });
});

app.listen(5000, function(){
  console.log('listining on port 5000');
});


