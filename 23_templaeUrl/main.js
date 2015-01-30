var app = angular.module('app', []);

app.directive('zippy', function(){
	return{
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@'
		},
		templateUrl: 'zippy.html',
		link: function(scope){
			scope.isContentVisible = false;
			scope.toggleContent = function(){
				scope.isContentVisible = !scope.isContentVisible;
			};
		}
	};
});

// We can actually make the “zippy.html”: accessible by creating a script tag with type as “text/ng-template” and placing our html in there

