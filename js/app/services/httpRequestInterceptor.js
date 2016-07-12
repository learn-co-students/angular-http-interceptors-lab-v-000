function MyInterceptor() {
    this.responseError = function () {
      alert('Error!');
    };
}

angular
    .module('app')
    .service('MyInterceptor', MyInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('MyInterceptor');
    });
