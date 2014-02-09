'use strict';

angular.module('myApp')
  .controller('HomeCtrl', function ($scope, ReviewFactory, $window, $timeout) {
    $scope.count = 0
    $scope.reviews = []
    $scope.canLoad = true
    $scope.maxItems = 1000

    $scope.addReviews = function () {
      $scope.canLoad = false
      var limit = 3
      $scope.count += limit
      ReviewFactory.query({offset: $scope.reviews.length, limit: limit}, function (data, responseHeaders) {
        if(data.length){
          $scope.reviews = $scope.reviews.concat(data)
          $scope.canLoad = true
        } else {
          $scope.canLoad = false
        }
      })
    }
    $scope.addReviews()

    $scope.pageHeight = $window.innerHeight + 'px'
  })