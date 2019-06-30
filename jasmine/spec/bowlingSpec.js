describe('BowlingScorecard',function() {

  var bowlingScorecard;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  it('User enters roll score', function() {
    bowlingScorecard.rollScore(5);
    expect(bowlingScorecard.getCurrentRollScore()).toEqual(5);
  });

  // it('Roll scores is added to frame score', function() {
  //   rollScore1 = bowlingScorecard.rollScore(5);
  //   expect(bowlingScorecard.frameScore()).toInclude(rollScore1);
  // });
});
