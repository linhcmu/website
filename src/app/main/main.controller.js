(function() {
  'use strict';

  angular
    .module('website')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.product = {
      name:'Store Name',
      image : 'assets/images/iphone.jpg',
      description : 'Some description'
    };
  }
})();
