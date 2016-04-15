angular.module('dogSurfing')
.controller('createController', function($scope, dataFactory){
  $scope.gPlaceDetails;
  $scope.addProfile = function (name, email, image, location, about) {
    var test = $scope.gPlaceDetails;
    var loc = {
      location:location,
      lat:test.geometry.location.lat(),
      lng:test.geometry.location.lng()
    };
    var data = {
      name: name,
      email: email,
      image: image,
      location: loc,
      about: about
    };
    dataFactory.addProfile(data)
      .then(function (result) {
        console.log("You have a result: " + result);
      });
  };
});