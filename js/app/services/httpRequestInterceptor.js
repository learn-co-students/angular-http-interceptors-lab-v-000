function MyHttpIntercepter() {

  this.responseError = function(config) {
    window.alert('There was an error');
  }

}

angular
  .module('app')
  .service('MyHttpIntercepter', MyHttpIntercepter)
  .config(function ($httpProvider) {
		$httpProvider.interceptors.push('MyHttpIntercepter');
	});
