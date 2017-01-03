app.controller('ResultsController',  ['$scope', '$routeParams', '$location', 'foods', function($scope, $routeParams, $location, foods) {

	$scope.viewItem = function(itemId) {
		$location.path("/item/"+itemId);
	};

	foods.getResults($routeParams.foodQuery)
		.success(function(data) {
	        $scope.result = data;
	        $scope.results = data.hits;
		});
}]);