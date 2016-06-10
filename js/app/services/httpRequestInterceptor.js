function RequestInterceptor(){
  this.responseError = function (){
    alert('Error');
  };
}

angular
  .module('app')
  .service('RequestInterceptor', RequestInterceptor)
  .config(function ($httpProvider){
    $httpProvider.interceptors.push('RequestInterceptor');
  });