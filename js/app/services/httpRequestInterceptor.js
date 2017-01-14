function MyInceptor() {
  this.responseError = function () {
    this.alert("error")
  }
}

angular
  .module("app")
  .service("MyInceptor", MyInceptor)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push("MyInceptor")
  })