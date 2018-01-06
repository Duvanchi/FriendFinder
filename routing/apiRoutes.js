// Dependency && Linking file
var path = require("path");
var friends = require("../app/friends.js");

// Routing
module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
		console.log(friends);
	});

	app.post("/api/friends", function(req, res) {

		// Currently having an issue here.  For some reason when the userData object from the 
		// survey page is getting posted to friends api, I'm getting this for the scores array -- 'scores[]': [ '1', '1', '1', '1', '1', '1' ]
		// I'm not sure where those square brackets ('scores[]') are coming from.
		// They don't appear in the console log on the browser page, but they do in the friends api.
		// It's really been holding me up because I can't test the comparison function without getting errors. 
		// I know I can fix this, but I don't know how yet.
		
		var userInput = req.body;
		console.log(userInput);
		// console.log(req.scores);

			var userResponse = userInput.scores;
			console.log(userResponse);

			// Right now this segment is hypothetical.
			// Can't test because of above error

			// var matchName = '';
			// var matchImage = '';
			// var initialDifference = 10000;

			// for (var i = 0; i < friends.length; i++) {

			// 	var diff = 0;
			// 	for (var m = 0; m < userResponses.length; m++) {
			// 		diff += Math.abs(friends[m].scores[m] - userResponses[m]);
			// 	}

			// 	if (diff < initialDifference) {
			// 		difference = diff;
			// 		matchName = friends[i].name;
			// 		matchImage = friends[i].photo;

			// 	}
			// }

		res.json(userInput);
		friends.push(userInput);
		
	});
};