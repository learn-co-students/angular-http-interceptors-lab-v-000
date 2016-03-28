function firstInterceptor(){
  this.responseError = function(config){
    alert(config);
  };
}

angular
  .module('app')
  .service('firstInterceptor', firstInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('firstInterceptor');
  });