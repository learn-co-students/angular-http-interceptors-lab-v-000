function MyInterceptor() {
    this.responseError = function () {
        NotificationService
            alert 'error';
    };
}

angular
	.module('app')
	.service('MyInterceptor', MyInterceptor);
	.config(function($httpProvider) {
		$httpProvider.interceptors.push('MyInterceptor');