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
            expect(frame._isStrike).toEqual(false);
        });

				it('score 1 in frame is null', function() {
					expect(frame._score1).toEqual(null);
				});

				it('score 2 in frame is null', function() {
					expect(frame._score2).toEqual(null);
				});
    });

});