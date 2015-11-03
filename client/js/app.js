'use strict';

var esimerkkiApp = angular.module('esimerkkiApp', [
  'ngRoute',
  'esimerkkiControllers',
  'esimerkkiServices'
]);

esimerkkiApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/etusivu', {
        templateUrl: 'partials/etusivu.html',
        controller: 'EtusivuController'
      }).
      otherwise({
        redirectTo: '/etusivu'
      });
  }
]);