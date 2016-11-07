"use strict";

describe('Frame', function() {
    var frame;

    beforeEach(function() {
        frame = new Frame();
    });

    describe('defaults', function() {
        it('has 10 pins', function() {
            expect(frame.totPins()).toEqual(frame._DEFAULT_PINS);
        });

        it('strike is false', function() {

        });
    });

});