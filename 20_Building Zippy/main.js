var app = angular.module('app', []);

app.directive('zippy', function(){
	return{
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@'
		},
		template: '<div>' +
			'<h3 ng-click="toggleContent()">{{ title }}</h3>' + 
			'<div class="panel" ng-show="isContentVisible" ng-transclude></div>' +
			'</div>',
		link: function(s){
			s.isContentVisible = false;
			s.toggleContent = function(){
				s.isContentVisible = !s.isContentVisible;
			};
		}
	};
});

// app.directive("zippy", function(){
//   return {
//     restrict: "E",
//     transclude: true,
//     scope: {
//       title: "@"
//     },
//     template: '<div>' +
//       '<h3 ng-click="toggleContent()">{{title}}</h3>' +
//       '<div ng-show="isContentVisible" ng-transclude></div>' +
//       '</div>',
//     link: function(scope){
//       scope.isContentVisible = false;
//       scope.toggleContent = function(){
//         scope.isContentVisible = !scope.isContentVisible;
//       };
//     }
//   };
// });