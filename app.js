
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var createNew = require('./routes/createNew');
var submitNew = require('./routes/submitNew');
var moodLog = require('./routes/moodLog');
var history = require('./routes/history');
var settings = require('./routes/settings');
var logOut = require('./routes/logOut');
var profilePic = require('./routes/profilePic');
var updateInfo = require('./routes/updateInfo');
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
app.get('/moodlog', moodLog.view);
app.get('/history', history.view);
app.get('/createNew', createNew.view);
app.get('/submitNew', submitNew.view);
app.get('/settings', settings.view);
app.get('/logOut', logOut.view);
app.get('/profilePic', profilePic.view);
app.get('/updateInfo', updateInfo.view);
//app.get('/', history.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
