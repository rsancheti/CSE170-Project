
/*
 * GET home page.
 */

exports.view = function(req, res){
  //forces it to read it from the file again
  var fs = require('fs');
  var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  console.log(data);

  console.log(data)
  res.render('createNew', {objects: data});
};

exports.save = function(req, res){
  var fs = require('fs');
	var reqData = JSON.parse(req.param('data', null));
	console.log(reqData);

  var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

	data[reqData.title] = reqData;




	var json = JSON.stringify(data, null, 4);



	fs.writeFile('./data.json', json, function(err){
		if (err) throw err;
		console.log('complete adding new mood');
	});
	res.json({'success': true});

}
