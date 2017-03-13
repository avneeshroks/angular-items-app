(function(){
	angular
	.module('app')
	.directive('itemList', itemList);

	function itemList() {
		var directive = {
			link: link,
			templateUrl: 'js/templates/list.html',
			restrict: 'E',
      controller : 'ListCtrl',
      controllerAs : 'list',
		};
		return directive;

		function link(scope, element, attrs, controller) {

		}
	}
})();