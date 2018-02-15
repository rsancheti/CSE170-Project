
/*
 * GET home page.
 */
var data = require('../mood.json');

exports.view = function(req, res){
  res.render('index', data);
};