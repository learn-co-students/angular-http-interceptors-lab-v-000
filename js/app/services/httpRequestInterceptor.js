function errorInterceptor() {
  this.responseError = function () {
    alert('Error!');
  }
}

angular
  .module('app')
  .service('errorInterceptor', errorInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('errorInterceptor');
  });