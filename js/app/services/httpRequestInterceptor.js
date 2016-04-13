function ErrorInterceptor() {
    this.responseError = function (config) {
        alert(config);
    };
}
 
angular
    .module('app')
    .service('ErrorInterceptor', ErrorInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('ErrorInterceptor');
    });