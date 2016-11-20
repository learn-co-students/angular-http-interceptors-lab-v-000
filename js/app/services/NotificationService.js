function NotificationService() {
  this.showError = function(err) {
    alert(err);
  }
}

angular
  .module('app')
  .service('NotificationService', NotificationService);
