(function(){
	angular
	.module('app')
	.controller('ListCtrl', ['$http', '$uibModal', ListCtrl]);

	function ListCtrl($http, $uibModal) {
		var list = this;
		var uri = 'http://challenge.hexiacloud.com/api/challenge1/';

		$http
		.get(uri + 'list.json')
		.then(function(response) {
			list.items = response.data;
		});

		list.itemClicked = function(item) {
			console.log(item);
		};

		list.showDetail = function(item, size, parentSelector) {
			var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
			var modalInstance = $uibModal.open({
				animation: list.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'myModalContent.html',
				controller: 'ModalCtrl',
				controllerAs: '$ctrl',
				size: size,
				appendTo: parentElem,
				resolve: {
					item : function() {
						return item;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				console.log(selectedItem);
				list.selected = selectedItem;
			}, function () {
			});
		};

		list.remove = function(item) {
			var index = list.items.indexOf(item);
		  list.items.splice(index, 1);
		};
	}
})();