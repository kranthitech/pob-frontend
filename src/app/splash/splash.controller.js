
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('SplashController', SplashController);

   	 /** @ngInject */
	  function SplashController($scope,$state) {
		   $scope.test="123";
		   $scope.active=function(){
		   		return true;
		   };
		   setTimeout(function(){
		   		$state.go("signup");
		   },1000);
	  }
})();
