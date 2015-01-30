var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'app.html',
			controller: 'appCtrl'
		})
		.when('/pizza/:crust/:toppings',
	    {
	      redirectTo: function (routeParams, path, search) {
	        console.log(routeParams);
	        console.log(path);
	        console.log(search);
	        return "/" + routeParams.crust;
	      }
	    })
	    .when('/deep', {
	      template: 'Deep dish'
	    })
});

app.controller('appCtrl', function($scope){
	$scope.model = {
		message: 'Thia is my app!!!'
	};
});
// redirectTo: The true benefit of this format is the ability of the function to use the routeParams, path, and search arguments

// The routeParams object is the same as the $routeParams used in the controller. ‘path’ is the string path the router received. ‘search’ is the key/value set of the query string parameters