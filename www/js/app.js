// // Boost App

// // angular.module is a global place for creating, registering and retrieving Angular modules
// // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// // the 2nd parameter is an array of 'requires'
angular.module('boostApp', ['ui.router','boost.controllers','boost.services'])

// // .run(function() {
  
// // })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  // .state('/', {
  //   url: '/',
  //   views: {
  //       templateUrl: 'templates/login.html',
  //       controller: 'loginCtrl'
  //   }
  // })
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  // // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
})
