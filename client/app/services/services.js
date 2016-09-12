angular.module('app.services', [])

.factory('Sport', function($http){

  var getData = function(reqType) {
    console.log("STARTING HTTP GET REQUEST====>");
    return $http({
      "method": "GET",
      "url": "https://www.stattleship.com/" + reqType,
      "headers": {
       "content-type": "application/json",
       "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
       "accept": "application/vnd.stattleship.com; version=1",
       "cache-control": "no-cache"
      }
    })
    .then(function(res) {
        console.log('ENDING HTTP GET REQUEST====>');
        return res.data;
    });
  };

  return {
    getData: getData
  };
});

// angular.module('app', [])
//     .controller('mvpCtrl1', function($scope, $http) {
//       $scope.teams = {};
//       $scope.bteams = {};
//       $scope.bkteams = {};
//       $scope.hteams = {};
//
//       $scope.getFootballData = function(){
//         $http({
//           "method": "GET",
//           "url": "https://www.stattleship.com/football/nfl/teams",
//           "headers": {
//            "content-type": "application/json",
//            "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
//            "accept": "application/vnd.stattleship.com; version=1",
//            "cache-control": "no-cache"
//           }
//         }).then(function mySuccess(response) {
//             $scope.teams = response.data["teams"];
//         }, function error(error) {
//             console.log(error);
//         });
//       };
//
//       $scope.getBaseballData = function(){
//         $http({
//           "method": "GET",
//           "url": "https://www.stattleship.com/baseball/mlb/teams",
//           "headers": {
//            "content-type": "application/json",
//            "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
//            "accept": "application/vnd.stattleship.com; version=1",
//            "cache-control": "no-cache"
//           }
//         }).then(function mySucces(response) {
//             $scope.bteams = response.data["teams"];
//             console.log(response.data);
//         }, function error(error) {
//             console.log(error);
//         });
//       };
//
//       $scope.getBasketballData = function(){
//         $http({
//           "method": "GET",
//           "url": "https://www.stattleship.com/basketball/nba/teams",
//           "headers": {
//            "content-type": "application/json",
//            "authorization": "Token token=88e78b68639eefde51d4f67c89e97735",
//            "accept": "application/vnd.stattleship.com; version=1",
//            "cache-control": "no-cache"
//           }
//         }).then(function mySucces(response) {
//             $scope.bteams = response.data["teams"];
//             console.log(response.data);
//         }, function error(error) {
//             console.log(error);
//         });
//       };

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
// });
