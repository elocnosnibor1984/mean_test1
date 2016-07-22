myApp.controller('createController', function($scope, pollFactory, dummyFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	// var user = "";
	var user;

	// console.log(user);
	pollFactory.getUser(function(data){
		user = data;
		console.log("in getUser:", user)
	})

	// console.log("user: ", user);

	$scope.createPoll = function(){
		created_at = new Date();
		name = user[0].name;
		question = {
			question: $scope.q.question,
			option1: $scope.q.option1,
			option2: $scope.q.option1,
			option3: $scope.q.option1,
			option4: $scope.q.option1,
			created_at: created_at
		}
		var poll = {
			name: name,
			question: $scope.q.question,
		};
		// console.log("poll on create Controller:",poll);
		pollFactory.addPoll(poll, function(data){
			$scope.q = {};
		})
		console.log("question on createController:", question);
		pollFactory.addQuestion(question, function(data){
			$scope.q = {};
		})
		console.log("user in createPoll: ", name);
	}

	console.log('I am able to load my indexController along with my index partial');

	
})