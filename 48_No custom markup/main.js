var app = angular.module('app', []);

app.controller('appCtrl', function() {
	this.random = Math.random();
})

app.directive('app', function() {
	return {
		restrict: 'C',
		controller: 'appCtrl as app'
	}
})

angular.bootstrap(document.getElementById('container'), ['app']);