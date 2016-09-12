/*====================
 * App Router
 *===================*/

angular.module('mainApp', [
  'app.services',
  'app.sports',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mvpCtrl1'
    })
    .otherwise({redirectTo:'/'});
})
