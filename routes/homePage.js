
/*
 * GET home page.
 */

exports.view = function(req, res){
  //forces it to read it from the file again 
  var fs = require('fs');
  var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  // var data = require('../data.json');
  console.log(data)
  res.render('homePage', {objects: data});
};
