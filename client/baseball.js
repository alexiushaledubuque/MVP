angular.module('mvpApp1', [])

  .controller('mvpCtrl2', function($scope, $http) {
    $scope.baseball = {};

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
            $scope.baseball = response.data;
        }, function error(error) {
            console.log(error);
        });
      };
      
});





