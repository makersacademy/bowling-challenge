'use strict';

describe('Engine', function() {
    var engine;

    beforeEach(function() {
        engine = new Engine();
    });

    it('Initialize with rules array', function() {
        expect(engine.rules()).toEqual([]);
    });
});
