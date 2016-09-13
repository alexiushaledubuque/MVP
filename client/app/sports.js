/*====================
 * Heart of the app
 *===================*/

angular.module('app.sports', [])
.controller('mvpCtrl1', function($scope, $window, $location, Sport){
  $scope.clubs = {};
  $scope.cities = [];
  $scope.selectedItem;

  $scope.getSportData = function(sportChoice){
    console.log('STARTED GET SPORT DATA====>', sportChoice);
    Sport.getData(sportChoice)
      .then(function(response) {
        console.log('RESPONSE DATA====> ', response);
        $scope.clubs = response["teams"];
        console.log('GET DATA====>', $scope.clubs);
        collectCityNames(response["teams"]);
        console.log('GET CITIES====>', $scope.cities);
      }, function error(error) {
        console.log('FAILED TO GET DATA====> ', error);
      });
  };

  var collectCityNames = function(data){
    for (var key in data) {
      $scope.cities.push({name: data[key].name});
    }
  };

  $scope.dropBoxItemSelected = function(item){
    $scope.selectedItem = item;



  }

  // getTeamDetails(option)
});
