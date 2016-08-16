function httpRequestInterceptor(NotificationService) {
    this.responseError = function (config) {
      alert('testing!')
    };
}
 
angular
    .module('app')
    .service('httpRequestInterceptor', httpRequestInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    });