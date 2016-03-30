function httpRequestInterceptor() {
  this.responseError = function(config) {
    alert(config);
  };
}

angular
  .module('app')
  .service('httpRequestInterceptor', httpRequestInterceptor)
  .config(function ($httpProvider) {
		$httpProvider.interceptors.push('httpRequestInterceptor');
	});
