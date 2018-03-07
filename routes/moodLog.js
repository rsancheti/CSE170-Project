var data = require('../data.json');

exports.view = function(req, res){
	var titleName = req.params.issueName;
	var oneData = data[titleName];
	//for (var i=0; i< oneData.moods.length; i++){
	//	console.log(oneData.moods);
	//}
  	res.render('moodLog', oneData);
};

exports.chart = function(req, res){
	var issue = req.params.issueName;
	var moods = data[issue].moods;
	res.json(moods);	
}

/*
exports.chart = function(req, res){
	var titleName = req.params.issueName;
	console.log(titleName);
	var data = require('../data.json');
	var oneData = data[titleName];
	//for (var i=0; i< oneData.moods.length; i++){
	//	console.log(oneData.moods);
	//}
	console.log(data[titleName]);
	/*var moods = [];
	for (var i=0; i<oneData.)
	res.json(oneData.moods);
};
*/


