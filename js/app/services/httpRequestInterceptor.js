function Interceptor() {
	this.responseError = function(config) {
		alert(config);
	}
}

angular
	.module('app')
	.service('Interceptor', Interceptor)
	.config(function($httpProvider){
		$httpProvider.interceptors.push('Interceptor');
	});