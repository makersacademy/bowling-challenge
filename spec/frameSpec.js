describe('frame', function() {

  var testframe;
  var nextFrameScore;

  beforeEach(function() {
    testFrame = new frame();
    nextFrameScore = 5;
  });

  describe('Roll Score', function() {
    it('has a two roll scores by default', function() {
      expect(testFrame.firstRollScore(5)).toEqual(5);
      expect(testFrame.secondRollScore(3)).toEqual(3);
    });
    it('only has one roll score if the first roll score a strike', function() {
      testFrame.firstRollScore(10);
      expect(testFrame.secondRollScore(2)).toEqual(null);
      // it seems a bit funny that you give the secondRollScore
      // an argument in this case. Maybe try rearrange that
    });
  });
  describe('Total Score', function() {
    it('has a total score equal to the sum of the roll scores by default', function() {
      testFrame.firstRollScore(5);
      testFrame.secondRollScore(3);
      expect(testFrame.totalScore()).toEqual(8);
    });
  });
  describe('Strike', function() {
    it('is a strike if the first roll score is 10', function() {
      testFrame.firstRollScore(10);
      expect(testFrame._isAStrike).toEqual(true);
    });
  });
  describe('Spare', function() {
    it('is a spare if the first roll is not a strike and the scores sum to 10', function() {
      testFrame.firstRollScore(5);
      testFrame.secondRollScore(5);
      expect(testFrame._isASpare).toEqual(true);
    });
  });
  describe('Bonus strike points', function() {
    it('gets a bonus of total score from next roll', function() {
      testFrame.firstRollScore(10);
      expect(testFrame.totalScore(nextFrameScore)).toEqual(15);
    });
  });
});
