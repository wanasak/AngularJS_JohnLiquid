var app = angular.module('app', []);

app.directive('enter', function() {
	return function(s, e, a){
		e.bind('mouseenter', function () {
			e.addClass(a.enter);
		})
	}
})

app.directive('leave', function() {
	return function(s, e, a){
		e.bind('mouseleave', function () {
			e.removeClass(a.enter);
		})
	}
})

