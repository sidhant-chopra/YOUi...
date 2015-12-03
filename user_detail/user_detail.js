angular.module('app.user_detail',[])

.config(function($stateProvider) {
    
    $stateProvider
        .state('user_detail', {
            url: '/detail/:username',
            templateUrl: 'user_detail/user_detail.html',
            controller: 'userDetailController'
        })
});


