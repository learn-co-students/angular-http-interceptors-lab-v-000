function  NotificationService() {
  this.showError = function(error) {
    alert(error);
  }
}

angular
  .module('app')
  .service('NotificationService', NotificationService);