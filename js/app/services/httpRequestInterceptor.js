function httpRequestInterceptor(NotificationService) {
  this.responseError = function (config) {
    NotificationService.showError(config);
  };
}
angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function ($httpProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });