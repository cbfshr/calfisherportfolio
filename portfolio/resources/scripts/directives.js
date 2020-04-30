angular
    .module('app.directives')
    .directive('nav', function () {
        return {
            restrict: 'A',
            templateUrl: 'resources/nav.html',
            replace: true
        };
    })
    .directive('stl', function () {
        return {
            restrict: 'E',
            scope: {
                src: '@',
                scale: '@',
                rotatex: '@',
                rotatey: '@',
                rotatez: '@'
            },
            link: function postLink(scope, element, attrs) {
                var scale = scope.scale == null ? 1 : scope.scale;
                var rotatex = scope.rotatex == null ? 1 : scope.rotatex;
                var rotatey = scope.rotatey == null ? 1 : scope.rotatey;
                var rotatez = scope.rotatez == null ? 1 : scope.rotatez;

                function stl_loaded() {
                    console.log("Loaded Model: " + scope.src);
                    console.log("- Scale: " + scale);
                    console.log("- Rotate X: " + rotatex);
                    console.log("- Rotate Y: " + rotatey);
                    console.log("- Rotate Z: " + rotatez);
                    
                    stl_viewer.set_scale(0, scale);
                    stl_viewer.rotate(0, scope.rotatex, scope.rotatey, scope.rotatez);
                }

                var stl_viewer = new StlViewer(
                    element[0].firstChild.firstElementChild,
                    {
                        load_three_files: "vendor/scripts/stl_viewer/",
                        model_loaded_callback: stl_loaded,
                        models: [
                            {
                                id: 0,
                                filename: `../../../resources/stl/${scope.src}`
                            }
                        ]
                    }
                );
            },
            templateUrl: 'resources/stl_viewer.html'
        };
    });
