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

  describe('#getBonusRollsRemaining', function() {
    it('new frame has no bonus rolls', function() {
      expect(frame.getBonusRollsRemaining()).toBe(0);
    });

    it('strike wins 2 bonus rolls', function() {
      frame.roll(10);
      expect(frame.getBonusRollsRemaining()).toBe(2);
    });

    it('2/8 spare wins 1 bonus roll', function() {
      frame.roll(2);
      frame.roll(8);
      expect(frame.getBonusRollsRemaining()).toBe(1);
    });
  });
});
