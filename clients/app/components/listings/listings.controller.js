angular.module('dogSurfing')
  .controller('listingsController', function ($scope, dataFactory){
    $scope.isAuth = dataFactory.getAuth();
    $scope.logout = function(){
    dataFactory.clearStorage();
    $scope.canEdit = false;
    $scope.isAuth = false;
  };
    $scope.getData = function(){
      dataFactory.getListings().then(function(data){
        $scope.listings = data;
      });
    };
    $scope.getData();

  });