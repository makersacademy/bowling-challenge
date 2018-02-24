describe('BowlingFrame', function() {
  var bowlingFrame;

  beforeEach(function() {
    bowlingFrame = new BowlingFrame();
  });

  describe('.firstRoll', function() {
    it('Generates a random number from 1 to 10', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(bowlingFrame.firstRoll()).toBe(6);
    });
  });

  describe('.secondRoll', function() {
    it('Generates a random number between 1 and 10, minus the first roll', function() {
      spyOn(Math, 'random').and.returnValue(0.8);
      bowlingFrame.firstRoll();
      expect(bowlingFrame.secondRoll()).toBe(2);
    });
  });

  describe('.total', function() {
    it('returns the total score from the two rolls', function() {
      spyOn(Math, 'random').and.returnValue(0.4);
      bowlingFrame.firstRoll();
      bowlingFrame.secondRoll();
      expect(bowlingFrame.total()).toBe(6);
    });
  });
});
