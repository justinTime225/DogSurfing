angular.module('dogSurfing')
.controller('profileController', function($scope, dataFactory){
  $scope.getProfile = dataFactory.currentProfile();
  $scope.events = $scope.getProfile.events;
  $scope.saveCalendar = function() {
    var eventObj = {eventArray: $scope.events};
    // go to db and modify the events array (replace it with $scope.savedEvents)
    dataFactory.updateCalendar($scope.getProfile.email, eventObj);
  };
  $scope.dateClick = function(a) {
    $scope.title = $scope.title || 'Available';
    var event = {
      title: $scope.title,
      date: new Date([a.year, a.month + 1, a.day])
    };
    a.event = event;
    $scope.events.push(event);
    $scope.title = '';
  };
  $scope.eventClick = function(a) {
    for (var i = 0; i < $scope.events.length; i++) {
      if (a.event === $scope.events[i]) {
        $scope.events.splice(i, 1);
      }
    }
    delete a.event;
  };
  $scope.calendarOptions = {
    defaultDate: new Date(), //"2016-4-13",
    minDate: new Date(2010, 1, 1),
    maxDate: new Date([2020, 12, 31]),
    dayNamesLength: 3, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
    multiEventDates: true, // Set the calendar to render multiple events in the same day or only one event, default is false
    maxEventsPerDay: 1, // Set how many events should the calendar display before showing the 'More Events' message, default is 3;
    eventClick: $scope.eventClick,
    dateClick: $scope.dateClick
  };
  $scope.createdMap = false;
  $scope.createMap = function (){
    if ($scope.createdMap === true){
    return      
    } else { 
      $scope.map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: $scope.getProfile.location.lat, lng: $scope.getProfile.location.lng},
              zoom: 14
            });
      $scope.marker = new google.maps.Marker({
        position: {lat: $scope.getProfile.location.lat, lng: $scope.getProfile.location.lng},
        map:$scope.map         
            });
      $scope.createdMap = true;      
    }
  };

});

