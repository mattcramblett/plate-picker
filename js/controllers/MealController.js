app.controller('MealController',  ['$scope', '$cookies', function($scope, $cookies) {

    if($cookies.meal === null) {
        $cookies.meal = [];
    }

    $scope.myMeal = $cookies.meal;

}]);