'use strict';

describe('Frame', function() {

    var frame;

    beforeEach(function() {
        frame = new Frame();
    });

    it('Starts with undefined entries for both rolls.', function() {
        expect(frame.getBallScore(1)).toEqual(undefined);
        expect(frame.getBallScore(2)).toEqual(undefined);
    });
    it('Records the first roll.', function() {
        frame.inputRoll(5);
        expect(frame.getBallScore(1)).toEqual(5);
    });
    it('Records a second roll.', function() {
        frame.inputRoll(5);
        frame.inputRoll(4);
        expect(frame.getBallScore(2)).toEqual(4);
    });
    it('Records a third roll.', function() {
        frame.inputRoll(5);
        frame.inputRoll(4);
        frame.inputRoll(8);
        expect(frame.getBallScore(3)).toEqual(8);
    });
    it('Can return input rolls as an array.', function() {
        frame.inputRoll(1);
        frame.inputRoll(2);
        expect(frame.getRolls()).toEqual([1, 2]);
    });
});
