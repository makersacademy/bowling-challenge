'use strict';

describe('Validator', function() {
    var validator;

    beforeEach(function () {
        validator = new Validator();
    });

   describe('validate', function() {
        it('calls validateScores with rolls', function() {
            spyOn(validator, '_validateScores');
            validator.validate([1, 2])
            expect(validator._validateScores).toHaveBeenCalledWith([1, 2]);
        });

        it('calls validateFrames with rolls', function() {
            spyOn(validator, '_validateFrames');
            validator.validate([1, 2])
            expect(validator._validateFrames).toHaveBeenCalledWith([1, 2]);
        });
    });

    describe('resetFrames', function() {
        it('resets numberOfFrames to 0', function() {
            validator._numberOfFrames = 10;
            validator.resetFrames();
            expect(validator._numberOfFrames).toBe(0);
        });
    });
    
    describe('validateScores', function() {
        it('returns true if all rolls < 11', function() {
            expect(validator._validateScores([10, 2, 8])).toBe(true);
        });

        it('returns false if a roll is > 10', function() {
            expect(validator._validateScores([10, 2, 11])).toBe(false);
        });
    });

    describe('validateFrames', function() {
        it('directs to frame builder with first roll and three scoring rolls if strike', function() {
            spyOn(validator, '_buildFrame').and.callThrough();
            validator._validateFrames([10, 3, 5, 7, 2]);
            expect(validator._buildFrame).toHaveBeenCalledWith([10], [10, 3, 5]);
        });

        it('directs to frame builder with first two rolls and three scoring rolls if spare', function() {
            spyOn(validator, '_buildFrame').and.callThrough();
            validator._validateFrames([7, 3, 5, 7, 2]);
            expect(validator._buildFrame).toHaveBeenCalledWith([7, 3], [7, 3, 5]);
        });

        it('directs to frame builder with first two rolls and two scoring rolls otherwise', function() {
            spyOn(validator, '_buildFrame').and.callThrough();
            validator._validateFrames([7, 2, 5, 7, 2]);
            expect(validator._buildFrame).toHaveBeenCalledWith([7, 2], [7, 2]);
        });

        it('validates first frame', function() {
            spyOn(validator, '_validateFrame').and.callThrough();
            validator._validateFrames([3, 4, 5, 3]);
            expect(validator._validateFrame).toHaveBeenCalledWith([3, 4]);
        });

        it('validates last frame if 10th', function() {
            spyOn(validator, '_validateLastFrame').and.callThrough();
            validator._numberOfFrames = 9;
            validator._validateFrames([10, 4, 5]);
            expect(validator._validateLastFrame).toHaveBeenCalledWith([10, 4, 5]);
        });


        it('directs to frame builder with entire rolls array if frame is 10th', function() {
            spyOn(validator, '_buildFrame').and.callThrough();
            validator._numberOfFrames = 9;
            validator._validateFrames([7, 2, 5, 7, 2]);
            expect(validator._buildFrame).toHaveBeenCalledWith([7, 2, 5, 7, 2], [7, 2, 5, 7, 2], 9);
        });

        it('breaks the cycle if frame is 10th', function() {
            validator._numberOfFrames = 9;
            expect(validator._validateFrames([10, 4, 5])).toBe(true);
        });

    });

    describe('validateFrame', function() {
        it('returns true if sum of frame rolls <= 10', function() {
            expect(validator._validateFrame([8, 2])).toBe(true);
        });

        it('returns false otherwise', function() {
            expect(validator._validateFrame([8, 5])).toBe(false);
        });
    });

    describe('validateLastFrame', function() {
        it('returns true if first roll is 10', function() {
            expect(validator._validateLastFrame([10, 7, 8])).toBe(true);
        });

        it('returns true if sum of first two rolls is 10', function() {
            expect(validator._validateLastFrame([3, 7, 8])).toBe(true);
        });

        it('returns false if sum of first two rolls < 10', function() {
            expect(validator._validateLastFrame([2, 7, 8])).toBe(false);
        });

        it('returns false if sum of first two rolls > 10 without a strike at the beginning', function() {
            expect(validator._validateLastFrame([6, 7, 8])).toBe(false);
        });

        it('returns false if there are more than 3 rolls', function() {
            expect(validator._validateLastFrame([2, 7, 8, 6])).toBe(false);
        });
    });

    describe('isStrike', function() {
        it('returns true first roll is 10', function() {
            expect(validator._isStrike([10, 3, 5])).toBe(true);
        });

        it('returns false otherwise', function() {
            expect(validator._isStrike([7, 3, 5])).toBe(false);
        });
    });

    describe('isSpare', function() {
        it('returns true sum of first two rolls is 10', function() {
            expect(validator._isSpare([7, 3, 5])).toBe(true);
        });

        it('returns false otherwise', function() {
            expect(validator._isSpare([6, 3, 5])).toBe(false);
        });
    });
});
