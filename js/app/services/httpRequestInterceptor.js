function HttpRequestInterceptor() {
	this.responseError = function(config) {
		alert('There was an error.');
	}
}

angular
	.module('app')
	.service('HttpRequestInterceptor', HttpRequestInterceptor)
	.config(function($httpProvider) {
		$httpProvider.interceptors.push('HttpRequestInterceptor');
	});