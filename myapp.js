var app = angular.module("theApp", []);
app.controller("myProducts", function($scope, $http) {

    $http.get("frontEndProblem.json").then(function() {

        $scope.sortType = 'paymentId'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order

        
    });
});
