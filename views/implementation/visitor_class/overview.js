'use strict';

angular.module('myApp.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'views/overview/implementation.html',
    controller: 'OverviewCtrl',
    controllerAs: "_this"
  });
}])

.controller('OverviewCtrl', [function() {

}]);