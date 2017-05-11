app.directive('addItem', [function() {
    return {
        scope: {
            item: "="
        },
        templateUrl: 'js/directives/addItem.html',
        link: function(scope, element, attrs) {
            scope.add = function() {
                //add item and redirect to meal

                if($cookies.meal === null) {
                    $cookies.meal = [];
                }

                var myMeal = $cookies.meal;

                if(scope.item === null) {
                    $location.path("/meal/");
                }

                myMeal[myMeal.length] = $scope.item;

                $cookies.meal = myMeal;
            };
        }
    };
}]);