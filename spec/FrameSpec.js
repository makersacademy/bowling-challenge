describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#score', function() {
    it('score starts at 0', function () {
      expect(frame.score()).toBe(0);
    });

    it('scores 2 for 1/1', function () {
      frame.roll(1);
      frame.roll(1);
      expect(frame.score()).toBe(2);
    });
  });

  describe('#roll', function() {
    it('more than 2 rolls throws an error', function() {
      frame.roll(1);
      frame.roll(1);
      expect(function() {frame.roll(1);}).toThrowError('Illegal roll, frame complete');
    });

    it('roll after a strike raises an error', function() {
      frame.roll(10);
      expect(function() {frame.roll(1);}).toThrowError('Illegal roll, frame complete');
    });
  });
});
