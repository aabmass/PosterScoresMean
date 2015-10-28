'use strict';

describe('Controller: MainPosterCtrl', function () {

  // load the controller's module
  beforeEach(module('posterScoresMeanApp'));

  var MainPosterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainPosterCtrl = $controller('MainPosterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
