
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('homeCtrl', homeCtrl);

   	 /** @ngInject */
	  function homeCtrl($scope) {
		  $scope.selectedTab=1;
		  $scope.onSwipeLeft=function(){
		  	 if($scope.selectedTab>0)
		  	 	--$scope.selectedTab;
		  }
		  $scope.onSwipeRight=function(){
		  	if($scope.selectedTab<2)
		  	 	++$scope.selectedTab;
		  }
	  }

})();