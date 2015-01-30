var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app.html',
			controller: 'appCtrl'
		})
})

app.controller('appCtrl', function($scope, $q){
	var defer = $q.defer();

	// ex1
	// defer.promise.then(function(){
	// 	alert('I promised I would show up');
	// })

	// defer.resolve();

	// ex2
	// defer.promise
    // .then(function () {
      // alert("I promised I would show up");
    // })
    // .then(function () {
      // alert("me too");
    // })
    // .then(function () {
      // alert("and I");
    // });

  	// defer.resolve();

  	// ex3
  	defer.promise
    .then(function (weapon) {
      alert("You can have my " + weapon);
      return "bow";
    })
    .then(function (weapon) {
      alert("And my " + weapon);
      return "axe";
    })
    .then(function (weapon) {
      alert("And my " + weapon);
    });

  	defer.resolve("sword");

	$scope.model = {
		message: 'This is my app!!!'
	}
});

// Angular ships with the promise library, $q. $q’s defer() method returns a defer object

// the promise.then() prepares the function passed to it to execute at some point in the future. The execution of the promise is achieved by invoking resolve().