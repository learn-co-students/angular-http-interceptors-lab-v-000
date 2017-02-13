function theInterceptor() {
  this.responseError = function (config) {
    alert("there was an error");
  };
};

angular
  .module('app')
  .service('theInterceptor', theInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('theInterceptor');
  });
