'use strict';

angular.module('myApp.uses', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/when-to-use', {
    templateUrl: 'views/uses/uses.html',
    controller: 'UsesCtrl',
    controllerAs: "_this"
  });
}])

.controller('UsesCtrl', [function() {

}]);