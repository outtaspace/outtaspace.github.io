(function() {
  'use strict';

  angular
      .module('FM', ['ngRoute', 'FM.basicLayout'])
      .config(config);

  function config($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/basicLayout'});
  }
})();
