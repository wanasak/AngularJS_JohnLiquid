var app = angular.module('app', []);

// Component
app.directive('clock', function(){
	return{
		restrict: 'E',
		scope: {
			timezone: '@'
		},
		template: '<div>12.00 pm {{ timezone }}</div>'
	}
})


// Container
app.directive('panel', function(){
	return{
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@'
		},
		template: '<div style=\'border: 3px solid #000000\'>' +
					'<div class="alert-box">{{ title }}</div>' +
					'<div ng-transclude></div></div>'
	}
})
