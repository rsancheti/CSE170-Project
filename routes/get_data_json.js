exports.view = function(req, res){
	var data = require('../data.json');
  res.json(data);
};
