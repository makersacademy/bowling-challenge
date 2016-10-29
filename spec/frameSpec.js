describe('Frame', function() {
    var Frame = require('../lib/Frame.js');
    var frame = new Frame();

    it('starts with zero score for the two bowls', function() {
        expect(frame._firstBowl).toEqual(0);
        expect(frame._secondBowl).toEqual(0);
    });
    it('starts with total frame score of zero', function() {
        expect(frame.totalScore()).toEqual(0);
    });
});