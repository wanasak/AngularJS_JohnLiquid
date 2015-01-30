var app = angular.module('app', []);


app.controller('AppCtrl', function($scope){
	$scope.atFlavor = "blackberry";
	$scope.equalFlavor = "apple";
	$scope.andFlavor = function(message){
		alert(message);
	};
})

// app.directive('drink', function(){
// 	return{
// 		scope: {},
// 		template: '<div>{{ flavor }}</div>',
// 		link: function(s, e, a){
// 			s.flavor = a.flavor;
// 		}
// 	}
// })

// With the @ operator, we are able to substitute the entire link function into a single attribute within the scope object. This operator serves to do exactly the same thing as what the link function does above: extract an attribute by name, and assign it to the scope.

app.directive('drink', function(){
	return{
		scope: { 
			at: '@',
			equal: '=',
			and: '&'
		},
		template: '<h2>{{ at }}</h2>' + 
			'<h2>{{ equal }}</h2>' +
			'<input type="text" ng-model="value"></input>' +
			'<div class="button" ng-click="and({message: value})">and</input>'
	}
})