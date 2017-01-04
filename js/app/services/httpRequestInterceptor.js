function httpRequestInterceptor() {
  this.responseError = function (config) {
      alert('There has been an errror!')
    }
  }

angular
    .module('app')
    .service('httpRequestInterceptor', httpRequestInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    });
