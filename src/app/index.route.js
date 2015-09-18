(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('aboutus',{
        url:'/aboutus',
        template:'This is a test page'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
