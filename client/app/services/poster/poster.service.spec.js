'use strict';

describe('Service: poster', function () {

    // load the service's module
    beforeEach(module('posterScoresMeanApp'));

    // instantiate service
    var Poster;
    beforeEach(inject(function (_Poster_) {
        Poster = _Poster_;
    }));

    it('should do something', function () {
        expect(!!Poster).toBe(true);
    });

});
