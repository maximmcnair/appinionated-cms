'use strict';


function HomeCtrl($scope, ReviewFactory, $upload) {
  $scope.reviews = ReviewFactory.get({},function (res) {
    // console.log(raps)
  })

  var reviewTemp = {
    title: 'New App Title'
  , review: '<p>Write your review here.</p>'
  , colorBg: 'ffffff'
  , colorText: '454545'
  , images: []
  }

  $scope.newReview = reviewTemp

  //========================================================
  //  Post Review
  //========================================================
  $scope.postReview = function (data) {
    var newReview = new ReviewFactory(data)
    newReview.$save({}, function (res) {
      // console.log('success', res)
      $scope.newReview = reviewTemp
      $scope.showAddReviewWidget = false
      $scope.reviews.push(newReview)
    })
  }

  //========================================================
  //  File Upload
  //========================================================
  $scope.upload = []
  $scope.onFileSelect = function ($files) {
    // loop through files
    for (var i = 0; i < $files.length; i++) {
      // console.log('$files[i]', $files[i])
      // upload file using $upload
      $scope.upload[i] = $upload.upload({
        url: '/api/file/upload'
      , data: {myObj: $files[i]}
      , file: $files[i]
      }).progress(function(evt) {
        // console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        // console.log('success', data)
        $scope.newReview.images.push(data.path)
      })
    }
  }

  //========================================================
  //  Add review widget
  //========================================================
  $scope.showAddReviewWidget = false
  $scope.triggerAddReviewWidget = function () {
    $scope.showAddReviewWidget = !$scope.showAddReviewWidget
    $scope.selected = ''
  }

  //========================================================
  //  Open Review
  //========================================================
  $scope.selected = ''

  $scope.openRAP = function (item) {
    // if($scope.selected === item){
    //   $scope.selected = ''
    // } else {
      $scope.showAddReviewWidget = false
      $scope.selected = item
    // }
  }

  $scope.isSelected = function (item) {
    return $scope.selected == item
  }

}