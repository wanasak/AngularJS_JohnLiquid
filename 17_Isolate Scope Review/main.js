var app = angular.module('app', []);

app.controller('AppController', function($scope) {
	$scope.leaveVoiceMail = function(number, message){
		alert('Number: ' + number + ' said: ' + message);
	};
})

app.directive('phone', function() {
	return{
		restrict: 'E',
		scope: {
			number: '@',
			network: '=',
			makeCall: '&'
		},
		templateUrl: 'phone.html',
		link: function(scope) {
			s.networks = ['AIS', 'DTAC', 'TRUE'];
			s.network = s.networks[0];
		}
	}
})