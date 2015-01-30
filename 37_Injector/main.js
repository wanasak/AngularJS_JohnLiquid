var app = angular.module('app', []);

app.factory('game', function() {
	return{
		title: 'StarCraft'
	}
});

// angular.injector(['app']).invoke(function(game){
// 	alert(game.title);
// })

// app.controller('appCtrl', function($scope, game){
// 	$scope.title = game.title
// })

// Another way

app.controller('appCtrl', function($scope, $injector) {
	$injector.invoke(function(game) {
		alert(game.title);
		$scope.title = game.title;
	})
});