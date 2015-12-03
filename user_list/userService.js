angular.module('app.users').service('userService', function($http) {
	this.getUserList = function() {
		return $http.get('https://api.github.com/search/users?q=repos:%3E10000').then(
			function(response) {
				return response.data.items;
			});
	};	
});