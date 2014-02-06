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

    var access = routingConfig.accessLevels;

    console.log(access)

    $routeProvider.
      when('/cms/', {
        templateUrl  : 'templates/cms.jade',
        controller   : HomeCtrl,
        access       : access.user
      })

      .when('/cms/sign-in', {
        templateUrl:    'templates/login.jade',
        controller:     LoginCtrl,
        access:         access.anon
      })


      .when('/cms/sign-up', {
        templateUrl:    'templates/register.jade',
        controller:     RegisterCtrl,
        access:         access.anon
      })

      .otherwise({
        redirectTo: '/cms/'
      });
    $locationProvider.html5Mode(true)
  }])


.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      $rootScope.error = null;

      if (!Auth.authorize(next.access)) {
        console.log(Auth.isLoggedIn())
        if(Auth.isLoggedIn())               $location.path('/cms/');
        else if(next.access.bitMask === 4 ) $location.path('/cms/');
        else                                $location.path('/cms/sign-in');
      }

    })

}])