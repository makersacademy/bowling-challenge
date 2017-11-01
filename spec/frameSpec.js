describe('frame', function() {

  var testFrame;

  beforeEach(function() {

    testFrame = new frame();
  });

  describe('Roll Score', function() {
    it('has a two roll scores by default', function() {
      expect(testFrame.firstRollScore(5)).toEqual(5);
      expect(testFrame.secondRollScore(3)).toEqual(3);
    });
    it('allows for a possible third roll score', function() {
      expect(testFrame.thirdRollScore(5)).toEqual(5);
    });
    // it('allows for a possible fourth roll score', function() {
    //   expect(testFrame.fourthRollScore(5)).toEqual(5);
    // });
  });
  describe('Pre Bonus Score', function() {
    it('has a pre bonus score of 8', function() {
      testFrame.firstRollScore(5);
      testFrame.secondRollScore(3);
      expect(testFrame.preBonusScore()).toEqual(8);
    });
    it('has a pre bonus score of 10', function() {
      testFrame.firstRollScore(10);
      expect(testFrame.preBonusScore()).toEqual(10);
    });
  });
  describe('Strike', function() {
    it('is a strike if the first roll score is 10', function() {
      testFrame.firstRollScore(10);
      expect(testFrame.isAStrike()).toEqual(true);
    });
  });
  describe('Spare', function() {
    it('is a spare if the first roll is not a strike and the scores sum to 10', function() {
      testFrame.firstRollScore(5);
      testFrame.secondRollScore(5);
      expect(testFrame.isASpare()).toEqual(true);
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
