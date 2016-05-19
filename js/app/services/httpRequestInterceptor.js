function httpRequestInterceptor(NotifyService) {
  this.responseError = function(config) {
    NotifyService.showError(config);
  }
}

angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });