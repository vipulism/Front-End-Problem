var app = angular.module("theApp", []);
app.controller("myProducts", function($scope, $http) {

	$scope.curPage = 0;
 	$scope.pageSize = 3; // default items

    var obj = {content:null}; // creating  object

    $http.get("frontEndProblem.json").then(function(response) {

        $scope.sortType = 'paymentId'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        
        $scope.items = response.data;
    });


});
