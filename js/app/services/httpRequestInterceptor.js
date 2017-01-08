angular.module('app')
  .service('httpRequestInterceptor', function () {
    this.responseError = config => {
      window.alert('error! error!')
    }
  })
  .config($httpProvider => {
    $httpProvider.interceptors.push('httpRequestInterceptor')
  })
