'use strict';

angular.module('posterScoresMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.login', {
        url: '/login',
        templateUrl: 'app/main.account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('main.signup', {
        url: '/signup',
        templateUrl: 'app/main.account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('main.settings', {
        url: '/settings',
        templateUrl: 'app/main.account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });
