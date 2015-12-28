

angular.module('serviceWorkerSample', [])
.controller('firstController', function($scope, $http){
	$http.get("https://dinosaur-facts.firebaseio.com/dinosaurs.json")
	.success(function(results){
		$scope.dinosaurs = results;
	})
	.error(function(error){
		alert("error retreiving data...");
		console.log(error);
	});
});