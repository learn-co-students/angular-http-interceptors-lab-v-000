function MyInterceptor(){
  this.responseError = function(err) {
    alert(err);
  };
}

angular
  .module('app')
  .service('MyInterceptor', MyInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('MyInterceptor');
  });