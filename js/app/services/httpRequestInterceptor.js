function httpRequestInterceptor () {
  this.responseError = function () {
    alert("There was an error!");
  }
}

angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });