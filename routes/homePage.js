
/*
 * GET home page.
 */

exports.view = function(req, res){
  var data = require('../data.json');
  res.render('homePage', data);
};
