'use strict'

describe('Score', function() {
    var score;
    var frame;

    beforeEach(function () {
        score = new Score([10]);
        frame = {
            rolls: [1, 4],
            score: 5,
            number: 9
        };
        spyOn(score, '_createFrame').and.returnValue(frame);
    });

    describe('isStrike', function() {
        it('returns true if score at the beginning of rolls is 10', function() {
            score = new Score([10]);
            expect(score._isStrike()).toBe(true);
        });

        it('returns false otherwise', function() {
            score = new Score([7]);
            expect(score._isStrike()).toBe(false);
        });
    });

    describe('isSpare', function() {
        it('returns true if sum of two first scores is 10', function() {
            score = new Score([7, 3]);
            expect(score._isSpare()).toBe(true);
        });

        it('returns false otherwise', function() {
            score = new Score([7, 2]);
            expect(score._isSpare()).toBe(false);
        });
    });

    describe('frame', function() {
        it('Stores a new frame in frames', function() {
            score._frame('irrelevant');
            expect(score.frames[0]).toBe(frame);
        });
    });

    describe('frameScore', function() {
        it('returns sum of array passed as argument if frames is empty', function() {
            expect(score._frameScore([1, 2])).toBe(3);
        });

        it('adds previous frame score to array sum if frames not empty', function() {
            score.frames[0] = frame;
            score._frameScore([1, 2]);
            expect(score._frameScore([1, 2])).toBe(8);
        });
    });

    describe('frameNumber', function() {
        it('returns 1 if frames is empty', function() {
            expect(score._frameNumber()).toBe(1);
        });

        it('return increment of last frame in frames otherwise', function() {
            score.frames[0] = frame;
            expect(score._frameNumber()).toBe(10);
        });
    });

    describe('strike', function() {
        it('calls frame with first three elements of array', function() {
            score._rolls = [10, 7, 2];
            score.frames[0] = frame;
            spyOn(score, '_frame');
            score._strike();
            expect(score._frame).toHaveBeenCalledWith([10, 7, 2]);
        });

        it('calls removesRolls with 1', function() {
            score._rolls = [10, 7, 2];
            spyOn(score, '_removeRolls');
            score._strike();
            expect(score._removeRolls).toHaveBeenCalledWith(1);
        });

        it('calls plays with array minus first element', function() {
            score._rolls = [10, 7, 2];
            spyOn(score, '_plays');
            score._strike();
            expect(score._plays).toHaveBeenCalledWith([7, 2]);
        });

    });

    describe('spare', function() {
       it('calls frame with first three elements of array', function() {
            score._rolls = [10, 7, 2];
            score.frames[0] = frame;
            spyOn(score, '_frame');
            score._spare();
            expect(score._frame).toHaveBeenCalledWith([10, 7, 2]);
        });

        it('calls removesRolls with 2', function() {
            score._rolls = [10, 7, 2];
            spyOn(score, '_removeRolls');
            score._spare();
            expect(score._removeRolls).toHaveBeenCalledWith(2);
        });

        it('calls plays with array minus first two element', function() {
            score._rolls = [10, 7, 2];
            spyOn(score, '_plays');
            score._spare();
            expect(score._plays).toHaveBeenCalledWith([2]);
        });
    });

    describe('noBonus', function() {
        it('calls frame with first two elements of array', function() {
            score._rolls = [10, 7, 2];
            score.frames[0] = frame;
            spyOn(score, '_frame');
            score._noBonus();
            expect(score._frame).toHaveBeenCalledWith([10, 7]);
        });

        it('calls removesRolls with 2', function() {
            score._rolls = [10, 7, 2];
            spyOn(score, '_removeRolls');
            score._noBonus();
            expect(score._removeRolls).toHaveBeenCalledWith(2);
        });

        it('calls plays with array minus first two element', function() {
            score._rolls = [10, 7, 2];
            spyOn(score, '_plays');
            score._noBonus();
            expect(score._plays).toHaveBeenCalledWith([2]);
        });

    });

    describe('plays', function() {
        it('returns frame(rolls) if frame is the 10th', function() {
            spyOn(score, '_frame');
            score.frames[0] = frame;
            score._plays([1, 2, 3])
            expect(score._frame).toHaveBeenCalledWith([1, 2, 3]);
        });

        it('calls strike if first element in array is 10', function() {
            spyOn(score, '_strike');
            frame.number = 1;
            score.frames[0] = frame;
            score._plays([10, 2, 3])
            expect(score._strike).toHaveBeenCalledWith();
        });

        it('calls spare if sum of first two elements is 10', function() {
            spyOn(score, '_spare');
            frame.number = 1;
            score.frames[0] = frame;
            score._rolls = [8, 2];
            score._plays([8, 2, 3, 4])
            expect(score._spare).toHaveBeenCalledWith();
        });

        it('returns noBonus if sum of first two elements <10', function() {
            spyOn(score, '_noBonus');
            frame.number = 1;
            score.frames[0] = frame;
            score._rolls = [3, 2];
            score._plays([1, 2, 3]);
            expect(score._noBonus).toHaveBeenCalledWith();
        });
    });

    describe('total', function() {
       it('returns total from last element in frames', function() {
            score.frames[0] = frame;
            expect(score.total()).toBe(5);
        }); 
    });
});
