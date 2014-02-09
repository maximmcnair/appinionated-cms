angular.module('myApp')
  .directive('gallery', function ($timeout) {
    return {
      restrict: 'A'
    // , scope: {
    //     images: '&'
    //   , selectedImage: '&'
    //   }
    , scope: true
    , link: function (scope, element, attrs) {
      // console.log('gallery init')
      console.log('scope:', scope)
      // console.log('scope.selectedImage:', scope.selectedImage)
      scope.selectedImage = 0
      var changeImg = function () {
        var currentImg = scope.selectedImage
        scope.$apply(function () {
          if(scope.selectedImage === scope.$parent.review.images.length - 1){
            scope.selectedImage = 0
          } else {
            scope.selectedImage++
          }
        })
        console.log('scope.selectedImage', scope.selectedImage)
        $timeout(function() {
          changeImg()
        }, 1000)
      }

      $timeout(function() {
        changeImg()
      }, 1000)
    }
    }
  })