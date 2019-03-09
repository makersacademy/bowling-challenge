describe('frame', function() {
    it('has a total that starts at 0', function() {
        frame = new Frame();
        expect(frame.total).toEqual(0);
    });
});