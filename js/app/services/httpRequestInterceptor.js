function myInterceptor(UserService) {
  this.responseError = function (config) {
    UserService
      .showError(config);
  };
}

angular
  .module('app')
  .service('myInterceptor', myInterceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('myInterceptor')
  })

// Make sure you run stubby -d config.yml to mock our backend.
// In this repo we've got a mocked backend with an endpoint that returns an error. 

// Our service is currently calling that endpoint.
// Make a HTTP interceptor that alerts the user if there is an error!