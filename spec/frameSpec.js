describe('Frame', function() {
    beforeEach(function() {
        frame = new Frame;
    });

    it ('should be an array of total rolls - starting with zero', function() {
        expect(frame.totalRolls()).toEqual(0)
    });

    it ('should be able to roll and have that stored to the array', function() {
        frame.storeRoll(1)
        expect(frame.totalRolls()).toEqual(1)
    });
});