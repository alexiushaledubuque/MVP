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
