angular.module('dogSurfing')
.controller('profileController', function($scope, dataFactory, profileFact){
  $scope.getProfile = dataFactory.currentProfile();
  console.log($scope.getProfile.email);
  $scope.events = [
    {title: 'Available', date: new Date([2016, 4, 21])},
    {title: 'Available', date: new Date([2016, 4, 4])}
  ];
  $scope.saveCalendar = function() {
    console.log('save Calendar');
    var eventObj = {eventArray: $scope.events};
    // go to db and modify the events array (replace it with $scope.savedEvents)
    profileFact.updateData($scope.getProfile.email, eventObj);
  };
  $scope.dateClick = function(a) {
    // send the event object to db
    var event = {
      title: 'Available',
      date: new Date([a.year, a.month + 1, a.day])
    };
    a.event = event;
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
  // when it fetches data load up the events in $scope.events
  
  // get
});

angular.module('dogSurfing')
.factory('profileFact', function($http) {
  var getData = function() {
    // fetch all data and populate events before page loads
    return $http.get('/profiles')
    .then(function(res) {
      console.log(res.data);
      return res.data;
    });
  };
  var updateData = function(email, obj) {
    // go find user by their email and replace their events prop
    console.log(email);
    console.log(obj);
    return $http.post('/profiles/:' + email, obj)
    .then(function(res) {
      console.log(res.data);
      // getData() // call get data after db is modified
    });
  };
  return {
    getData: getData,
    updateData: updateData
  };
});
