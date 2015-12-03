angular.module('app.users').controller('userController', function($scope, userService) {
	
	userService.getUserList().then(function(response) {
		$scope.userList = response;
	});
});	