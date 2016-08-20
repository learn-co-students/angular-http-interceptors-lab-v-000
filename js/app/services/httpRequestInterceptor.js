function httpInterceptor() {
  this.responseError = function() {
    alert('Error Occured')
  };
};

angular
  .module('app ')
  .service('httpInterceptor', httpInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor')
  });
