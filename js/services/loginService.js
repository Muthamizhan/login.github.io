'use strict';

app.factory('loginService', function($http){
	return{
		login : function(user,scope){
			var $promise = $http.post("user.php",user);
			$promise.then(function(msg){
				if(msg.data == "succes")
					scope.msgText ="Correct Information";
				else
					scope.msgText ="not prooper Information";
			});
		}		
	};
});