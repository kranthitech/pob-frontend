(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('aboutus',{
        url:'/aboutus',
        template:'This is a test page'
      }).state('splash',{
        url:'/splash',
        views:{
          "content":{
            templateUrl: 'app/splash/splash.html',
            controller: 'SplashController'    
          }
        }
      }).state('signup',{
        url:'/signup',
        views:{
          "header":{
            templateUrl:'app/signup/header.html',
            controller: 'SplashController'    
          },
          "content":{
            templateUrl: 'app/signup/signup.html',
            controller: 'SplashController'    
          }
        }
      }).state('verify',{
        url:"/verify",
         views:{
          "header":{
            templateUrl:'app/verification/header.html',
            controller: 'verificationCtrl'    
          },
          "content":{
            templateUrl: 'app/verification/verification.html',
            controller: 'verificationCtrl'    
          }
        }
      }).state('pinsetup',{
        url:"/pinsetup",
         views:{
          "header":{
            templateUrl:'app/pinsetup/header.html',
            controller: 'pinSetupCtrl'    
          },
          "content":{
            templateUrl: 'app/pinsetup/pinsetup.html',
            controller: 'pinSetupCtrl'    
          }
        }
      }).state('pinInput',{
        url:"/pinInput",
         views:{
          "header":{
            templateUrl:'app/pinInput/header.html',
            controller: 'pinInputCtrl'    
          },
          "content":{
            templateUrl: 'app/pinInput/pinInput.html',
            controller: 'pinInputCtrl'    
          }
        }
      }).state('home',{
         views:{
          "header":{
            templateUrl:'app/home/header.html',
            controller: 'homeCtrl'    
          },
          "content":{
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl'    
          }
        }
      }).state('home.tabs',{
        url:"/home",
        views:{
          "beneficiaries":{
            templateUrl:'app/beneficiaries/beneficiaries.html',
            controller:'beneficiariesCtrl'
          },
          "sponsors":{
            templateUrl:'app/sponsors/sponsors.html',
            controller:'sponsorsCtrl'
          },
          "orders":{
            templateUrl:'app/orders/orders.html',
            controller:'ordersCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
