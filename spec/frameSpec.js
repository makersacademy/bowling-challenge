describe('Frame', function() {
    var Frame = require('../lib/Frame.js');
    var frame = new Frame();

    it('has two bowls', function() {
        expect(frame.firstBowl).toEqual(0);
        expect(frame.secondBowl).toEqual(0);
    });
});