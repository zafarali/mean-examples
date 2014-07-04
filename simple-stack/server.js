
//Module to Import
var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');

//Configuration

var db =require('./config/db');

//sets up the port our application will run on
var port = process.env.PORT || 8080;

//will connect to the MongoDB instance we run
//mongoose.connect(db.url);

app.configure(function(){
	//we serve our public files from this directory
	//this turns public/index.html --> index.html
	app.use(express.static(__dirname+'/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

//route configuration happens in this file
require('./app/route.js')(app); 

//kick start the application
app.listen(port);
console.log('Listening on localhost:'+port);
module.exports = app;