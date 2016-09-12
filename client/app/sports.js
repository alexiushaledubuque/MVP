/*====================
 * Heart of the app
 *===================*/

angular.module('app.sports', [])
.controller('mvpCtrl1', function($scope, $window, $location, Sport){
  $scope.cities = {};
  $scope.ba = {};
  $scope.bk = {};
  $scope.f = {};
  $scope.h = {};

  $scope.getFootballData = function(){
    console.log('STARTED GET FOOTBALL DATA====>');
    Sport.getData('football/nfl/teams')
      .then(function(response) {
        console.log('RESPONSE DATA====> ', response);
        $scope.f = response["teams"];
        console.log('GET DATA====>', $scope.f);
      }, function error(error) {
        console.log('FAILED TO GET DATA====> ',error);
      });
  };
});
      // $scope.getBaseballData = function(){
      //   $http({
      //     "method": "GET",
      //     "url": "https://www.stattleship.com/baseball/mlb/teams",
      //     "headers": {
      //      "content-type": "application/json",
      //      "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
      //      "accept": "application/vnd.stattleship.com; version=1",
      //      "cache-control": "no-cache"
      //     }
      //   }).then(function mySucces(response) {
      //       $scope.bteams = response.data["teams"];
      //       console.log(response.data);
      //   }, function error(error) {
      //       console.log(error);
      //   });
      // };
      //
      // $scope.getBasketballData = function(){
      //   $http({
      //     "method": "GET",
      //     "url": "https://www.stattleship.com/basketball/nba/teams",
      //     "headers": {
      //      "content-type": "application/json",
      //      "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
      //      "accept": "application/vnd.stattleship.com; version=1",
      //      "cache-control": "no-cache"
      //     }
      //   }).then(function mySucces(response) {
      //       $scope.bteams = response.data["teams"];
      //       console.log(response.data);
      //   }, function error(error) {
      //       console.log(error);
      //   });
      // };

      // $scope.getHockeyData = function(){
      //   $http({
      //     "method": "GET",
      //     "url": "https://www.stattleship.com/hockey/nhl/teams",
      //     "headers": {
      //      "content-type": "application/json",
      //      "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
      //      "accept": "application/vnd.stattleship.com; version=1",
      //      "cache-control": "no-cache"
      //     }
      //   }).then(function mySucces(response) {
      //       $scope.bteams = response.data["teams"];
      //       console.log(response.data);
      //   }, function error(error) {
      //       console.log(error);
      //   });
      // };
