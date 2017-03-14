(function(){
	angular
	.module('app')
	.controller('DetailCtrl', DetailCtrl);

	function DetailCtrl() {
		var item = this;

    item.$init = function() {
      console.log(item);
    };

    item.ok = function () {
      item.close({$value: item.selected.item});
    };

    item.cancel = function () {
      item.dismiss({$value: 'cancel'});
    };
	}
})();