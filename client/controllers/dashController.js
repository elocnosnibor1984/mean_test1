myApp.controller('dashController', function($scope, $location, pollFactory, dummyFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	pollFactory.getPolls(function(data){
		console.log("got to getPolls");
		$scope.polls = data[0].data;
	})

	$scope.logout = function(){
		pollFactory.logoutUser(function(){
			console.log("logged out");
			$location.path('/');
		})
	}

	console.log('I am able to load my indexController along with my index partial');

	
})