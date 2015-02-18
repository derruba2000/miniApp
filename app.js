'use strict';

var miniApp = angular.module('miniApp', ['ngRoute']);

    // configure our routes
    miniApp.config(function($routeProvider) {
        $routeProvider

            // route for the example1/home page 
            .when('/', {
                templateUrl : 'views/example1.html',
                controller  : 'example1Ctrl'
            })

            // route for the example1 page (d3.js example)
            .when('/example1', {
                templateUrl : 'views/example1.html',
                controller  : 'example1Ctrl'
            })

            // route for the example2 page
            .when('/example2', {
                templateUrl : 'views/example2.html',
                controller  : 'example2Ctrl'
            })
            // route for the Table page
            .when('/tablepage', {
                templateUrl : 'views/tablepage.html',
                controller  : 'tablepageCtrl'
            });
    });