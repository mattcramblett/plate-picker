app.controller('ResultsController', ['$scope', 'foods', function($scope, foods) {
    foods.success(function(data) {
        $scope.result = data;
        $scope.results = data.hits;
    });
}]);