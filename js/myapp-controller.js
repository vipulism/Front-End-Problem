var app = angular.module("theApp", []);
app.controller("myProducts", function($scope, $http) {

    $http.get("frontEndProblem.json").then(function(response) {

        $scope.sortType = 'paymentId'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        
        $scope.items = response.data;
    });


	$scope.curPage = 0;
 	$scope.pageSize = 3; // default items

	
	$scope.numberOfPages = function() {

				return Math.ceil($scope.allItems.length / $scope.pageSize);
	};

});

// creating pagination
angular.module('theApp').filter('pagination', function()
{
 return function(input, start)
 {
  start = +start;
  return input.slice(start);

 };
});

