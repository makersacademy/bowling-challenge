describe('Frame', function() {
  var frame = new Frame();

  describe('#score', function() {
    it('score starts at 0', function () {
      expect(frame.score()).toBe(0);
    });
  });

  describe('#roll', function() {
    it('more than 2 rolls throws an error', function() {
      frame.roll(1);
      frame.roll(1);
      expect(function() {frame.roll();}).toThrowError('Illegal roll, frame complete');
    });
  });
});
