'use strict';

describe('Scorecard', function() {

    let scorecard

    beforeEach(function() {
        scorecard = new Scorecard();
        // frame = new Frame();
    });

    it('should be able to create new frame', function() {
        scorecard.createFrames(Frame);
        expect(scorecard.frames.length).toEqual(2);
    });

    it('should start a new frame after 1 frame is completed', function() {
        scorecard.bowl(10);
        scorecard.bowl(6);
        expect(scorecard.frames.length).toEqual(2);
    });

    it('should calculate score', function() {
        scorecard.bowl(7);
        expect(scorecard.calculateScore()).toEqual(7);
    });

    // it('should calculate bonus score', function() {
    //     scorecard.bowl(5);
    //     scorecard.bowl(5);
    //     scorecard.bowl(5);
    //     expect(scorecard.bonus()).toEqual(15);
    // });

    it('should calculate a perfect game', function() {
        for (var i = 0; i < 12; i++) {
            scorecard.bowl(10)
        }
        expect(scorecard.calculateScore()).toEqual(300);
    });

    it('should calculate score after a strike', function() {
        //expect(scorecard.frames[0].score).toEqual(18);
    });

    it('should calculate score after two strikes in a row', function() {
        //expect(scorecard.frames[0].score).toEqual(30);
    });

    it('should update a frames score if it was a spare', function() {
        //expect(scorecard.frames[0].score).toEqual(16);
    });

});