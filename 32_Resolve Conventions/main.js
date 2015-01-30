var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app.html',
			controller: 'appCtrl',
			resolve: {
				loadData: appCtrl.loadData,
				prepData: appCtrl.prepData
			}
		})
});

var appCtrl = app.controller('appCtrl', function($scope, $route){
	console.log($route);
	$scope.model = {
		message: 'I am a great app!'
	}
});

appCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.resolve('loadData');
    console.log("loadData");
  }, 2000);
  return defer.promise;
};

appCtrl.prepData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.resolve('prepData');
    console.log("prepData");
  }, 2000);
  return defer.promise;
};

// Most of the time, resolve is associated with a controller

// By passing strings to the resolve method and inspecting the route in the console, $route.current.locals will have the loadData and prepData attributes, with their respective string values that were returned from the promise

