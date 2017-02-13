function TheInterceptionist() {
  this.responseError = function(config) {
    alert("Error!");
  }
}

angular
  .module('app')
  .service('TheInterceptionist', TheInterceptionist)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('TheInterceptionist');
  });
