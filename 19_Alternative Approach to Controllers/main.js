var app = angular.module('app', []);

app.controller('AppCtrl', function($scope){
	$scope.sayHi = function() {
		alert('Say Hi');
	}
})


app.controller('AppAlternativeCtrl', function($scope){
	this.sayHi = function() {
		alert('Say Hi!!!');
	}

	return $scope.AppAlternativeCtrl = this;
})