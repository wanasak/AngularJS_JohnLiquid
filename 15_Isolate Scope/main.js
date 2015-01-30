var app = angular.module('app', []);

app.controller('ChoreCtrl', function($scope){
	$scope.logChore = function(chore){
		alert(chore + ' is done');
	}
})

app.directive('kid', function(){
	return{
		restrict: 'E',
		scope: {
			done: "&"
		},
		template: '<input type="text" ng-model="msg"></input>' + 
			'<div class="button" ng-click="done({chore:msg})">Done</div>'
	}
})