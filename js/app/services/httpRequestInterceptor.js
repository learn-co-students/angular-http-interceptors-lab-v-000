function httpInterceptor(){
  this.responseError = function(){
    alert('You have encountered an error.');
  };
}

angular.module('app')
  .service('httpInterceptor', httpInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('httpInterceptor');
  });