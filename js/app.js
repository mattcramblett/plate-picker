var app = angular.module('PlatePickerApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: "HomeController",
			templateUrl: "views/home.html"
		})
		.when('/foodsearch/:foodQuery', {
			controller: "ResultsController",
			templateUrl: "views/results.html"
		})
		.otherwise({
			redirectTo: '/'
		});
});