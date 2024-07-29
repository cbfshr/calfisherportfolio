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
        $routeProvider.when('/projects/led_deer_head', {
            templateUrl: 'resources/projects/led_deer_head.html'
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
        $routeProvider.when('/projects/tesla_cybertruck', {
            templateUrl: 'resources/projects/tesla_cybertruck.html'
        });
        $routeProvider.when('/projects/toyota_tacoma', {
            templateUrl: 'resources/projects/toyota_tacoma.html'
        });
        $routeProvider.when('/projects/boulevard_sign', {
            templateUrl: 'resources/projects/boulevard_sign.html'
        });
        $routeProvider.when('/projects/untitled_goose_game', {
            templateUrl: 'resources/projects/untitled_goose_game.html'
        });
        $routeProvider.when('/projects/lightswitch_key_ring_holder', {
            templateUrl: 'resources/projects/lightswitch_key_ring_holder.html'
        });
        $routeProvider.when('/projects/spacex_dragon_capsule', {
            templateUrl: 'resources/projects/spacex_dragon_capsule.html'
        });
        $routeProvider.when('/projects/new_way_van_life', {
            templateUrl: 'resources/projects/new_way_van_life.html'
        });

        $routeProvider.when('/photography', {
            templateUrl: 'resources/photography.html'
        });

        $routeProvider.when('/contact', {
            templateUrl: 'resources/contact.html'
        });
    }]);
