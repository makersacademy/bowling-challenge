describe('frame', function() {

  var testframe;

  beforeEach(function() {
    testframe = new frame();
  });

  describe('Roll Score', function() {
    it('has a two roll scores by default', function() {
      expect(testframe.firstRollScore(5)).toEqual(5);
      expect(testframe.secondRollScore(3)).toEqual(3);
    });
    it('only has one roll score if the first roll score a strike', function() {
      testframe.firstRollScore(10);
      expect(testframe.secondRollScore(2)).toEqual(null);
      // it seems a bit funny that you give the secondRollScore
      // an argument in this case. Maybe try rearrange that
    });
  });
  describe('Total Score', function() {
    it('has a total score equal to the sum of the roll scores by default', function() {
      testframe.firstRollScore(5);
      testframe.secondRollScore(3);
      expect(testframe.totalScore()).toEqual(8);
    });
  });
  describe('Strike', function() {
    it('is a strike if the first roll score is 10', function() {
      testframe.firstRollScore(10);
      expect(testframe._isAStrike).toEqual(true);
    });
  });
});
