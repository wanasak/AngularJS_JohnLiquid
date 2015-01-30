var myApp = angular.module('myApp', []); 

myApp.factory('Avengers', function () {
  var Avengers = {};
  Avengers.cast = [
    {
		name: "Robert Downey JR",
		character: "Iron man"
	},
	{
		name: "Chris Evan",
		character: "Captain America"
	},
	{
		name: "Mark Ruffalo",
		character: "The Hulk"
	},
	{
		name: "Chris hemsworth",
		character: "Thor"
	},
	{
		name: "Clark Gregg",
		character: "Agent Phil Coulson"
	},
	{
		name: "Tom Hiddleston",
		character: "Loki"
	}
  ];
  return Avengers;
});

function AvengersCtrl($scope, Avengers) {
  $scope.avengers = Avengers;
}

