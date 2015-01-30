var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'app.html',
			controller: 'appCtrl'
		})
		.when('/pizza',{
			template: 'Yum!!'
		})
		.otherwise({
			template: 'This doesm\'t exist'
		})
});

app.controller('appCtrl', function($scope){
	$scope.model = {
		message: 'This is my app!!!'
	};
});

// $routeProvider required ngRoute