angular.module('dogSurfing')
.controller('addListingController', function ($scope, dataFactory){
  $scope.createPost = function(name, email, message) {
    dataFactory.createPost({name: name, email: email, message: message})
    .then(function(res) {
      console.log(res);
    });
  };
});

