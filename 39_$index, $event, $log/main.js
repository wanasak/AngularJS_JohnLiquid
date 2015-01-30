var app = angular.module('app', []);

// app.config(function($logProvider){
//   $logProvider.debugEnabled(false);
// });

app.run(function($rootScope, $log){
	$rootScope.$log = $log;
})

// You can turn off the debug level of the logger in the config phase of the app by using $logProvider and calling debugEnabled and passing it false