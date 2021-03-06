var app = angular.module('PlatePickerApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: "HomeController",
			templateUrl: "views/home.html"
		})
		.when('/search/:foodQuery', {
			controller: "ResultsController",
			templateUrl: "views/results.html"
		})
		.when('/item/:itemId', {
			controller: "ItemController",
			templateUrl: "views/item.html"
		})
		.when('/meal', {
			controller: "MealController",
			templateUrl: "views/meal.html"
		})
		.otherwise({
			redirectTo: '/'
		});
});