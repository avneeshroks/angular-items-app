(function(){
	angular
	.module('app')
	.controller('ListCtrl', ['$http', ListCtrl]);

	function ListCtrl($http) {
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

		list.showDetail = function(item) {
			console.log(item);
		};

		list.remove = function(item) {
			var index = list.items.indexOf(item);
		  list.items.splice(index, 1);
		};
	}
})();