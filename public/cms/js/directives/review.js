'use strict';

/* Directives */


angular.module('myApp')
  .directive('review', function (ReviewFactory) {
    return {
      restrict: 'E'
    , templateUrl: '/templates/review-edit.jade'
    , link: function (scope, element) {
        scope.updateReview = function (data) {
          var newReview = new ReviewFactory(data)
          newReview.$update({}, function (res) {
            console.log('success', res)
          })
        }
        
      }
    }
  })