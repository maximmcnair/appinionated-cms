'use strict';

angular.module('myApp')
  .controller('HomeCtrl', function ($scope, ReviewFactory) {
    $scope.reviews = ReviewFactory.get({},function (res) {
      console.log($scope.reviews)
    })
  })