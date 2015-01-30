var myApp = angular.module('myApp', []);

myApp.factory('Data', function(){
	return{
		message: "I'm data from service"
	}
})

function FirstCtrl($scope, Data){
	$scope.data = Data;
}

function SecondCtrl($scope, Data){
	$scope.data = Data;
}


// With this setup, data.message is defined outside of either controller, scoped to the entire ng-app. The bindings within each of the controller divs both point to that ‘parent’ model. Because of this, all 3 instances of the data.message input are bound to each other because of the first instance, which is globally scoped in the application.

// If one were to remove the first model that does not reside in a controller, there is no parent model for either controller to bind to, so each instance of data.message will be scoped within its respective controller. Thus, neither data.message will be bound to the other.

// We’d like to share the data model between the two controllers without creating a parent scope. This requires a service within a formally defined Angular application.

// This Data service can be injected into each of the controllers as a parameter. By doing this, we are now attaching the data.model to an app service, which repairs the binding between the two controller models.