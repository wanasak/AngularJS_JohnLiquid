var app = angular.module('app', []);

// app.controller('myCtrl', function($scope, $http, $parse){
// 	console.log($http);
// });

app.controller("myCtrl",["$scope", "$http", function(b, a){
  console.log(b)
}]);

// app.directive('myDirective', function(){
// 	return{
// 		link: function(scope){
// 			console.log(scope);
// 		}
// 	};
// });

// they’re the same exact object with identical ID’s

app.directive('myDirective', function(){
	return{
		scope: {},
		link: function(scope, element, attrs){
			console.log(scope);
			// console.log(element);
			// console.log(attrs);
		}
	};
});

// if we change our directive to have an isolate scope, we can see that the scopes being logged to the console are now different

// $scope: Name of the parameter important
// scope: Order is important

// the only thing $scope and scope have in common is that they refer to a scope. What’s important is one uses dependency injection, and the other is simply calling a method with the parameters already provided