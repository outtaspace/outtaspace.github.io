(function() {
    'use strict';

    // Make the paper scope global, by injecting it into window:
    paper.install(window);

    window.onload = onLoad;

    function onLoad() {
        var canvas = document.getElementById('map');

        // Create an empty project and a view for the canvas:
        paper.setup(canvas);

        // Draw a grid with major and minor lines
        (function (width, height) {
            var x_coord;
            var y_coord;
            var line;

            for (x_coord = 0; x_coord <= width; x_coord += 10) {
                line = new Path.Line({
                    segments: [[x_coord, 0], [x_coord, height]]
                });
                line.set(lineStyle(x_coord));
            }

            for (y_coord = 0; y_coord <= height; y_coord += 10) {
                line = new Path.Line({
                    segments: [[0, y_coord], [width, y_coord]]
                });
                line.set(lineStyle(y_coord));
            }

            function lineStyle(coord) {
                var strokeWidth = (coord % 50 === 0) ? 2 : 1;

                return {
                    strokeColor: 'lightblue',
                    strokeWidth: strokeWidth
                };
            }
        })(view.size.width, view.size.height);

        new Path.Circle({
            center: view.center,
            radius: 35,
            fillColor: 'red'
        });

        // Draw the view now:
        view.draw();
    }
})();
