angular.module('mvpApp1', [])    
    .controller('mvpCtrl1', function($scope, $http) {
      $scope.teams = {};
      $scope.bteams = {};

      $scope.getData = function(){
        $http({
          "method": "GET",
          "url": "https://www.stattleship.com/football/nfl/teams",
          "headers": {
           "content-type": "application/json",
           "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
           "accept": "application/vnd.stattleship.com; version=1",
           "cache-control": "no-cache"
          }
        }).then(function mySucces(response) {
            $scope.teams = response.data["teams"];
            $scope.league = response.data["league"];;
            $scope.conference = response.data["conference"];;
            $scope.divisions = response.data["divisions"];;
        }, function error(error) {
            console.log(error);
        });
      };

      $scope.getBaseballData = function(){
        $http({
          "method": "GET",
          "url": "https://www.stattleship.com/baseball/mlb/teams",
          "headers": {
           "content-type": "application/json",
           "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
           "accept": "application/vnd.stattleship.com; version=1",
           "cache-control": "no-cache"
          }
        }).then(function mySucces(response) {
            $scope.bteams = response.data;
            console.log(response.data);
        }, function error(error) {
            console.log(error);
        });
      };
});
