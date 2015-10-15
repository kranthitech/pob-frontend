
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('sponsorsCtrl', sponsorsCtrl);

   	 /** @ngInject */
	  function sponsorsCtrl($scope) {
		  $scope.list=[
		  	{
		  		name:"Jayasri"
		  	},{
		  		name:"Kranthi"
		  	},{
		  		name:"Gourav"
		  	}
		  ]
	  }	

})();