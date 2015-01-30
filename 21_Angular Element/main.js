var app = angular.module('app', []);

// app.directive('dumbPassword', function(){
// 	return{
// 		restrict: 'E',
// 		replace: true,
// 		templateUrl: 'dumbpass.html',
// 		link: function(s, e){
// 			s.$watch('model.input', function(value){
// 				if (value === 'password'){
// 					e.children(1).toggleClass('alert-box alert');
// 				}
// 			});
// 		}
// 	};
// });

// app.directive('dumbPassword', function(){
// 	var validElement = angular.element('<div>{{ model.input }}</div>');

// 	return{
// 		restrict: 'E',
// 		replace: true,
// 		templateUrl: 'dumbpass.html',
// 		compile: function(tElem){
// 			tElem.append(validElement);

// 			return function(scope){
// 				scope.$watch('model.input', function(value){
// 					if(value === 'password'){
// 						validElement.toggleClass('alert-box alert');
// 					}
// 				});
// 			}
// 		}
// 	};
// });

// scope.$watch
// sets a listener on that model and waits for it to change

// $compile
// takes an HTML string and compiles it into a template function, returning a link function which is used to bind template to a scope. Calling this linking function will then return the element of the template

app.directive('dumbPassword', function(){
	var validElement = angular.element('<div>{{ model.input }}</div>');
	var link = function(scope){
		scope.$watch('model.input', function(value){
			if(value === 'password'){
				validElement.toggleClass('alert-box alert');
			}
			else{
				validElement.removeClass('alert-box alert');
			}
		});
	}
	
	return{
		restrict: 'E',
		replace: true,
		templateUrl: 'dumbpass.html',
		compile: function(tElem){
			tElem.append(validElement);

			return link;
		}
	};
});