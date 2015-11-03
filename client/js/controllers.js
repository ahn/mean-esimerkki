var esimerkkiControllers = angular.module('esimerkkiControllers', []);

esimerkkiControllers.controller('EtusivuController', ['$scope', 'User',
  function($scope, User) {
    $scope.users = User.query();
  }]
);
