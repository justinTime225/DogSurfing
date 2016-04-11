angular.module('dogSurfing')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'app/components/main/main.html',
        controller: 'mainController' 
      })
      .state('listings', {
        url:'/listings',
        templateUrl: 'app/components/listings/listings.html',
        controller: 'listingsController'
      })
      .state('profile', {
        url:'/profile',
        templateUrl: 'app/components/profile/profile.html',
        controller: 'profileController'
      })
      .state('create', {
        url:'/create',
        templateUrl: 'app/components/create/create.html',
        controller: 'createController'
      })
      .state('addListing', {
        url: '/addListing',
        templateUrl: 'app/components/addListing/addListing.html',
        controller: 'addListingController'
      })
  }])