function HttpRequestInterceptor() {

}

angular
  .module('app')
  .service('HttpRequestInterceptor', HttpRequestInterceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push.('HttpRequestInterceptor')
  });