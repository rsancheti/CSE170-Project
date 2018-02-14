var data = require("data.json");

exports.view = function(req, res){
	console.log("here");
	//res.render('index');
	res.render('history2', data);
};
