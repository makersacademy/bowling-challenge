describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('rolling the ball', function() {
    it('sets first roll value', function() {
      frame.rollBall(4);
      expect(frame.getFirstRoll()).toEqual(4);
    })

  });

});
