describe('frame', function() {
    it('has a total that starts at 0', function() {
        frame = new Frame();
        expect(frame.total).toEqual(0);
    });
    it('saves the score of the first bowl', function() {
        frame = new Frame();
        frame.firstBowl(3);
        expect(frame.bowl1).toEqual(3);
    })
});