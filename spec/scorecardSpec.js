'use strict';

//var Frame = require('../src/Frame');
import Frame from '../src/frame.js'
//import Scorecard from '../src/scorecard.js'

describe('Scorecard', function() {

    let scorecard, frame;

    beforeEach(function() {
        scorecard = new Scorecard();
        scorecard.createFrames(Frame);
    });

    describe('Scorecard', function() {

        it('can create 10 new frames', function() {
            //scorecard.createFrames("frame");
            expect(scorecard.frames.length).toEqual(9);
        });

        it('should be able to show number of frames', function() {
            //scorecard.createFrames("frame");
            expect(scorecard.frameCount()).toEqual(9);
        });

        it('score should start at 0', function() {
            expect(scorecard.score()).toEqual(0);
        });

        it('should be able to detemine the current score after shots', function() {
            scorecard.frames[0].getShot(5);
            scorecard.frames[0].getShot(3);
            scorecard.frames[1].getShot(4);
            scorecard.frames[1].getShot(1);
            expect(scorecard.score()).toEqual(13);
        });


    });

});