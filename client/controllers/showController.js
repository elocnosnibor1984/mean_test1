myApp.controller('showController', function($scope, $routeParams, pollFactory, dummyFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	var question = $routeParams.question;
	console.log("question: ", question);
	pollFactory.getQuestion(question, function(data){
		console.log('show controller,', data);
		$scope.question = data;
	})


	console.log('I am able to load my indexController along with my index partial');

})