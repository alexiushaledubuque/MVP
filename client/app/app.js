angular.module('mvpApp1', [])
.config(function($routeProvider, function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mvpCtrl1'
    })
    .otherwise({redirectTo:'/'});
})
