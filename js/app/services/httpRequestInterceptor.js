function interceptErrors() {
  this.responseError = function(config) {
    alert("error!");
  }
}

angular
  .module('app')
  .service("interceptErrors", interceptErrors)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('interceptErrors');
    });