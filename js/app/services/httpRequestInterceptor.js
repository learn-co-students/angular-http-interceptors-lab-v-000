function HttpInterceptor() {
  this.responseError = function (config) {
    alert('')
  };
}

angular
    .module('app')
    .service('HttpInterceptor', HttpInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    });
