var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

// set database dependencies.
var Firebase = require('firebase');
var myRootRef = new Firebase('https://livedj01.firebaseio.com/');

//route express
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// get started page
app.get('/', routes.index);

// view room
app.get('/rooms/:roomid', routes.room);

//change room
app.post('/change', routes.changeRoom);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
