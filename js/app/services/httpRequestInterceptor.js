function MyInterceptor(NotificationService){
  this.responseError = function(config){
    NotificationService.showError(config);
  };
}

angular
  .module('app')
  .service('MyInterceptor', MyInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('MyInterceptor');
  });
