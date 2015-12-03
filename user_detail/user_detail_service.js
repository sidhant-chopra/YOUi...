angular.module('app.user_detail').service('userDetailService', function($http) {
	 this.getUserProfile = function(userName) {
	  return $http.get('https://api.github.com/users/' + userName).then(
	  	function(response) {
	  		return response.data;
      })
  };
});