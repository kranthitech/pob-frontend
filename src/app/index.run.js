(function() {
  'use strict';

  angular
    .module('payOnBehalf')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
    
    
  }

})();
