/* Directives */
angular.module('myApp')
  .directive('review', function (ReviewFactory, $timeout, $upload) {
    return {
      restrict: 'E'
    , templateUrl: '/templates/review-edit.jade'
    , link: function (scope, element) {
        //========================================================
        //  Button styling on hover
        //========================================================
        var saveBtn = element.find('save')
          , defaultStyles = {
                borderColor: '#' + scope.review.colorText
              , background: 'transparent'
              , color: '#' + scope.review.colorText
              }
          , hoverStyles = {
                background: '#' + scope.review.colorText
              , color: '#' + scope.review.colorBg
              }

        saveBtn.css(defaultStyles)
        saveBtn.on('mouseenter', function() {
          saveBtn.css(hoverStyles)
        })
        saveBtn.on('mouseleave', function() {
          saveBtn.css(defaultStyles)
        })

        //========================================================
        //  Update review
        //========================================================
        var changeCount = 0
        scope.modelChanged = false
        scope.$watch('review', function() {
          if(changeCount > 0){
            scope.modelChanged = true
          }
          changeCount ++
        }, true)

        scope.updateReview = function (data) {
          var newReview = new ReviewFactory(data)
          newReview.$update({}, function (res) {
            console.log('success', res)
          })
        }

        //========================================================
        //  File Upload
        //========================================================
        scope.upload = []
        scope.onFileSelect = function ($files) {
          // loop through files
          for (var i = 0; i < $files.length; i++) {
            console.log('$files[i]', $files[i])
            // upload file using $upload
            scope.upload[i] = $upload.upload({
              url: '/api/file/upload'
            , data: {myObj: $files[i]}
            , file: $files[i]
            }).progress(function(evt) {
              console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
              // file is uploaded successfully
              console.log('success', data)
              scope.review.images.push(data.path)
              scope.updateReview(scope.review)
            })
          }
        }
      }
    }
  })