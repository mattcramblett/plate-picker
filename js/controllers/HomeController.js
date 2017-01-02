app.controller('HomeController', ['$scope', '$location', function($scope, $location) {

	$scope.searchFood = function() {
		//if input empty, don't submit
		if(!$scope.foodQuery || $scope.foodQuery === "") {
			return;
		}else {
			$location.path("/search/"+$scope.foodQuery);
		}
	};
	
}]);