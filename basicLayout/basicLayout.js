(function() {
    'use strict';

    angular
        .module('FM.basicLayout', ['ngRoute'])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/basicLayout', {
                templateUrl: 'basicLayout/basicLayout.html',
                controller: 'MapControlsController',
                controllerAs: 'vm'
            });
    }
})();
