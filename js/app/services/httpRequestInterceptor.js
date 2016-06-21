function RequestInterceptor(){
  this.responseError = function(){
      alert('There is an error!')
  };
};

angular
  .module('app')
  .service('RequestInterceptor', RequestInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('RequestInterceptor');
  });