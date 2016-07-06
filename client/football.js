// app2.controller('ctrl1', function($scope){
//   $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
//   $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);
// });

// app2.controller('badCtrl', function($scope){
//   var badFeelings = ['Disregarded', 'Unimportant', 'Rejected', 'Powerless'];
//   $scope.bad = badFeelings[Math.floor((Math.random() * 4))];
// });

// app2.controller('goodCtrl', function($scope){
//   var goodFeelings = ['Pleasure', 'Awesome', 'Lovable', 'Inner Peace'];
//   $scope.good = goodFeelings[Math.floor((Math.random() * 4))]; // indexes change to display different moods
// });


angular.module('mvpApp1', [])    
    .controller('mvpCtrl1', function($scope, $http) {
      $scope.teams = {};
      $scope.bteams = {};
      $scope.bkteams = {};
      $scope.hteams = {};

      $scope.getFootballData = function(){
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
        }, function error(error) {
            console.log(error);
        });
      };

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

      $scope.getBasketballData = function(){
        $http({
          "method": "GET",
          "url": "https://www.stattleship.com/basketball/nba/teams",
          "headers": {
           "content-type": "application/json",
           "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
           "accept": "application/vnd.stattleship.com; version=1",
           "cache-control": "no-cache"
          }
        }).then(function mySucces(response) {
            $scope.bteams = response.data["teams"];
            console.log(response.data);
        }, function error(error) {
            console.log(error);
        });
      };

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
});
