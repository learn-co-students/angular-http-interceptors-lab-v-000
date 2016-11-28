function httpInterceptor(){
  this.responseError = function(){
    alert("Oooops");
  };
}

angular
  .module('app')
  .service('httpInterceptor', httpInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('httpInterceptor');
  });
