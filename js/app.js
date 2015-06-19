/*angular app*/
'use strict';
var app = angular.module("LoginApp",['ngRoute','ngMaterial']);


app.config(['$routeProvider',function($routeProvider) {

	$routeProvider.when('/login',{
		templateUrl : "partials/login.html",
		controller : "LoginCtrl"
	}).otherwise({
		redirectTo:'/login' 
	});
	
}]);