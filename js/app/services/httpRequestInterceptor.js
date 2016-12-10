function httpRequestInterceptor() {
 this.responseError = function (config) {
          alert(config);
    };
  }

angular
    .module('app')
    .service('httpRequestInterceptor', httpRequestInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    });
    // This last call pushes our new interceptor into the $httpProvider interceptor array
