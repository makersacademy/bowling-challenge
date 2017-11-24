'use strict'

describe('Frame', function() {
    var testFrame;

    beforeEach(function () {
        testFrame = new Frame([2, 3], 2, 3);
    });

    describe('processScore', function() {
        it('returns rolls sum', function() {
            expect(testFrame._processScore([2, 3])).toBe(5);
        });
    });

    describe('processType', function() {
        it('returns Strike if first roll is 10', function() {
            expect(testFrame._processType([10, 3, 7])).toBe('Strike');
        });

        it('returns Spare if frame score is 10', function() {
            testFrame.score = 10;
            expect(testFrame._processType([3, 7, 10])).toBe('Spare');
        });

        it('returns No Bonus otherwise', function() {
            expect(testFrame._processType([3, 6])).toBe('No Bonus');
        });

    });

    describe('processRolls', function() {
        it('returns array with first roll only if type is strike', function() {
            testFrame.type = 'Strike'
            expect(testFrame._processRolls([10, 3, 7])).toEqual([10]);
        });

        it('returns array with first two rolls otherwise', function() {
            expect(testFrame._processRolls([3, 7, 6])).toEqual([3, 7]);
        });
    });
});
