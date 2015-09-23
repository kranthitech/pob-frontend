
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('pinSetupCtrl', pinSetupCtrl);

   	 /** @ngInject */
	  function pinSetupCtrl($scope) {
		   $scope.active=function(){
		   		return true;
		   };
	  }
})();
