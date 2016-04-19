angular.module('dogSurfing')
.controller('directoryController', function($scope,dataFactory){
  $scope.isAuth = dataFactory.getAuth();
  $scope.logout = function(){
    dataFactory.clearStorage();
    $scope.canEdit = false;
    $scope.isAuth = false;
  };
  $scope.profiles = dataFactory.getProfiles;
});