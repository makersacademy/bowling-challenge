'use strict';

describe('Score', function() {
    var score;
    var frame;

    beforeEach(function () {
        score = new Score([10]);
        frame = {
            rolls: [1, 4],
            accumulatedScore: 5,
            number: 9
        };
        score.frames.push(frame);
        spyOn(score, '_createFrame').and.returnValue(frame);
    });

    describe('plays', function() {
        it('calls strike if first roll is 10', function() {
            spyOn(score, '_strike');
            last(score.frames).number = 1;
            score._plays([10, 2, 3])
            expect(score._strike).toHaveBeenCalledWith([10, 2, 3]);
        });

        it('calls spare if sum of first two rolls is 10', function() {
            spyOn(score, '_spare');
            last(score.frames).number = 1;
            score._plays([8, 2])
            expect(score._spare).toHaveBeenCalledWith([8, 2]);
        });

        it('calls noBonus if sum of first two rolls <10', function() {
            spyOn(score, '_noBonus');
            last(score.frames).number = 1;
            score._plays([1, 2]);
            expect(score._noBonus).toHaveBeenCalledWith([1, 2]);
        });

         it('breaks the cycle by calling frame(rolls) if frame==10', function() {
            spyOn(score, '_frame');
            score._plays([1, 2, 3])
            expect(score._frame).toHaveBeenCalledWith([1, 2, 3]);
        });
    });

        describe('strike', function() {
        it('calls frame with first three rolls', function() {
            spyOn(score, '_frame');
            score._strike([10, 7, 2]);
            expect(score._frame).toHaveBeenCalledWith([10, 7, 2]);
        });

        it('goes back to plays with rolls minus first roll', function() {
            spyOn(score, '_plays');
            score._strike([10, 7, 2]);
            expect(score._plays).toHaveBeenCalledWith([7, 2]);
        });

    });

    describe('spare', function() {
        it('calls frame with first three rolls', function() {
            spyOn(score, '_frame');
            score._spare([10, 7, 2]);
            expect(score._frame).toHaveBeenCalledWith([10, 7, 2]);
        });

        it('goes back to plays with rolls minus first two rolls', function() {
            spyOn(score, '_plays');
            score._spare([10, 7, 2]);
            expect(score._plays).toHaveBeenCalledWith([2]);
        });
    });

    describe('noBonus', function() {
        it('calls frame with first two rolls', function() {
            spyOn(score, '_frame');
            score._noBonus([10, 7, 2]);
            expect(score._frame).toHaveBeenCalledWith([10, 7]);
        });

        it('goes back to plays with rolls minus first two rolls', function() {
            spyOn(score, '_plays');
            score._noBonus([10, 7, 2]);
            expect(score._plays).toHaveBeenCalledWith([2]);
        });

    });

    describe('frame', function() {
        it('Stores a new frame in frames', function() {
            score.frames = [];
            score._frame('irrelevant');
            expect(score.frames[0]).toBe(frame);
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
            score.frames = [];
            expect(score._accumulatedScore([1, 2])).toBe(3);
        });

        it('adds previous frame score and frame\'s scored rolls otherwise', function() {
            expect(score._accumulatedScore([1, 2])).toBe(8);
        });
    });

    describe('frameNumber', function() {
        it('returns 1 if frames is empty', function() {
            score.frames = [];
            expect(score._frameNumber()).toBe(1);
        });

        it('return increment of previous frame otherwise', function() {
            expect(score._frameNumber()).toBe(10);
        });
    });

    describe('totalScore', function() {
        it('returns accumulatedScore from last frame', function() {
            expect(score.total()).toBe(5);
        }); 
    });
});
