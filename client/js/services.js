

var esimerkkiServices = angular.module('esimerkkiServices', ['ngResource']);

esimerkkiServices.factory('User', ['$resource',
  function($resource) {
    return $resource('/api/user', {}, {
      query: {method: 'GET', isArray: true}
    });
  }
]);