function HttpRequestInterceptor() {
  this.responseError = function(config) {
    alert(config);
  }
}

angular
  .module('app')
  .service('HttpRequestInterceptor', HttpRequestInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('HttpRequestInterceptor');
  });
