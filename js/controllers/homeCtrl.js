app.controller('HomeCtrl', ['$scope','loginService', function($scope,loginService){
	$scope.logout = function(){
		loginService.logout();
	}
}]);