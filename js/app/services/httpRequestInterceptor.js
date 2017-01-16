function httpRequestInterceptor () {
  this.responseError = function(config) {
    alert("There is an error with your request!");
  }
}

angular
.module('app')
.service('httpRequestInterceptor', httpRequestInterceptor)
.config(function($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
