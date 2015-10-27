'use strict';

describe('Controller: MainIndexCtrl', function () {

    // load the controller's module
    beforeEach(module('posterScoresMeanApp'));

    var MainIndexCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainIndexCtrl = $controller('MainIndexCtrl', {
            $scope: scope
        });
    }));
});
