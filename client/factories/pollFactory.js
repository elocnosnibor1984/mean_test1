myApp.factory('pollFactory', function($http){

	var user = [];

	var polls = [];
	var questions = [];

	var factory = {};

	factory.loginUser = function(data, callback){
		user.push(data);
		callback(console.log(user));
	}

	factory.logoutUser = function(callback){
		user = [];
		callback();
	}

	factory.getUser = function(callback){
		console.log("user in getUser", user);
		callback(user);
	}

	factory.getDummies = function(callback){
		$http.get('/dummies').then(function(data){
			mongooses = data.data;
			callback(data.data);
		});
	}

	factory.getPolls = function(callback){
		$http.get('/polls').then(function(data){
			polls.push(data);
			callback(polls);
		})
	}

	factory.getQuestion = function(question, callback){
		console.log("made it to getQuestion factory", question);
		$http.get('/question/'+ question).then(function(data){
			question = data;
			callback(question);
		})
	}


	factory.addPoll = function(info, callback){
		console.log("made it to addPoll");
		$http.post('/polls', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				//error: polls.push is not a function???
				console.log("polls: ", polls);
				console.log("data: ", data);
				polls.push(data);
				callback(polls);
			}
		})
	}

	factory.addQuestion = function(info, callback){
		console.log("made it to addQuestion", info);
		$http.post('/questions', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				questions.push(data);
				callback(questions);
			}
		})
	}

	return factory;
})