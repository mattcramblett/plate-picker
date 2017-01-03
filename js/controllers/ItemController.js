app.controller('ItemController',  ['$scope', '$routeParams', 'foods', function($scope, $routeParams, foods) {
	foods.getItem($routeParams.itemId)
		.success(function(data) {
		    $scope.item = data;
	});
}]);