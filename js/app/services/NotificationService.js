function NotificationService(){
  this.showError = function(){
    alert('You recieved an error!');
  }
}

angular
  .module('app')
  .service('NotificationService', NotificationService);
