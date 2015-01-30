var app = angular.module('app', []);

app.directive('enter', function() {
	return function(scope, element){
		element.bind('mouseenter', function () {
			console.log('I am enter');
		})
	}
})

app.directive('leave', function() {
	return function(scope, element){
		element.bind('mouseleave', function () {
			console.log('I am leave');
		})
	}
})


// app.directive("enter", function(){
//  return function(scope, element) {
//       element.bind("mouseenter", function(){
//         console.log("I'm inside of you!");
//       })
//     }
// });

// app.directive("leave", function(){
//  return function(scope, element) {
//       element.bind("mouseleave", function(){
//         console.log("I'm leaving on a jet plane!");
//       })
//     }
// });