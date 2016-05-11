function ErrorInterceptor(){
  this.responseError = function(){
    alert('Error');
  }
}

angular
  .module('app')
  .service('ErrorInterceptor', ErrorInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('ErrorInterceptor');
  });
