function ErrorInterceptor() {
  this.responseError = function() {
    alert("You have an error");
  };
}

angular
  .module('app')
  .service('ErrorInterceptor', ErrorInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('ErrorInterceptor');
  });
