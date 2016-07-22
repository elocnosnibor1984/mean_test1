var polls = require('./../controllers/mongooses.js');

module.exports = function(app){
	app.post('/polls', function(req, res){
		console.log("made it to app.post /polls");
		polls.addPoll(req, res);
	})

	app.post('/questions', function(req, res){
		console.log("made it to app.post /questions");
		polls.addQuestion(req, res);
	})

	app.get('/polls', function(req, res){
		console.log("made it to app.get /polls");
		polls.getPolls(req, res);
	})

	app.get('/question/:id', function(req, res){
		console.log("made it to app.get /question");
		polls.getQuestion(req, res);
	})
}