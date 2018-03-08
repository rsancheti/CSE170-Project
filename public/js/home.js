$(document).ready(function() {
	initializePage();
})

function intializePage() {
	var fs = require('fs');
  var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
}
