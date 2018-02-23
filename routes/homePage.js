
/*
 * GET home page.
 */

exports.view = function(req, res){
  var data = require('../data.json');
  var oneData = data[1];
  res.render('homePage', data);
};
