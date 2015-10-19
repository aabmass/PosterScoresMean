'use strict';

angular.module('posterScoresMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.index', {
        url: '/',
        templateUrl: 'app/main.index/main.index.html',
        controller: 'MainIndexCtrl'
      });
  });
