angular.module('dogSurfing')
// .controller('createController', function($scope, dataFactory){
//   $scope.gPlaceDetails;
//   $scope.addProfile = function (name, email, image, location, about) {
//     var loc = {
//       location:location,
//       lat:temp.geometry.location.lat(),
//       lng:temp.geometry.location.lng()
//     };
//     dataFactory.addProfile(data)
//       .then(function (result) {
//         console.log("You have a result: " + result);
.controller('createController', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.gPlaceDetails;
    $scope.uploadPic = function(file, name, email, location, about) {
    var temp = $scope.gPlaceDetails;
    var loc = {
      location:location,
      lat:temp.geometry.location.lat(),
      lng:temp.geometry.location.lng()
    };
    file.upload = Upload.upload({
      url: '/profile',
      data: {
        name: name,
        email: email,
        location: loc,
        about: about, 
        file: file}
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    }
}]);