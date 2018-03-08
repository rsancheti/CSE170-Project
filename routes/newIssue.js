
/*
 * GET home page.
 */

exports.view = function(req, res){
	var fs = require('fs');
  var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
	var oneData = data[Object.keys(data)[Object.keys(data).length-1]];
  	res.render('newIssue', oneData);
};
