var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/map/:country/:city',
		{
			templateUrl: 'app.html',
			controller: 'appCtrl'
		})
});

app.controller('appCtrl', function($scope, $routeParams){
	$scope.model = {
		message: 'Address: ' +
			$routeParams.country + ', ' +
			$routeParams.city
	};
});

// New here is $routeParams. Inside app.config(), $routeProvider will match the route against /:message, and the value of :message can be injected into the controller as $routeParams, and retrieved with a key of the same name.