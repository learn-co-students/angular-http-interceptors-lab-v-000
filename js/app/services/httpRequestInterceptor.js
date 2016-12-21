function RequestIntercepter() {
  this.responseError = function(config) {
    alert("There was an error!");
  }
}

angular
    .module('app')
    .service('RequestIntercepter', RequestIntercepter)
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('RequestIntercepter');
    });
