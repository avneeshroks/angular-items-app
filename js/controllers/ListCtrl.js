(function(){
	angular
	.module('app')
	.controller('ListCtrl', ['$http', '$uibModal', '$filter', ListCtrl]);

	function ListCtrl($http, $uibModal, $filter) {
		var list = this;
		var uri = 'http://challenge.hexiacloud.com/api/challenge1/';

		$http
		.get(uri + 'list.json')
		.then(function(response) {
			list.items = response.data;
			list.items  = $filter('orderBy')(list.items, 'timestamp')
		});

		list.itemClicked = function(item) {
			console.log(item);
		};

		list.showDetail = function(item, size, parentSelector) {
			var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
			var modalOptions = {
				animation: list.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'js/templates/detail.html',
				controller: 'ModalCtrl',
				controllerAs: '$ctrl',
				backdrop:'static',
				size: size,
				appendTo: parentElem,
				resolve: {
					item : function() {
						return item;
					}
				}
			};
			var modalInstance = $uibModal.open(modalOptions);

			modalInstance.result.then(function(item) {
				if(item.action == 'DELETE') {
					list.deleteItem(item.item);
				} else {
					list.pinItem(item.item);
				}
			}, function (item) {
			});
		};

		list.remove = function(item) {
			var index = list.items.indexOf(item);
		  list.items.splice(index, 1);
		};

		list.deleteItem = function(item) {
			list.remove(item);
		}

		list.pinItem = function(item) {
			list.remove(item);
			list.items.unshift(item);
		}
	}
})();