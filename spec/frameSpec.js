describe('Frame', function() {
    beforeEach(function() {
        frame = new Frame;
    });

    it ('should be an array of total rolls - starting with zero', function() {
        expect(frame.totalRolls()).toEqual(0)
    });
});