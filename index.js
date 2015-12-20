

angular.module('serviceWorkerSample', [])
.controller('firstController', function($scope, $http){
	$scope.welcomeMessage = "Hello World";

	$http.get('http://localhost:4000/sample')
	.success(function(result){
		$scope.dinosaurs = result;
	})
	.error(function(error){
		alert("error, couldn't load dinosaur data");
		console.log(error);
	});
});