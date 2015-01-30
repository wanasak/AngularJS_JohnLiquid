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

app.directive('error', function($rootScope){
	return{
		restrict: 'E',
		template: '<div class="alert-box alert" ng-show="isError">Error!!!</div>',
		link: function(scope)	{
			$rootScope.$on('$routeChangeError', function(){
				scope.isError = true;
			})
		}
	}
})

var appCtrl = app.controller('appCtrl', function($rootScope){
	
	$rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
		console.log('failed to change routes');
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

// An alternative way of handling this route change error is by displaying it in the UI, with a directive