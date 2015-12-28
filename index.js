

angular.module('serviceWorkerSample', [])
.controller('firstController', function($scope, $http){
	
	$http.get("https://dinosaur-facts.firebaseio.com/dinosaurs.json")
	.success(function(results){
		$scope.dinosaurs = results;
	})
	.error(function(error){
		$scope.showAlert = true;
		$scope.errorMessage = "Ooops, Jurassic park is unavailable! Are you connected to Internet?";
	});
});