function httpRequestInterceptor() {
    this.responseError = function (config) {
        alert("Error: An error has occurred: There was an error!");
    };
}
 
angular
    .module('app')
    .service('httpRequestInterceptor', httpRequestInterceptor)
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('httpRequestInterceptor');
    });