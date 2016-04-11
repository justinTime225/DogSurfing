angular.module('dogSurfing')
.factory('dataFactory', function($http) {
  var createPost = function(dataObj) {
    return $http.post('/post', dataObj)
    .then(function(result) {
      console.log('result is returned');
      return result.data;
    });
  };
  return {
    createPost: createPost
  };
});