var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app.html',
			controller: 'appCtrl',
			resolve: {
				// the page will not render, as the promise was never fulfilled. This is fixed by invoking resolve()
				// app: function($q){
				// 	var defer = $q.defer();
				// 	return defer.promise;
				// }
				app: function($q, $timeout){
					var defer = $q.defer();
					$timeout(function(){
						defer.resolve();
					}, 2000)
					return defer.promise;
				}
			}
		})
});

app.controller('appCtrl', function($scope){
	$scope.model = {
		message: 'I am a great app!'
	}
});

// The resolve property is a list of promises - things that need to happen before the controller instantiates and the view loads