// Ionic Starter App
var db = null;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite) {
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

    if(window.cordova) {
      try {     

          if (window.sqlitePlugin !== undefined) {
            // If sqlitePlugin is not defined
            db = window.sqlitePlugin.openDatabase({ name: "populated.db", location: 2, createFromLocation: 1 });
            alert('unique database');
          
          } 
          else {

            // For debugging in the browser
            db = window.openDatabase("populated.db", 0, "Database", 200000);

            // Checking if table exists and creates it if not
            cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS documents (id INTEGER PRIMARY KEY, docname TEXT, prog INTEGER, proc INTEGER)").then(function(res) {
              var db_path = context.getDatabasePath("populated.db").getPath();
              alert("inserted!"+db + " " + db_path);  
            }, function (err) {
              alert("error1:"+err.message);
            });

            // Checking existing data in database
            var s_query = "SELECT * FROM documents WHERE docname = 'death'";
            $cordovaSQLite.execute(db, s_query).then(function(res) {
              if(res.rows.length > 0) {
                // if not empty
                for(var i = 0; i < res.rows.length; i++){
                  alert("success!" + res.rows.item(0).docname + " " + res.rows.item(0).prog);
                }
              } 
              else {
                // if empty insert values
                var query = "INSERT INTO documents (docname, prog, proc) VALUES ('death',0,3)";

                $cordovaSQLite.execute(db, query).then(function(res) {
                  alert("inserted!"+docname + " " + prog);  
                }, function (err) {
                  alert("error1:"+err.message);
                });

              }
            }, function (err) {
              // output the error message
              console.error("error in checking existing data: " err.message);
            });

            alert('normal database');
          }

      } catch (error) {
        // failure of whole process of getting database
        alert("catch: "+error);
      }
      console.log("android");
    }
    else{
      db = window.openDatabase("populated.db", 0, 'populated', 1024 * 1024 * 100);
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS documents (id integer primary key, docname text, prog integer, proc integer)");
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

  .state('app.business', {
    url: '/business',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-business.html',
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

  .state('app.dti', {
    url: '/dti',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-dti.html',
      }
    }
  })

  .state('app.gsis', {
    url: '/gsis',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-gsis.html',
      }
    }
  })

  .state('app.birth', {
    url: '/birth',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-birth.html',
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

 .state('app.peos', {
    url: '/peos',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-peos.html',
      }
    }
  })

.state('app.pdos', {
    url: '/pdos',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-pdos.html',
      }
    }
  })

  .state('app.philhealth', {
    url: '/philhealth',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-philhealth.html',
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

  .state('app.passportrenew', {
    url: '/passportrenew',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-passportrenew.html',
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

  .state('app.police', {
    url: '/police',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-police.html',
      }
    }
  })

  .state('app.prc', {
    url: '/prc',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-prc.html',
      }
    }
  })

  .state('app.pwd', {
    url: '/pwd',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-pwd.html',
      }
    }
  })

  .state('app.senior', {
    url: '/senior',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-senior.html',
      }
    }
  })

  .state('app.umid', {
    url: '/umid',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-umid.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.tin', {
    url: '/tin',
    views: {
      'menuContent': {
        templateUrl: 'templates/app-tin.html',
        controller: 'AppCtrl'
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
