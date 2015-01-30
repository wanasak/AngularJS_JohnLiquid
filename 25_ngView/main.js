var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app.html',
		controller: 'appCtrl'
	})
}])

app.controller('appCtrl', function($scope) {
	$scope.model = {
		message: 'This is my app!!!'
	}
});




