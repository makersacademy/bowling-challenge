describe('Bowling Frame', function() {
  var bowlingFrame;

  beforeEach(function() {
    bowlingFrame = new BowlingFrame();
  });

  describe('bowling frame', function() {

    it('allows you to enter a bowling score', function() {
      bowlingFrame.frameNo(1).ball(1).score(7);
      expect(bowlingFrame.currentFrame([0][0])).toBe(7);
    });
  });
});