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

  describe('Player', function() {
    it('can roll a ball', function() {
      scorecard.roll(4)
      expect(scorecard.score).toEqual(4)
    });

    // it('roll a spare/half-strike', function() {
    //   scorecard.roll(10)
    // });
  });

  describe('Roll', function() {
    it('is inputted into frame', function() {
      scorecard.roll(3)
      scorecard.roll(4)
      expect(scorecard.framerolls[0]).toEqual([3, 4])
    });
  });

  describe('Frame', function() {
    it('can only have 2 rolls', function() {
      scorecard.roll(3)
      scorecard.roll(4)
      scorecard.roll(6)
      scorecard.roll(2)
      expect(scorecard.framerolls[0]).toEqual([3, 4])
      expect(scorecard.framerolls[1]).toEqual([6, 2])
    });
  });
});
