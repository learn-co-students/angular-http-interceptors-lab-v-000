function NotifyService() {
  this.showError = function(config) {
    alert("error!");
  };
}

angular
  .module('app')
  .service('NotifyService', NotifyService)