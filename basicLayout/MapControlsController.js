(function() {
    'use strict';

    angular
        .module('FM.basicLayout')
        .controller('MapControlsController', MapControlsController);

    function MapControlsController() {
        /* jshint validthis: true */
        var vm = this;
        vm.moveLayout = moveLayout;
        vm.zoomValue = 2;
        vm.zoomStep = 2;
        vm.zoomMin = 0;
        vm.zoomMax = 10;
        vm.zoomIn = zoomIn;
        vm.zoomOut = zoomOut;

        // The center of the visible area in project coordinates.
        vm.viewCenter = view.center.clone();

        function moveLayout(action) {
            var x_coord = paper.view.center.x;
            var y_coord = paper.view.center.y;

            if (action === 'up') {
                y_coord += 20;
            }
            else if (action === 'down') {
                y_coord -= 20;
            }
            else if (action === 'left') {
                x_coord += 20;
            }
            else if (action === 'right') {
                x_coord -= 20;
            }

            paper.view.center = new paper.Point(x_coord, y_coord);
        }

        function zoomIn() {
            vm.zoomValue = Number(vm.zoomValue);
            if (vm.zoomValue < vm.zoomMax) {
                vm.zoomValue += vm.zoomStep;
                paper.view.zoom += 0.5;
            }
        }

        function zoomOut() {
            vm.zoomValue = Number(vm.zoomValue);
            if (vm.zoomValue > vm.zoomMin) {
                vm.zoomValue -= vm.zoomStep;
                paper.view.zoom -= 0.5;
            }
        }
    }
})();