(function() {
  angular
  .module('app')
  .controller('ModalCtrl', ['$uibModalInstance', 'item', ModalCtrl]);

  function ModalCtrl($uibModalInstance, item) {
    var $ctrl = this;

    $ctrl.item = item;

    $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };   
  }
})();