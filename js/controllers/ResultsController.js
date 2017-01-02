app.controller('ResultsController',  ['$scope', '$routeParams', 'foods', function($scope, $routeParams, foods) {
	foods.getResults($routeParams.foodQuery)
		.success(function(data) {
	        $scope.result = data;
	        $scope.results = data.hits;
		});
}]);