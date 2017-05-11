app.controller('ItemController',  ['$scope', '$routeParams', '$cookies', 'foods', function($scope, $routeParams, $cookies, foods) {
	foods.getItem($routeParams.itemId)
		.success(function(data) {
		    $scope.item = data;
	});
}]);