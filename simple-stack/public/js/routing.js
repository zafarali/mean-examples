var app = angular.module('myApp.routers', []);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'views/home.html',
				controller: 'MainCtrl'
			})
			.when('/users', {
				templateUrl: 'views/user.html',
				controller: 'UserCtrl'
			});

	}]);