'use strict';


function HomeCtrl($scope, ReviewFactory) {
  $scope.reviews = ReviewFactory.get({},function (res) {
    // console.log(raps)
  })


  //========================================================
  //  Post Review
  //========================================================
  $scope.postReview = function (data) {
    var newReview = new ReviewFactory(data)
    newReview.$save({}, function (res) {
      console.log('success', res)
      $scope.newReview = ''
      $scope.showAddReviewWidget = false
      $scope.reviews.push(newReview)
    })
  }

  //========================================================
  //  Add review widget
  //========================================================
  $scope.showAddReviewWidget = false
  $scope.updateReview = function (data) {
    var newReview = new ReviewFactory(data)
    newReview.$update({}, function (res) {
      console.log('success', res)
    })
  }
  $scope.triggerAddReviewWidget = function () {
    $scope.showAddReviewWidget = !$scope.showAddReviewWidget
  }

  //========================================================
  //  Open Review
  //========================================================
  $scope.selected = ''

  $scope.openRAP = function (item) {
    // if($scope.selected === item){
    //   $scope.selected = ''
    // } else {
      $scope.selected = item
    // }
  }

  $scope.isSelected = function (item) {
    return $scope.selected == item
  }
}