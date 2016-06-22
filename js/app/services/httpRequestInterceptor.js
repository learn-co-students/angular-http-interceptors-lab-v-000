function httpRequestInteceptor() {
  this.responseError = function(config) {
    alert('There was an error.');
  };
}

angular
  .module('app')
  .service('httpRequestInteceptor', httpRequestInteceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInteceptor');
  });