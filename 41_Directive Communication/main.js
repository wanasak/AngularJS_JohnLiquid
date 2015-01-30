var app = angular.module('app', []);

app.directive('country', function(){
	return{
		restrict: 'E',
		controller: function() {
			this.makeAnnouncement = function(message) {
				console.log('country says: ' + message);
			}
		}
	}
})

app.directive('state', function() {
	return {
		restrict: 'E',
		controller: function() {
			this.makeLaw = function(message) {
				console.log('state say: ' + message);
			}
		}
	}
})

app.directive('city', function() {
	return {
		restrict: 'E',
		// require: '^country',
		require: ['^country', '^state'],
		link: function(scope, element, attrs, ctrls) {
			//countryCtrl.makeAnnouncement('yolo');
			ctrls[0].makeAnnouncement('yolo');
			ctrls[1].makeLaw('say no no');
		}
	}
})

// If one knows there is a hierarchical relationship between nested directives, it is possible to communicate between them using controllers

// With their respective directives, a parent directive can expose something like the makeAnnouncement() method, and have it passed down to a child directive

// we can inject the country directive controller into the linking function of the city directive. This is accomplished by matching the require naming scheme to the parent directive name

// With this, the controller of the parent directive is available for use in the child directive