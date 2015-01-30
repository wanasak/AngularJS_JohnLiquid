var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app.html',
			controller: 'appCtrl',
			resolve: {
				loadData: appCtrl.loadData
			}
		})
});

// var appCtrl = app.controller('appCtrl', function($scope){
// 	$scope.model = {
// 		message: 'I am a great app!'
// 	}
// })

var appCtrl = app.controller('appCtrl', function($rootScope){
	// $rootScope.$on('$routeChangeError', function(){
	// 	console.log('failed to change routes');
	// })
	$rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
		console.log('failed to change routes');
		console.log(event);
		console.log(current);
		console.log(previous);
		console.log(rejection);
	})
})

appCtrl.loadData = function($q, $timeout){
	var defer = $q.defer();
	$timeout(function(){
		//defer.resolve('loadData');
		defer.reject('Network down');
	}, 500)
	return defer.promise;
}

// rejecting instead of resolving will cause the promise to fail. This, in turn, will cause the controller to never be instantiated and the view will never load

//  it now handles what happens when route changes fail. It takes $rootScope as an argument to listen for events that come up to the root scope, and the $on method invoked on $rootScope is targeted at the $routeChangeError event

// ‘event’ is an object describing the environment surrounding the fired event
// ‘current’ is the current route
// ‘previous’ is the route that existed before this one was arrived at
// ‘rejection’ is a custom rejection message