function httpRequestInterceptor() {
  this.responseError = function () {
    alert("Error!");
  }
}


angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor')
  })

// Make sure you run stubby -d config.yml to mock our backend.
// In this repo we've got a mocked backend with an endpoint that returns an error. 

// Our service is currently calling that endpoint.
// Make a HTTP interceptor that alerts the user if there is an error!