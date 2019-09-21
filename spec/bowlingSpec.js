describe('Bowling', function() {
  var bowlingCard
  beforeEach(function() {
     bowlingCard = new BowlingCard();
  });

  it('allows a user to enter the score for the current frame', function() {
    score = new Score(1,1,5)
    bowlingCard.enterScore(score);
    expect(bowlingCard.scores[0][2]).toEqual(4);
  });

});
