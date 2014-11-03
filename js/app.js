/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

//create new angular module
angular.module('MovieApp', [])
    .controller('MoviesController', function($scope) {
        $scope.movies = movies;
    });