var app = angular.module('app', []);

app.controller('AppCtrl', function($scope){
	$scope.loading = function(){
		alert('Loading');
	}

	$scope.deleting = function(){
		alert('Deleting');
	}
})

app.directive('enter', function(){
	return function(s, e, a){
		e.bind('mouseenter', function(){
			s.$apply(a.enter);
		})
	}
})

// scope.$apply() parses the passed string and finds the method within scope