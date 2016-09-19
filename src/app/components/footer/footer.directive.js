(function() {
  'use strict';

  angular
    .module('website')
    .directive('shopFooter', shopFooter);

  /** @ngInject */
  function shopFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: shopFooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function shopFooterController() {
      // var vm = this;
      
    }
  }

})();
