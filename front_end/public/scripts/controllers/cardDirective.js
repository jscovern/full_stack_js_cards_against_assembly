angular.module('CardsAgainstAssembly')
	.directive('wdiCard', wdiCard)
	.directive('showCard',showCard);

	function wdiCard() {
		var directive = {
			restrict: 'E',
			replace: true,
			templateUrl: "templates/cardDirective.html",
			scope: {
				question: '@'
			}
		};
		return directive;
	}

	function showCard() {
		var directive = {
			restrict: 'E',
			replace: true,
			templateUrl: "templates/cardShowDirective.html",
			scope: {
				question: '@',
				answer: '@'
			}
		};
		return directive;
	}