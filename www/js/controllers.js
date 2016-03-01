angular.module('boost.controllers', [])


.controller('baseCtrl', function($scope){
  // $rootScope.labels = {
  //   //appTitle : 'AutoPhoto'
  // }
  // $rootScope.baseVars = {

  // }
  $scope.baseInit = function(){
  
  }
})

.controller('homeCtrl', ['$scope', '$window', function($scope, $rootScope, $window){
  //start sharing
  $rootScope.sendMail = function () {
      $window.dataLayer.push({
          'event': 'GA_Event',
          'Category': 'Share',
          'Action': 'Share Email',
          'Label': 'http://m.ynet.co.il/Article.aspx?id='
      });
      $window.location.href =
          'mailto:?subject=' +
          encodeURIComponent('https://docs.angularjs.org/api/ng/service/$window')
  }
  $scope.shareOnWhatsApp = function () {
      $window.location.href = 'whatsapp://send?text=abc';
      // $window.dataLayer.push({
      //     'event': 'GA_Event',
      //     'Category': 'Share',
      //     'Action': 'Share WhatsApp',
      //     'Label': 'http://m.ynet.co.il/Article.aspx?id='
      // });
      // $window.location.href = 'whatsapp://send?text=' +
      //     encodeURIComponent('https://docs.angularjs.org/api/ng/service/$window');
      alert('1')
  }
  $rootScope.shareOnFacebook = function () {
      $window.dataLayer.push({
          'event': 'GA_Event',
          'Category': 'Share',
          'Action': 'Share Facebook',
          'Label': 'http://m.ynet.co.il/Article.aspx?id='
      });
      $window.location.href = 'https://www.facebook.com/sharer/sharer.php?u=http://www.ynet.co.il/articles/0,7340,L-';
  }
}])

.controller('loginCtrl', function($scope){
  $scope.login = function() {

  }
})