describe('BowlingCalc', function() {
  var bowlingCalc;

  beforeEach(function() {
    bowlingCalc = new BowlingCalc();
  });

  describe('#score', function() {
    it('starts with 0', function() {
      expect(bowlingCalc.getScore()).toEqual(0);
    });
  });
})
