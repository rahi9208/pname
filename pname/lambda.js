let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log("My Log");
	callback(null,'Successfully executed');
}