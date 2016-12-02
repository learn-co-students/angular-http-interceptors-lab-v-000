function MyInterceptor() {
    this.responseError = function (config) {
        // this will be fired before each request!
        alert("There is an error.");
    };
}

angular
    .module('app')
    .service('MyInterceptor', MyInterceptor)
    .config(function ($httpProvider) {

$httpProvider.interceptors.push('MyInterceptor');
    });
