describe('BowlingFrame', function() {
  var bowlingFrame;

  beforeEach(function() {
    bowlingFrame = new BowlingFrame();
  });

  describe('.firstRoll', function() {
    it('returns the first roll choice', function() {
      expect(bowlingFrame.firstRoll(6)).toBe(6);
    });
  });

  describe('.secondRoll', function() {
    it('returns the second roll choice', function() {
      expect(bowlingFrame.secondRoll(3)).toBe(3);
    });
  });

  describe('.total', function() {
    it('returns the total score from the two rolls', function() {
      // spyOn(Math, 'random').and.returnValue(0.4);
      bowlingFrame.firstRoll(3);
      bowlingFrame.secondRoll(3);
      expect(bowlingFrame.total()).toBe(6);
    });
  });
});
