'use strict';

angular.module('posterScoresMeanApp')
.factory('Poster', function($resource) {
    return $resource('/api/posters/:id', {
        id: '@_id'
    });
});


