describe('LastFrame', function() {
  var lastFrame;

  beforeEach(function() {
    lastFrame = new LastFrame();
  });

  describe('#isOver', function() {
    describe('returns true if the frame is over', function() {
      it('cause two rolls have been played with no spare / strike', function() {
        lastFrame.recordRoll(0);
        lastFrame.recordRoll(0);
        expect(lastFrame.isOver()).toBe(true);
      });
      it('cause three rolls have been played', function() {
        lastFrame.recordRoll(lastFrame.pins);
        lastFrame.recordRoll(0);
        lastFrame.recordRoll(0);
        expect(lastFrame.isOver()).toBe(true);
      });
    });
  });

  describe('#totalScore', function() {
    it('returns the sum of the rolls scores', function() {
      lastFrame.recordRoll(0);
      lastFrame.recordRoll(0);
      expect(lastFrame.totalScore()).toEqual(lastFrame.score());
    });
  });

});
