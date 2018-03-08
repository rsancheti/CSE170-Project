
/*
 * GET home page.
 */

exports.view = function(req, res){
  //forces it to read it from the file again
  var fs = require('fs');
  var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  for(key in data){
    data[key].taskStatus = Boolean(data[key].taskStatus);
  }

console.log(data);


  res.render('homePage', {objects: data});
};
