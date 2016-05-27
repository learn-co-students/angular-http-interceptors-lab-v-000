function HttpRequestIntercepter() {
  this.responseError = function (config) {
    alert(config);
  };
}

angular
  .module('app')
  .service('HttpRequestIntercepter', HttpRequestIntercepter)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('HttpRequestIntercepter');
  });
