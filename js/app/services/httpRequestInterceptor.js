function httpRequestInterceptor() {
  this.responseError = function(response) {
    alert('There has been an error.');
  }
}

angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });
