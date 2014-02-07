'use strict';

angular.module('myApp')
  .controller('HomeCtrl', function ($scope, ReviewFactory, $window) {
    $scope.reviews = []
    $scope.canLoad = true
    $scope.maxItems = 1000

    $scope.addReviews = function () {
      console.log('add reviews')
      var newReviews = ReviewFactory.get({},function (res) {
        console.log($scope.reviews)
        $scope.reviews = $scope.reviews.concat(newReviews)
      })
    }
    $scope.addReviews()

    $scope.pageHeight = $window.innerHeight + 'px'
  })