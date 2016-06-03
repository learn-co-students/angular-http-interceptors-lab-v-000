function RequestInterceptor() {
  this.responseError = function(config) {
     alert("An error has occured.");
  }
}

angular
     .module('app')
     .service('RequestInterceptor', RequestInterceptor)
     .config(function($httpProvider) {
       $httpProvider.interceptors.push('RequestInterceptor');
     });
