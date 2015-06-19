'use strict';

app.factory('loginService', function($http,$location,sessionService){
	return{
		login : function(user,scope){
			var $promise = $http.post("user.php",user);
			$promise.then(function(msg){
				var uid = msg.data;
				if(uid){
					//scope.msgText ="Correct Information";
					sessionService.set('uid',uid);
					$location.path('/home');
				}
				else{
					//scope.msgText ="not prooper Information";
					$location.path('/login');
				}
			});
		},
		logout : function(){
			sessionService.destroy('uid');
			$location.path('/login')
		},
		islogged : function(){
			var $checkSessionServer = $http.post('check_session.php');
			return $checkSessionServer;
			/*if(sessionService.get('user'))
				return true;*/
		}		
	};
});