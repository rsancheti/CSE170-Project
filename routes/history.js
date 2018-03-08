
exports.view = function(req, res){
	var titleName = req.params.issueName;
	var fs = require('fs');
  var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
	var oneData = data[titleName];
  	res.render('history', oneData);
};
