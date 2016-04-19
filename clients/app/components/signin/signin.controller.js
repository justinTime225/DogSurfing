angular.module('dogSurfing')
.controller('signInController', function($scope, dataFactory, $window, $state){
  $scope.isAuth = dataFactory.getAuth();
  $scope.logout = function(){
    dataFactory.clearStorage();
    $scope.canEdit = false;
    $scope.isAuth = false;
  };
  $scope.signIn = function (name, pass){
    var temp = {name:name, password:pass};
    dataFactory.signIn(temp).then(function(data){
      console.log(data);
      if (data.token){
        $window.sessionStorage.setItem('dogSurfingToken', data.token);
        $window.sessionStorage.setItem('dogSurfingName', name);
        $state.go('listings');
      }
      
    });
  };
});