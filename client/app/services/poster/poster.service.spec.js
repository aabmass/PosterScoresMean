'use strict';

describe('Service: poster', function () {

  // load the service's module
  beforeEach(module('posterScoresMeanApp'));

  // instantiate service
  var poster;
  beforeEach(inject(function (_poster_) {
    poster = _poster_;
  }));

  it('should do something', function () {
    expect(!!poster).toBe(true);
  });

});
