
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('homeCtrl', homeCtrl);

   	 /** @ngInject */
	  function homeCtrl($scope) {
		  $scope.setHeight=function(){
		  	angular.element(document).ready(function(){
		    	var headerHeight = document.querySelector(".header").scrollHeight;
		    	var bodyHeight = document.body.scrollHeight;
		    	var footerHeight = document.querySelector(".footer").scrollHeight;
			    var contentHeight = bodyHeight - headerHeight - footerHeight;
			    console.log(bodyHeight);
			    angular.element(document.querySelector(".content")).css("max-height",contentHeight+"px");	
			    angular.element(document.querySelector(".content")).css("height",contentHeight+"px")
		    })
		  }	
		  $scope.selectedTab=0;
		  $scope.onSwipeLeft=function(){
		  	 if($scope.selectedTab>0){
		  	 	--$scope.selectedTab;
		  	 }
		  };
		  $scope.onSwipeRight=function(){
		  	if($scope.selectedTab<2){
		  		++$scope.selectedTab;
		  	}
		  };
	  }

})();