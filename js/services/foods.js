app.factory('foods', ['$http', '$routeParams', function($http, $routeParams) {
	return $http.post('https://api.nutritionix.com/v1_1/search', {
  				"appId":"20fc92e6",
  				"appKey":"1fed9d7856a735c7b71ee0f97608f12f",  
  				"query": $routeParams.foodQuery,
  				"fields":["item_name","brand_name","nf_calories","nf_serving_size_qty","nf_serving_size_unit"],
  			"sort":{
 				"field":"_score",
  				"order":"desc"
 			},
  				"filters":{
    			"item_type":2
  			}
		})
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);