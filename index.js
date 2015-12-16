

angular.module('serviceWorkerSample', [])
.controller('firstController', function($scope, $http){
	$scope.welcomeMessage = "Hello World";

	$http.get('http://localhost:3000/sample').success(function(result){
		console.log(result);
		$scope.apiRef = result;
	})
});