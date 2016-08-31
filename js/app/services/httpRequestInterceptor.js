function httpRequestInterceptor() {
	this.responseError = function(){
		alert("Sorry, an error occurred");
	};
}

angular
	.module('app')
	.service('httpRequestInterceptor', httpRequestInterceptor)
	.config(function($httpProvider){
		$httpProvider.interceptors.push('httpRequestInterceptor');
	});