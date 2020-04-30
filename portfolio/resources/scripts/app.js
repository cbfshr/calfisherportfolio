angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.filters', []);

angular.module("app", [
        'app.controllers',
        'app.directives',
        'app.filters',
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'resources/home.html'
        });

        $routeProvider.when('/about', {
            templateUrl: 'resources/about.html'
        });

        $routeProvider.when('/projects', {
            templateUrl: 'resources/projects.html'
        });

        $routeProvider.when('/projects/drawnear', {
            templateUrl: 'resources/projects/drawnear.html'
        });
        $routeProvider.when('/projects/cpre288', {
            templateUrl: 'resources/projects/cpre288.html'
        });
        $routeProvider.when('/projects/aptlyfe', {
            templateUrl: 'resources/projects/aptlyfe.html'
        });
        $routeProvider.when('/projects/c2048', {
            templateUrl: 'resources/projects/c2048.html'
        });
        $routeProvider.when('/projects/calfisher.com', {
            templateUrl: 'resources/projects/calfisher.com.html'
        });
        $routeProvider.when('/projects/quadroid', {
            templateUrl: 'resources/projects/quadroid.html'
        });
        $routeProvider.when('/projects/microcart', {
            templateUrl: 'resources/projects/microcart.html'
        });
        $routeProvider.when('/projects/glow_night_stand_drink_holder', {
            templateUrl: 'resources/projects/glow_night_stand_drink_holder.html'
        });
        $routeProvider.when('/projects/mountain_snowfall', {
            templateUrl: 'resources/projects/mountain_snowfall.html'
        });
        $routeProvider.when('/projects/baby_yoda', {
            templateUrl: 'resources/projects/baby_yoda.html'
        });
        $routeProvider.when('/projects/stair_leds', {
            templateUrl: 'resources/projects/stair_leds.html'
        });
        $routeProvider.when('/projects/succulent_pot', {
            templateUrl: 'resources/projects/succulent_pot.html'
        });
        $routeProvider.when('/projects/turtle_tank', {
            templateUrl: 'resources/projects/turtle_tank.html'
        });

        $routeProvider.when('/contact', {
            templateUrl: 'resources/contact.html'
        });
    }]);
