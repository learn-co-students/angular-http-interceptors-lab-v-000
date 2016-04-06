function httpRequestInterceptor() {
  this.responseError = function() {
    console.log("That's an Error!");
  };
}

angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });
