var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app.html',
			controller: 'viewCtrl'
		})
		.when('/new', {
			templateUrl: 'new.html',
			controller: 'newCtrl',
			resolve: {
				loadData: viewCtrl.loadData
			}
		})
})

app.controller('appCtrl', function($scope, $rootScope, $route, $location){
	$rootScope.$on('$routeChangeStart', function(event, current, previous, rejection){
		console.log($scope, $rootScope, $route, $location);
	})
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection){
		console.log($scope, $rootScope, $route, $location);
	})
})

var viewCtrl = app.controller('viewCtrl', function($scope, $route, $location){
	$scope.changeRoute = function(){
		console.log($scope);
		$location.path('/new');
	}
})

app.controller('newCtrl', function($scope, loadData, $template){
	console.log($scope, loadData, $template);
})

viewCtrl.loadData = function($q, $timeout){
	var defer = $q.defer();
	$timeout(function(){
		defer.resolve({message:'success'})
	}, 1000)
	return defer.promise;
}

// ref: https://thinkster.io/egghead/route-life-cycle/