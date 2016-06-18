function MyInterceptor() {
    this.responseError = function (config) {
      alert('there has been an error!')
        // this will be fired before each request!
    };
}
 
angular
    .module('app')
    .service('MyInterceptor', MyInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('MyInterceptor');
    });
