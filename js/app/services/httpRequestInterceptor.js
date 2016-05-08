function myInterceptor(){

  this.responseError = function(config){
    alert('error!');
  }

}

angular
  .module('app')
  .service('myInterceptor', myInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('myInterceptor');
  });
