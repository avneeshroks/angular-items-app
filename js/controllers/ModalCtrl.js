(function() {
  angular
  .module('app')
  .controller('ModalCtrl', ['$uibModalInstance', 'item', ModalCtrl]);

  function ModalCtrl($uibModalInstance, item) {
    var $ctrl = this;

    $ctrl.item = item;

    $ctrl.delete = function () {
      var data = {
        item : $ctrl.item,
        action : 'DELETE',
      };
      $uibModalInstance.close(data);
    };

    $ctrl.pin = function () {
      var data = {
        item : $ctrl.item,
        action : 'PIN',
      };
      $uibModalInstance.close(data, 'PIN');
    };
  }
})();