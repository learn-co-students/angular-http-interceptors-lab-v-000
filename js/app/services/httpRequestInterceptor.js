function httpInterceptor(){
  this.responseError = function (){
    alert("There was an error!");
  }
}

angular
  .module('app')
  .service('httpInterceptor', httpInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('httpInterceptor');
  });