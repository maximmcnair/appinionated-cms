'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp',
  [ 'ngRoute'
  , 'ngResource'
  , 'ngSanitize'
  ]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/', {
        templateUrl  : 'templates/index',
        controller   : 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
    $locationProvider.html5Mode(true)
  }])