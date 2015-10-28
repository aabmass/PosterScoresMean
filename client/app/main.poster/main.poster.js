'use strict';

angular.module('posterScoresMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.poster', {
        url: '/posters',
        templateUrl: 'app/main.poster/main.poster.html',
        controller: 'MainPosterCtrl'
      });
  });