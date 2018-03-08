var fs = require('fs');

exports.view = function(req, res){

	fs.readFile('data.json', function read(err, data) {
    if (err) {
        throw err;
    }
		var json = JSON.parse(data);
		res.json(json);
	});
};
