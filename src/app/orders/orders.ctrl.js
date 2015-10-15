
(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .controller('ordersCtrl', ordersCtrl);

   	 /** @ngInject */
	  function ordersCtrl($scope) {
		  $scope.list=[
		  	{
		  		name:"Gourav",
		  		type:"delegate",
		  		subject:"Bought an item on flipkart",
		  		items:[
		  			{
		  				name:"Lenovo z50 Laptop",
		  				value:"200$"
		  			}
		  		]
		  	},{
		  		name:"Jayasri",
		  		type:"delegate",
		  		subject:"Mobile Bill on PayTm",
		  		items:[
		  			{
		  				name:"Idea Mobile Bill",
		  				value:"10$"
		  			}
		  		]
		  	},{
		  		name:"Kranthi",
		  		type:"pay",
		  		subject:"Amazon Web Services",
		  		items:[
		  			{
		  				name:"EC2 Instance",
		  				value:"74$"
		  			}
		  		]
		  	}
		  ]
	  }	

})();