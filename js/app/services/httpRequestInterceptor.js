function httpRequestInterceptor(){
  this.responseError = function(){
    alert("Well fuck, we have an error");
  }
}

angular
  .module("app")
  .service("httpRequestInterceptor", httpRequestInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push("httpRequestInterceptor");
  });