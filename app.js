
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var homePage = require('./routes/homePage');
var homePage2 = require('./routes/homePage2');
var createNew = require('./routes/createNew');
var moodLog = require('./routes/moodLog');
var history = require('./routes/history');
var dailyEntry = require('./routes/daily-entry');
var dailyMood = require('./routes/daily-mood');
var login = require('./routes/login');
var signup = require('./routes/signup');
var issue = require('./routes/issue');
var moodLogSplash = require('./routes/moodLogSplash');
var issue2 = require('./routes/issue2');
var get_data_json = require('./routes/get_data_json');
var set_data_json = require('./routes/set_data_json');
//var history = require('./routes/history');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/homePage', homePage.view);
app.get('/homePage2', homePage2.view);
app.get('/moodLog/:issueName', moodLog.view);
app.get('/chart/:issueName', moodLog.chart);
app.get('/moodLogSplash', moodLogSplash.view);
app.get('/history/:issueName', history.view);
app.get('/createNew', createNew.view);
app.get('/daily-mood', dailyMood.view);
app.get('/daily-entry', dailyEntry.view);
app.get('/signup', signup.view);
app.get('/login', login.view);
app.get('/issue/:issueName', issue.view);
app.get('/issue2/:issueName', issue2.view);
app.get('/get_data_json', get_data_json.view);


app.post('/set_data_json', set_data_json.view);
app.post('/storeMood', dailyEntry.save);
app.post('/storeIssue', createNew.save);
//app.get('/', history.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
