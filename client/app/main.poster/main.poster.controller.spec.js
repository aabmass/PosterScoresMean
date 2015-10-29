'use strict';

describe('Controller: MainPosterCtrl', function () {
    var $httpBackend, $scope, createController, authRequestHandler;

    beforeEach(module('posterScoresMeanApp'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');

        authRequestHandler = $httpBackend.when('GET', '/api/posters').
            respond([{name: 'Poster 1', someBool: false},
                    {name: 'Poster 2', someBool: true}]);

        var $rootScope = $injector.get('$rootScope');

        var $controller = $injector.get('$controller');

        $scope = $rootScope.$new();

        createController = function() {
            return $controller('MainPosterCtrl', {$scope: $scope});
        };

    }));


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should not have any posters until the backend responds', function() {
        var MainPosterCtrl = createController();

        expect($scope.posters.length).toEqual(0);

        $httpBackend.flush();
    });

    it('should store all posters on the controller', function() {
        var MainPosterCtrl = createController();

        $httpBackend.flush();

        expect($scope.posters.length).toEqual(2);
        expect($scope.posters[0].name).toEqual('Poster 1');

    });
});
