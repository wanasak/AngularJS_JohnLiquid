var app = angular.module('app', []);

app.controller('roomCtrl', function(){
	this.openDoor = function(){
		alert('creak');
	}

	this.buttonTitle = "I'm a button";
})

// Let’s create our room controller without a scope, so instead of defining functions on the $scope, we define it on “this” within the function

// This new syntax also helps as we start to get into nested controllers. The named scopes are clearly defined so there won’t be conflicts between controllers since you must state which controller you’re referencing before the “dot”. This feature is still experimental.