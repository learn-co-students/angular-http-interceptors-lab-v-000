function MyInterceptor(){
  this.responseError = function(config){
    alert("There was an error!");
  };
}

angular
  .module('app')
  .service('MyInterceptor', MyInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('MyInterceptor');
  });
