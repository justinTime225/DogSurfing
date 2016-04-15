angular.module('dogSurfing')
.factory('dataFactory', function($http) {
  var currentProfile;
  var allProfiles = {};
  var createPost = function(dataObj) {
    return $http.post('/post', dataObj)
    .then(function(result) {
      return result.data;
    });
  };
  var getListings = function(){
    return $http.get('/post')
    .then(function(result){
      return result.data;
    });
  };
  var addProfile = function (dataObj) {
    return $http.post('/profile', dataObj)
      .then(function (result) {
        return result.data;
      });
  };
  var getProfile = function (email){
    return $http.get('/profile/'+ email)
    .then(function(result){
      currentProfile = result.data;
    });
  };
  var getAllProfiles = function (){
    return $http.get('/profiles')
    .then(function(result){
      allProfiles.data = result.data;
    });
  };
  var getCurrent = function(){
    return currentProfile;
  };
  var updateCalendar = function(email, obj) {
    return $http.put('/profile/' + email, obj)
    .then(function(res) {
      return res.data;
    });
  };
  return {
    createPost: createPost,
    getListings:getListings,
    addProfile: addProfile,
    getProfile:getProfile,
    currentProfile:getCurrent,
    getAllProfiles:getAllProfiles,
    getProfiles: allProfiles,
    updateCalendar: updateCalendar
  };
});