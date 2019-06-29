describe('BowlingScorecard',function() {

  var bowlingScorecard;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  it('User enters roll score', function() {
    knocked_down_pins = 5
    expect(bowlingScorecard.rollScore(knocked_down_pins)).toEqual(5);
  });
});
