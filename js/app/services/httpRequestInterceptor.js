function httpRequestInterceptor(){
  
  this.responseError = function(config){
    alert("There appears to be an Error!"); 
  };
}

angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor');

  });