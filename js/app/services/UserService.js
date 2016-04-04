function UserService($http) {
	this.getUser = function () {
		return $http.get('/rest/user');
	};

  this.showError = function (error) {
    alert.error
  }
}

angular
	.module('app')
	.service('UserService', UserService);