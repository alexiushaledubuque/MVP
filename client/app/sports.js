/*====================
 * Heart of the app
 *===================*/

angular.module('app.sports', [])
.controller('mvpCtrl1', function($scope, $window, $location, Sport){
  $scope.clubs = {};
  $scope.cities = {};

  $scope.getSportData = function(sportChoice){
    console.log('STARTED GET SPORT DATA====>', sportChoice);
    Sport.getData(sportChoice)
      .then(function(response) {
        console.log('RESPONSE DATA====> ', response);
        $scope.clubs = response["teams"];
        console.log('GET DATA====>', $scope.clubs);
        var Cities = collectCityNames(response["teams"]);
        console.log('GET CITIES====>', Cities);
      }, function error(error) {
        console.log('FAILED TO GET DATA====> ', error);
      });
  };

  var collectCityNames = function(data){
    var cityArray = [];

    for (var key in data) {
      cityArray.push(data[key].name);
    }
    return cityArray;
  };



  // getTeamDetails(option)
});
