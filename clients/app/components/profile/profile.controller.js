angular.module('dogSurfing')
.controller('profileController', function($scope, dataFactory){
  $scope.getProfile = dataFactory.currentProfile();
  console.log($scope.getProfile);

});