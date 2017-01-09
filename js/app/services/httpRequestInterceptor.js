function httpRequestInterceptor() {
  this.responseError = function(config) {
    alert('You have an error!');
  }
}

angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });
