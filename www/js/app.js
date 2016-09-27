// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  /*  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
*/
  // setup a sliding menu
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // Each tab has its own nav history stack:

  .state('app.barangay', {
    url: '/barangay',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-barangay.html',
      }
    }
  })

  .state('app.death', {
    url: '/death',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-death.html',
      }
    }
  })

  .state('app.nonpro', {
    url: '/nonpro',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-nonpro.html',
      }
    }
  })

  .state('app.pagibig', {
    url: '/pagibig',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-pagibig.html',
      }
    }
  })

  .state('app.marriage', {
    url: '/marriage',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-marriage.html',
      }
    }
  })

  .state('app.passportnew', {
    url: '/passportnew',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-passportnew.html',
      }
    }
  })

  .state('app.nbi', {
    url: '/nbi',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-nbi.html',
      }
    }
  })

  .state('app.chats', {
    url: '/chats',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })
  .state('app.chat-detail',{
    url: '/chats/:chatId',
    views: {
        'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
        }
    }
  })

  .state('app.dash', {
    url: '/dash',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-dash.html',
      }
    }
  })

  .state('app.me', {
    url: '/me',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-me.html',
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dash');

});
