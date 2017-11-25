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
        it('calls validateSize if no more rolls', function() {
            spyOn(validator, '_validateSize');
            validator._validateFrames([]);
            expect(validator._validateSize).toHaveBeenCalled();
        });

        // it('asks for first frame on rolls to be identified', function() {
        //     spyOn(validator, '_getFirstFrame');
        //     validator._validateFrames([4, 5, 4, 2]);
        //     expect(validator._getFirstFrame).toHaveBeenCalledWith([4, 5, 4, 2]);
        // });

        it('calls validateFrame with first frame', function() {
            spyOn(validator, '_validateFrame');
            validator._validateFrames([10, 4, 5, 3]);
            expect(validator._validateFrame).toHaveBeenCalledWith([10]);
        });

        // it('continues the cycle by calling validateFrames with remaining rolls', function() {
        //     spyOn(validator, '_validateFrames');
        //     validator._validateFrames([10, 4, 5, 3]);
        //     expect(validator._validateFrames).toHaveBeenCalledWith([4, 5, 3]);
        // });
    });

    describe('validateFrame', function() {
        it('increments number of frames', function() {
            validator._validateFrame([10]);
            expect(validator._numberOfFrames).toBe(1);
        });

        it('redirects for last frame validation if frame has 3 rolls', function() {
            spyOn(validator, '_validateLastFrame');
            validator._validateFrame([10, 8, 9]);
            expect(validator._validateLastFrame).toHaveBeenCalledWith([10, 8, 9]);
        });

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

        it('returns false if sum of first two rolls > 10', function() {
            expect(validator._validateLastFrame([6, 7, 8])).toBe(false);
        });
    });

    describe('getFirstFrame', function() {
        it('gets frame size', function() {
            spyOn(validator, '_getFrameSize');
            validator._getFirstFrame([10, 2, 5, 4]);
            expect(validator._getFrameSize).toHaveBeenCalledWith([10, 2, 5, 4]);
        });

        it('returns n first rolls where n is frame size', function() {
            expect(validator._getFirstFrame([10, 2, 5, 4])).toEqual([10]);
        });
    });

    describe('getFrameSize', function() {
        it('returns 3 if there are only three rolls left', function() {
            expect(validator._getFrameSize([10, 1, 3])).toBe(3);
        });

        it('then returns 1 if first roll is 10', function() {
            expect(validator._getFrameSize([10, 1, 3, 8])).toBe(1);
        });

        it('returns 2 otherwise', function() {
            expect(validator._getFrameSize([9, 1, 3, 8])).toBe(2);
        });
    });
});
