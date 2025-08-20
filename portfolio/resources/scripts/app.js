angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.filters', []);

angular.module("app", [
        'app.controllers',
        'app.directives',
        'app.filters',
        'ngRoute'
    ])
    .config(function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'resources/home.html'
        })
        .when('/about', {
            templateUrl: 'resources/about.html'
        })
        .when('/projects', {
            templateUrl: 'resources/projects.html'
        })
        .when('/projects/drawnear', {
            templateUrl: 'resources/projects/drawnear.html'
        })
        .when('/projects/cpre288', {
            templateUrl: 'resources/projects/cpre288.html'
        })
        .when('/projects/aptlyfe', {
            templateUrl: 'resources/projects/aptlyfe.html'
        })
        .when('/projects/c2048', {
            templateUrl: 'resources/projects/c2048.html'
        })
        .when('/projects/calfisher.com', {
            templateUrl: 'resources/projects/calfisher.com.html'
        })
        .when('/projects/quadroid', {
            templateUrl: 'resources/projects/quadroid.html'
        })
        .when('/projects/microcart', {
            templateUrl: 'resources/projects/microcart.html'
        })
        .when('/projects/glow_night_stand_drink_holder', {
            templateUrl: 'resources/projects/glow_night_stand_drink_holder.html'
        })
        .when('/projects/led_deer_head', {
            templateUrl: 'resources/projects/led_deer_head.html'
        })
        .when('/projects/mountain_snowfall', {
            templateUrl: 'resources/projects/mountain_snowfall.html'
        })
        .when('/projects/baby_yoda', {
            templateUrl: 'resources/projects/baby_yoda.html'
        })
        .when('/projects/stair_leds', {
            templateUrl: 'resources/projects/stair_leds.html'
        })
        .when('/projects/succulent_pot', {
            templateUrl: 'resources/projects/succulent_pot.html'
        })
        .when('/projects/turtle_tank', {
            templateUrl: 'resources/projects/turtle_tank.html'
        })
        .when('/projects/tesla_cybertruck', {
            templateUrl: 'resources/projects/tesla_cybertruck.html'
        })
        .when('/projects/toyota_tacoma', {
            templateUrl: 'resources/projects/toyota_tacoma.html'
        })
        .when('/projects/boulevard_sign', {
            templateUrl: 'resources/projects/boulevard_sign.html'
        })
        .when('/projects/untitled_goose_game', {
            templateUrl: 'resources/projects/untitled_goose_game.html'
        })
        .when('/projects/lightswitch_key_ring_holder', {
            templateUrl: 'resources/projects/lightswitch_key_ring_holder.html'
        })
        .when('/projects/spacex_dragon_capsule', {
            templateUrl: 'resources/projects/spacex_dragon_capsule.html'
        })
        .when('/projects/new_way_van_life', {
            templateUrl: 'resources/projects/new_way_van_life.html'
        })
        .when('/photography', {
            templateUrl: 'resources/photography.html'
        })
        .when('/contact', {
            templateUrl: 'resources/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
