var data = require('../history.json');

exports.view = function(req, res){
  res.render('history', data);
};