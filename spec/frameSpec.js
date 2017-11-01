describe('frame', function() {

  var testFrame;

  beforeEach(function() {

    testFrame = new frame();
  });

  describe('Getter methods', function() {
    it('first roll score getter', function() {
      testFrame.firstRollScore(5);
      expect(testFrame.firstScore()).toEqual(5);
    });
    it('second roll score getter', function() {
      testFrame.secondRollScore(3);
      expect(testFrame.secondScore()).toEqual(3);
    });
    it('third roll score getter', function() {
      testFrame.thirdRollScore(3);
      expect(testFrame.thirdScore()).toEqual(3);
    });
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
});
