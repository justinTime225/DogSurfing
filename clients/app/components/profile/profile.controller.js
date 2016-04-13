angular.module('dogSurfing')
.controller('profileController', function($scope, dataFactory){
  $scope.getProfile = dataFactory.currentProfile();
  console.log($scope.getProfile);

  $scope.dateClick = function() {
    console.log('date clicked');
  };
  $scope.calendarOptions = {
    defaultDate: "2016-4-12",
    minDate: new Date(),
    maxDate: new Date([2020, 12, 31]),
    dayNamesLength: 1, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
    multiEventDates: true, // Set the calendar to render multiple events in the same day or only one event, default is false
    maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
    eventClick: $scope.eventClick,
    dateClick: $scope.dateClick
  };

  $scope.events = [
      {title: 'NY', date: new Date([2015, 12, 31])},
      {title: 'ID', date: new Date([2015, 6, 4])}
  ];


});


// angular.module('dogSurfing')
// .controller('UsersIndexController', ['$scope', function($scope) {
//   // ... code omitted ...
//   // Dates can be passed as strings or Date objects 
//   $scope.calendarOptions = {
//     defaultDate: "2016-10-10",
//     minDate: new Date(),
//     maxDate: new Date([2020, 12, 31]),
//     dayNamesLength: 1, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
//     multiEventDates: true, // Set the calendar to render multiple events in the same day or only one event, default is false
//     maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
//     eventClick: $scope.eventClick,
//     dateClick: $scope.dateClick
//   };

//   $scope.events = [
//       {title: 'NY', date: new Date([2015, 12, 31])},
//       {title: 'ID', date: new Date([2015, 6, 4])}
//     ];
// }]);