var app = angular.module('app', []);

app.directive('superhero', function(){
	return{
		restrict: 'E',
		scope: {},
		controller: function($scope){
			$scope.abilities = [];

			this.addStr = function(){
				$scope.abilities.push("str");
			}

			this.addAgi = function(){
				$scope.abilities.push("agi");
			}

			this.addInt = function(){
				$scope.abilities.push("int");
			}
		},
		link: function(s, e){
			e.addClass('button');
			e.bind('mouseenter', function(){
				console.log(s.abilities);
			})
		}
	}
})

app.directive('str', function(){
	return{
		require: 'superhero', // Focus
		link: function(s, e, a, superheroCtrl){
			superheroCtrl.addStr();
		}
	}
})

app.directive('agi', function(){
	return{
		require: 'superhero',
		link: function(s, e, a, superheroCtrl){
			superheroCtrl.addAgi();
		}
	}
})

app.directive('int', function(){
	return{
		require: 'superhero',
		link: function(s, e, a, superheroCtrl){
			superheroCtrl.addInt();
		}
	}
})