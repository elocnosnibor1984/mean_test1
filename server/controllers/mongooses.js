var mongoose = require('mongoose');
var Polldb = mongoose.model('Pollsdb');
var Questiondb = mongoose.model('Questionsdb');

module.exports = (function() {
	return {
		addPoll: function(req,res){
			// console.log("hello from addPoll");
			var new_poll = new Polldb({name: req.body.name, question: req.body.question, created_at: req.body.created_at});
			new_poll.save(function(err){
				if(err){
					console.log("failed to add poll to db");
					res.json(err);
				} else {
					console.log("added poll to the db");
				}
			})
		},

		addQuestion: function(req,res){
			console.log("hello from addQuestion");
			console.log("new_question: ", req.body.question, req.body.option1);
			var new_question = new Questiondb({question: req.body.question, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4, created_at: req.body.created_at});
			new_question.save(function(err){
				if(err){
					console.log("failed to add question to db");
					res.json(err);
				} else {
					console.log("added question to the db");
				}
			})
		},

		getQuestion: function(req,res){
			Polldb.find({ question: req.params.question}, function(err, result){
				if(err){
					console.log("this is teh mongoose you are looking for", result);
				} else {
					console.log('this is our mongoose',result);
					res.json(result);
				}
			})
		},

		getPolls: function(req,res){
			console.log("hello from getPolls");
			Polldb.find({}, function(err, result){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					console.log("got polls from db");
					res.json(result);
				}
			})
		}

		// getMongooses: function(req, res){
		// 	mongooseDb.find({}, function(err, mongooses){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('getmongooses function mongooses controller');
		// 		} else {
		// 			res.json(mongooses);
		// 		}
		// 	})
		// }
	}
})();