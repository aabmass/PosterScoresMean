'use strict';

angular.module('posterScoresMeanApp')
.controller('MainPosterCtrl', function ($scope, Poster) {
    $scope.message = 'Hello';

    $scope.posters = Poster.query();
});
