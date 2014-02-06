'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp',
  [ 'myApp.filters'
  , 'myApp.services'
  , 'myApp.directives'
  , 'ngCookies'
  , 'ngRoute'
  , 'ngResource'
  , 'textAngular'
  ]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/cms/', {
        templateUrl  : 'templates/cms.jade',
        controller   : HomeCtrl
      })
      .otherwise({
        redirectTo: '/cms/'
      });
    $locationProvider.html5Mode(true)
  }])