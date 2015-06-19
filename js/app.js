/*angular app*/
'use strict';
var app = angular.module("LoginApp", ['ngRoute', 'ngMaterial']);


app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/login', {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    }).when('/home', {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    }).otherwise({
        redirectTo: '/login'
    });

}]);

app.run(function($rootScope, $location, loginService) {
    var routePermission = ['/home'];
    $rootScope.$on('$routeChangeStart', function() {
        if (routePermission.indexOf($location.path()) != -1) {

        	var connected = loginService.islogged();
        	connected.then(function(msg){
        		if(!msg.data)
        		$location.path('/login');	
        	});
            
        }
    })

});
