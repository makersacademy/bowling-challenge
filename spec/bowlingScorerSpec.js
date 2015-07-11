describe ('BowlingScorecard', function() {

  beforeEach(function() {
    scorecard = new BowlingScorecard();
  });

  it('starts with a zero score', function() {
    expect(scorecard.score).toEqual(0)
  });

  it('has frames', function() {
    expect(scorecard.framerolls.length).toEqual(10)
  });

  describe('Player can', function() {
    it('roll a ball', function() {
      scorecard.roll(4)
      expect(scorecard.score).toEqual(4)
    });

    // it('roll a spare/half-strike', function() {
    //   scorecard.roll(10)
    // });
  });

  describe('Rolls', function() {
    it('are inputted into frames', function() {
      scorecard.roll(3)
      scorecard.roll(4)
      expect(scorecard.framerolls[0]).toEqual([3, 4])
    });
  });
});
