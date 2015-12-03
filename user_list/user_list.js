angular.module('app.users',[])

.config(function($stateProvider) {
    
    $stateProvider
        .state('user_list', {
            url: '/',
            templateUrl: 'user_list/user_list.html',
            controller: 'userController'
        })
});


