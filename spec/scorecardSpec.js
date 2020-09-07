'use strict';

describe('Scorecard', function() {

    let scorecard;

    beforeEach(function() {
        scorecard = new Scorecard();
    });

    describe('Scorecard', function() {

        it('can create 10 new frames', function() {
            scorecard.createFrames("frame");
            expect(scorecard.frames.length).toEqual(10);
        });
    });

});