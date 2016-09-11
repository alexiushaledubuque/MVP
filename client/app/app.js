angular.module('app', [
  'app.services',
  'app.football',
  'ngRoute'
])
.config(function($routeProvider, function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mvpCtrl1'
    })
    .otherwise({redirectTo:'/'});
})
