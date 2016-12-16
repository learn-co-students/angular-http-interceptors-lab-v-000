function MyInterceptor() {
  this.responseError = function () {
    alert("Sorry, an error has occurred.")
  };
}

angular
  .module('app')
  .service('MyInterceptor', MyInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('MyInterceptor');
  });