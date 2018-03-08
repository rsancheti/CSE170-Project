
/*
 * GET home page.
 */

exports.view = function(req, res){
  	var titleName = req.params.issueName;
    var fs = require('fs');
    var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));	var oneData = data[titleName];
	  console.log(oneData);
  	res.render('issue', oneData);
};
