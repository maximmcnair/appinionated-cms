'use strict';

angular.module('myApp')
.factory('ReviewFactory', function($resource){
  return $resource('/api/review', {},
    { 'get':
      { method: 'GET'
      , isArray: true
      }
    })
})