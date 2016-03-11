function HttpRequestInterceptor() {
  this.responseError = function(config) {
    alert('There was a non-descript error! Karma style!');
  }
}
angular
  .module('app')
  .service('HttpRequestInterceptor', HttpRequestInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('HttpRequestInterceptor');
  });
