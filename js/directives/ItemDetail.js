(function(){
	angular
	.module('app')
	.directive('itemDetail', itemDetail);

	function itemDetail() {
		var directive = {
			link: link,
			templateUrl: '/js/templates/detail.html',
			restrict: 'E',
      controller: DetailCtrl,
      controllerAs: item,
		};
		return directive;

		function link(scope, element, attrs) {
		/* */
		}
	}
})();