
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('SplashController', SplashController);

   	 /** @ngInject */
	  function SplashController($scope) {
		   $scope.test="123";
	  }
})();
