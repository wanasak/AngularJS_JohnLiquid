var app = angular.module('app', []);

app.directive('superman', function() {
	return {
		restrict: 'E',
		template: '<h2>I am superman</h2>'
	};
});