function httpInterceptor() {
  this.responseError = function () {
        alert('Error');
    };
}

angular
  .module('app')
  .service('httpInterceptor', httpInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
  });
