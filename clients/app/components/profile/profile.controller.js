angular.module('dogSurfing')
.controller('profileController', function($scope, dataFactory){
  $scope.getProfile = dataFactory.currentProfile();
  console.log($scope.getProfile);

  $scope.dateClick = function(a) {
    
    // when a date is click add an event to it
    var event = {
      title: 'Available',
      date: new Date([a.year, a.month + 1, a.day])
    };
    a.event = event;
    // console.log(event);
    $scope.events.push(event);
    console.log($scope.events);
  };
  $scope.eventClick = function(a) {
    console.log(a);
    console.log('event click');
    for (var i = 0; i < $scope.events.length; i++) {
      if (a.event === $scope.events[i]) {
        console.log('its a match');
        $scope.events.splice(i, 1);
      }
    }
    console.log($scope.events);
    delete a.event;

  };
  $scope.calendarOptions = {
    defaultDate: new Date(), //"2016-4-13",
    minDate: new Date(2010, 1, 1),
    maxDate: new Date([2020, 12, 31]),
    dayNamesLength: 1, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
    multiEventDates: true, // Set the calendar to render multiple events in the same day or only one event, default is false
    maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
    eventClick: $scope.eventClick,
    dateClick: $scope.dateClick
  };

  $scope.events = [];

});
