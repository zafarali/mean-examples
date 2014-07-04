				//this app is passed in from server.js
				//it is an express() object
module.exports = function(app){

	//API routing
	app.get('/api/users', function(request, result){
			//do some Database calling from here
		result.send('No data here sorry!');
	});

	//Front end routing
	app.get('*', function(request, result){
		result.sendfile('./public/index.html');
	})
};