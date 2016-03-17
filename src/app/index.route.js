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
          "people":{
            templateUrl:'app/people/people.html',
            controller:'peopleCtrl'
          },
          "payments":{
            templateUrl:'app/payments/payments.html',
            controller:'paymentsCtrl'
          }
        }
      }).state('addbeneficiary',{
        url:"/addbeneficiary",
         views:{
          "header":{
            templateUrl:'app/addbeneficiary/header.html',
            controller: 'addbeneficiaryCtrl'    
          },
          "content":{
            templateUrl: 'app/addbeneficiary/addbeneficiary.html',
            controller: 'addbeneficiaryCtrl'    
          }
        }
      }).state('addsponsor',{
        url:"/addsponsor",
         views:{
          "header":{
            templateUrl:'app/addsponsor/header.html',
            controller: 'addsponsorCtrl'    
          },
          "content":{
            templateUrl: 'app/addsponsor/addsponsor.html',
            controller: 'addsponsorCtrl'    
          }
        }
      }).state('sentstatus',{
        url:"/sentstatus",
         views:{
          "header":{
            templateUrl:'app/sentstatus/header.html',
            controller: 'sentstatusCtrl'    
          },
          "content":{
            templateUrl: 'app/sentstatus/sentstatus.html',
            controller: 'sentstatusCtrl'    
          }
        }
      }).state('requestaction',{
        url:"/requestaction",
         views:{
          "header":{
            templateUrl:'app/requestaction/header.html',
            controller: 'requestactionCtrl'    
          },
          "content":{
            templateUrl: 'app/requestaction/requestaction.html',
            controller: 'requestactionCtrl'    
          }
        }
      }).state('receivedrequest',{
        url:"/receivedrequest",
         views:{
          "header":{
            templateUrl:'app/receivedrequest/header.html',
            controller: 'receivedrequestCtrl'    
          },
          "content":{
            templateUrl: 'app/receivedrequest/receivedrequest.html',
            controller: 'receivedrequestCtrl'    
          }
        }
      }).state('checkrequest',{
        url:"/checkrequest",
         views:{
          "header":{
            templateUrl:'app/checkrequest/header.html',
            controller: 'checkrequestCtrl'    
          },
          "content":{
            templateUrl: 'app/checkrequest/checkrequest.html',
            controller: 'checkrequestCtrl'    
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
