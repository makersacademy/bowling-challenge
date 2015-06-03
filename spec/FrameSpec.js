describe('Frame', function() {
  var Frame = [10];
  describe('Can register 2 bowls', function() {
    it('of 3', function() {
      frame = new Frame();
      frame.bowl(3)
      frame.bowl(3)
      expect(frame.score).toEqual([new F3,3]);
    });
  });
});