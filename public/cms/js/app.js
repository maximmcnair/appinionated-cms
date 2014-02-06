'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp',
  [ 'ngCookies'
  , 'ngRoute'
  , 'ngResource'
  , 'textAngular'
  , 'angularFileUpload'
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