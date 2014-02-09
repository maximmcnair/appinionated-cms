angular.module('myApp')
.directive('twitterShare', [
  function() {
    return {
      link: function(scope, element, attr) {
        setTimeout(function() {
            twttr.widgets.createShareButton(
              attr.url,
              element[0],
              function(el) {}, {
                count: 'none',
                text: attr.text
              }
            );
        });
      }
    }
  }
])
.directive('twitterFollow', [
  function() {
    return {
      link: function(scope, element, attr) {
        setTimeout(function() {
            twttr.widgets.createShareButton(
              attr.url,
              element[0],
              function(el) {}, {
                count: 'none',
                text: attr.text
              }
            );
        });
      }
    }
  }
])