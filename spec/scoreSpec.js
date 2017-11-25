'use strict';

describe('Score', function() {
    var score;
    var frame;

    beforeEach(function () {
        score = new Score();
        frame = {
            rolls: [1, 4],
            accumulatedScore: 5,
            number: 2
        };
        spyOn(score, '_frame').and.returnValue(score._frames.push(frame));
        spyOn(window, 'removeRolls').and.callThrough();
    });

    function fillFrames() {
        score._frames = [];
        for(let i = 1; i < 10; i++) {
            score._frames.push(frame);
        }
    }

    function eightFrames() {
        score = new Score();
        fillFrames();
        score._frames.pop();
    }


    describe('plays', function() {
        it('creates a frame with three scoring rolls if strike', function() {
            fillFrames();
            score.plays([10, 5, 1]);
            expect(score._frame).toHaveBeenCalledWith([10, 5, 1]);
        });

        it('removes first roll if strike', function() {
            eightFrames();
            score.plays([10, 5, 1]);
            expect(removeRolls).toHaveBeenCalledWith([5, 1], 1);
        });

        it('creates a frame with three scoring rolls if spare', function() {
            fillFrames();
            score.plays([7, 3, 3])
            expect(score._frame).toHaveBeenCalledWith([7, 3, 3]);
        });

        it('removes first two rolls if spare', function() {
            eightFrames();
            score.plays([7, 3, 3]);
            expect(removeRolls).toHaveBeenCalledWith([3], 2);
        });

        it('creates a frame with two scoring rolls if no bonus', function() {
            fillFrames();
            score.plays([0, 5]);
            expect(score._frame).toHaveBeenCalledWith([0, 5]);
        });

        it('removes first two roles if no bonus', function() {
            eightFrames();
            score.plays([0, 5, 6]);
            expect(removeRolls).toHaveBeenCalledWith([6], 2);
        });

        it('breaks the cycle by calling itself with rolls if frame==10', function() {
            spyOn(score, 'plays').and.callThrough();
            fillFrames();
            score.plays([1, 2])
            expect(score.plays).toHaveBeenCalledWith([1, 2]);
        });
    });

    describe('isStrike', function() {
        it('returns true if first roll is 10', function() {
            expect(score._isStrike([10])).toBe(true);
        });

        it('returns false otherwise', function() {
            expect(score._isStrike([7])).toBe(false);
        });
    });

    describe('isSpare', function() {
        it('returns true if sum of two first rolls is 10', function() {
            expect(score._isSpare([7, 3])).toBe(true);
        });

        it('returns false otherwise', function() {
            expect(score._isSpare([7, 2])).toBe(false);
        });
    });

    describe('accumulatedScore', function() {
        it('returns sum of scored rolls if first frame', function() {
            score._frames = [];
            expect(score._accumulatedScore([1, 2])).toBe(3);
        });

        it('adds previous frame score and frame\'s scored rolls otherwise', function() {
            expect(score._accumulatedScore([1, 2])).toBe(8);
        });
    });

    describe('frameNumber', function() {
        it('returns 1 if frames is empty', function() {
            score._frames = [];
            expect(score._frameNumber()).toBe(1);
        });

        it('returns increment of frames.length otherwise', function() {
            fillFrames();
            expect(score._frameNumber()).toBe(10);
        });
    });
});
