exports.view = function(req, res){
	// console.log(req.body);
	var json = JSON.stringify(req.body);
	// console.log(data);

	console.log(json);
	var fs = require('fs');
	fs.writeFile('data.json', json, 'utf8', function(err){
		console.log(err);
		res.json({});
	});
};
