var app = angular.module('myApp.services', []);
	app.factory('UserService', ['$http', function($http){
		var toReturn = {};

		//does a GET request
		toReturn.get = function(){
			return $http.get('/api/users');
		}

		//does a POST request
		toReturn.create = function(data){
			return $http.post('/api/users', data);
		}

		//does a 'DELETE' request
		toReturn.delete = function(uID){
			return $http.delete('/api/users/'+id);
		}

		return toReturn;
	}]);