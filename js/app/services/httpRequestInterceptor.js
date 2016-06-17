function MyInterceptor() {
    this.responseError = function () {
      alert('there has been an error')


    };
}


angular
    .module('app')
    .service('MyInterceptor', MyInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('MyInterceptor');
    });
