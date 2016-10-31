function httpRequestInterceptor(){
  this.responseError = function(){
    alert('error');
  };
}

angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor')
  });