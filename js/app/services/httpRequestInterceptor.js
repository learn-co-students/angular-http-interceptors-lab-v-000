function httpInterceptor(){
  this.responseError = function(config){
    alert(config);
  };
};

angular
  .module('app')
  .service('httpInterceptor', httpInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('httpInterceptor');
  });
