describe('Frame', function() {
    var Frame = require('../lib/Frame.js');
    var frame = new Frame();

    it('starts with each bowl score undefined', function() {
        expect(frame.firstBowl).toEqual(undefined);
        expect(frame.secondBowl).toEqual(undefined);
    });
    it('starts with total frame score of zero', function() {
        expect(frame.totalScore()).toEqual(0);
    });
    it('takes a score for first bowl', function() {
        frame.bowl(5);
        expect(frame.firstBowl).toEqual(5);
    });
    it('takes a score for second bowl', function() {
        frame.bowl(3);
        expect(frame.secondBowl).toEqual(3);
    });
});