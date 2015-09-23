
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('verificationCtrl', verificationCtrl);

   	 /** @ngInject */
	  function verificationCtrl($scope) {
		   $scope.active=function(){
		   		return true;
		   };
	  }
})();
