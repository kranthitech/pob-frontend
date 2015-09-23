
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('signupController', signupController);

   	 /** @ngInject */
	  function signupController($scope) {
		   $scope.test="123";
		   $scope.active=function(){
		   		return true;
		   };
	  }
})();
