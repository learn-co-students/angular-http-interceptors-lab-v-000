function MyInterceptor() {

this.responseError = function (config) {
  alert(config);
  return config;
};
}

angular 
  .module('app')
  .service('MyInterceptor', MyInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push(‘MyInterceptor’);
  }); 