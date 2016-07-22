// LOAD DATA
var friendData = require('../data/friends.js')
var path = require('path');

// ROUTING
module.exports = function(app) {
	app.get('/api/friends', function(req,res){
		res.json(friendData);
	})
	app.post('api/friends', function(req,res){
		//LOGIC FOR FRIENDS GOES HERE?
	})
	app.post('/api/clear', function(req, res){
		friendData = [];
		console.log(friendData);
	})
}