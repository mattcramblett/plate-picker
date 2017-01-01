app.controller('HomeController', ['$scope', '$location', function($scope, $location) {
	$scope.searchFood = function() {
		//if input empty, don't submit
		if(!$scope.foodQuery || $scope.foodQuery === "") {
			console.log("RIGHT HERE");
			return;
		}else {
			$location.path("/foodsearch/"+$scope.foodQuery);
		}
	};
}]);