var app = angular.module('app', []);

app.directive('superman', function(){
	return{
		restrict: 'AECM',
		link: function(){
			alert('I am superman!');
		}
	}
})

// You can then provide a linking function, which is where you will put whatever the behavior is