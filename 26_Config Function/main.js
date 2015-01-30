var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
//  $routeProvider.when("/",
//    {
//      templateUrl: "app.html",
//      controller: "AppCtrl"
//    }
//  );
});

app.controller("AppCtrl", function($scope, $route) {
  $route.routes["/"] = {
    templateUrl: "app.html",
    controller: "AppCtrl"
  }

  $scope.model = {
    message: "This is my app!!!"
  }
});

// view is empty. This is because it is way too late in our app for us to declare this route. We need to reference “AppCtrl” so it can be initiated when we navigate to this URL. 
// We can’t define routes in a controller or in a service since the configuration needs to happen before it gets injected into anything we want to use it in. Any configuration we do to providers in the config function will allow us to access pre-configured instances of these providers when they are injected