function NotificationService() {
	this.showError = function (config) {
		alert(config);
	};
}

angular
	.module('app')
	.service('NotificationService', NotificationService);
