angular.module('dogSurfing')
.controller('createController', function($scope, dataFactory){
  $scope.addProfile = function (name, email, image, location, about) {
    var data = {
      name: name,
      email: email,
      image: image,
      location: location,
      about: about
    };
    dataFactory.addProfile(data)
      .then(function (result) {
        console.log("You have a result: " + result);
      });
  };
});