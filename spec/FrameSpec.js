describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
    frame.rollBall(4);
  });

  describe('rolling the ball', function() {
    it('sets first roll value', function() {
      expect(frame.getFirstRoll()).toEqual(4);
    });
    it('sets second roll value', function() {
      frame.rollBall(5);
      expect(frame.getSecondRoll()).toEqual(5);
    });
    it('stops after 2 rolls', function() {
      frame.rollBall(5);
      frame.rollBall(3);
      expect(frame.getSecondRoll()).toEqual(5);
    });
  });

  describe('special frames', function() {
    beforeEach(function() {
      frame = new Frame();
    });
    it('can have a spare, when sum of rolls is all pins', function() {
      frame.rollBall(6);
      frame.rollBall(4);
      expect(frame.isSpare()).toBeTruthy();
      expect(frame.isStrike()).toBeFalsy();
    });

    it('can have a strike, when first roll is all pins', function() {
      frame.rollBall(10);
      expect(frame.isSpare()).toBeFalsy();
      expect(frame.isStrike()).toBeTruthy();
    });
  });

});
