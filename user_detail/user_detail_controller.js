angular.module('app.user_detail').controller('userDetailController', function($scope, userDetailService, $stateParams) {
	userDetailService.getUserProfile($stateParams.username).then(function(response) {
		$scope.userProfile = response;
	});
	
});	