'use strict';

app.controller('LoginCtrl', ['$scope','loginService', function($scope,loginService){
	$scope.msgText = '';
	$scope.login=function(user){
		loginService.login(user,$scope);
	};
}]);