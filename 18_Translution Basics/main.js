var app = angular.module('app', []);

app.controller('AppCtrl', function($scope){

})

app.directive('panel', function() {
	return{
		restrict: 'E',
		template: '<div class="panel">This is a panel component</div>'
	}
})

app.directive('panel2', function() {
	return{
		restrict: 'E',
		transclude: true,
		template: '<div class="panel">This is a panel component with transclude' + 
					'<div ng-transclude></div></div>'
	}
})