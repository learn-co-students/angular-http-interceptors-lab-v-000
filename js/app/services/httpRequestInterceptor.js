function httpRequestIntercepter() {
	this.responseError = function(config) {
		alert("Error!");
	}
}

angular
	.module('app')
		.service("httpRequestIntercepter", httpRequestIntercepter)
		.config(function($httpProvider){
			$httpProvider.interceptors.push('httpRequestIntercepter')
		});


// angular
//     .module('app')
//     .service('httpRequestIntercepter', httpRequestIntercepter)
//     .config(function ($httpProvider) {
//         $httpProvider.interceptors.push('httpRequestIntercepter');
//     });