(function() {
  'use strict';

  angular
    .module('website')
    .directive('shopHeader', shopHeader);

  /** @ngInject */
  function shopHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      scope: {
          creationDate: '='
      },
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HeaderController() {
      // var vm = this;
      
    }
  }

})();
