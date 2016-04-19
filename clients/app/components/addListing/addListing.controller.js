angular.module('dogSurfing')
.controller('addListingController', function ($scope, dataFactory){
  $scope.isAuth = dataFactory.getAuth();
  $scope.logout = function(){
    dataFactory.clearStorage();
    $scope.canEdit = false;
    $scope.isAuth = false;
  };
  $scope.createPost = function(name, email, message) {
    dataFactory.createPost({name: name, email: email, message: message})
    .then(function(res) {
      console.log(res);
      $scope.name = '';
      $scope.email = '';
      $scope.message = '';
    });
  };

});

