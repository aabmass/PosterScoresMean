'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('posterScoresMeanApp'));

    var MainCtrl,
    scope,
    $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/things')
        .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    /* // no longer using things, so this test will always fail
    it('should attach a list of things to the scope', function () {
        $httpBackend.flush();
        expect(scope.awesomeThings.length).toBe(4);
    });
   */
});
