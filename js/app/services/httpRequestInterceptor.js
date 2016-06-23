function MyInterceptor() {
   this.responseError = function(config) {
     alert('Something went wrong!');
   } 
}

angular
  .module('app')
  .service('MyInterceptor', MyInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('MyInterceptor');
  });