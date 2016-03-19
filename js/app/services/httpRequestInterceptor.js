function HttpRequestInterceptor(){
  this.responseError = function() {
    alert('Error!');
  }
}

angular.module('app').service('HttpRequestInterceptor', HttpRequestInterceptor)
       .config(function($httpProvider){
                $httpProvider.interceptors.push('HttpRequestInterceptor');
});