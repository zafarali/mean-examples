var app = angular.module('myApp.controllers', []);
	app.controller('MainCtrl', ['$scope', function($scope){
		$scope.title = 'This is so mean';
	}]);
	app.controller('UserCtrl', ['$scope', function($scope){
		$scope.title = 'User Controller takes over';
	}]);