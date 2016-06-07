function httpRequestInterceptor (){
  this.responseError = function(){
    alert("it's broke!");
  };
}

angular
    .module('app')
    .service('httpRequestInterceptor', httpRequestInterceptor)
    .config(function($httpProvider){
      $httpProvider.interceptors.push('httpRequestInterceptor');
    });
