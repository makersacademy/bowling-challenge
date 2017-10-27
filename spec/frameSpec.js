describe('frame', function() {

  var testFrame;
  var nextFrameFirstScore;
  var nextFrameSecondScore;

  beforeEach(function() {
    nextFrameFirstScore = 5;
    nextFrameSecondScore = 3;
    testFrame = new frame(nextFrameFirstScore, nextFrameSecondScore);
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
  // describe('Total Score', function() {
  //   it('has a total score equal to the sum of the roll scores by default', function() {
  //     testFrame.firstRollScore(5);
  //     testFrame.secondRollScore(3);
  //     expect(testFrame.totalScore()).toEqual(8);
  //   });
  // });
  describe('Strike', function() {
    it('is a strike if the first roll score is 10', function() {
      testFrame.firstRollScore(10);
      expect(testFrame.isRollAStrike()).toEqual(true);
    });
  });
  describe('Spare', function() {
    it('is a spare if the first roll is not a strike and the scores sum to 10', function() {
      testFrame.firstRollScore(5);
      testFrame.secondRollScore(5);
      expect(testFrame.isRollASpare()).toEqual(true);
    });
  });
  // describe('Bonus strike points', function() {
  //   it('gets a bonus of total score from next roll', function() {
  //     testFrame.firstRollScore(10);
  //     expect(testFrame.totalScore()).toEqual(18);
  //   });
  // });
  // describe('Bonus spare points', function() {
  //   it('gets a bonus of first roll score from next roll', function() {
  //     testFrame.firstRollScore(6);
  //     testFrame.secondRollScore(4);
  //     expect(testFrame.totalScore()).toEqual(15);
  //   });
  // });
});
