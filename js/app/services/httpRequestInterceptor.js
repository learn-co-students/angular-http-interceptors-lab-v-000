function httpInterceptor(){
  this.responseError = function(){
    alert("Woah! Something went wrong")
  };
};

angular
  .module('app')
  .service('httpInterceptor', httpInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('httpInterceptor')
  });
