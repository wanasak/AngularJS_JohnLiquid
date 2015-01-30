var app = angular.module('app', []);

app.factory('game', function(){
	return{
		title: 'StarCraft'
	}
});

// Longhand above
// app.config(function ($provide) {
//   $provide.factory("game", function () {
//     return {
//       title: "StarCraft"
//     };
//   });
// });
// Longhand above
// app.config(function ($provide) {
//   $provide.provider("game", function () {
//     return {
//       $get: function () {
//         return {
//           title: "StarCraft"
//         };
//       }
//     };
//   });
// });

app.provider('game2', function(){
	var type;
	return{
		setType: function(value){
			type = value;
		},
		$get: function(){
			return{
				title: type + 'Craft'
			}
		}
	}
})

app.config(function (game2Provider) {
  game2Provider.setType("War");
});

app.controller('appCtrl', function($scope, game, game2){
	$scope.title = game.title;
	$scope.title2 = game2.title;
});

// Factories are a common paradigm in Angular that allow you to configure a function that returns an object which can be then injected into controllers

 // ‘factory’ is simply an alias for this longhand method of declaring a provider which returns an object with a $get method

 // we define a setType method within the returned provider object, and invoke the method on the provider in the app.config method. This exposes an API to the provider, accessible in app.config, that allows further configuration of that provider to occur before it reaches the controller