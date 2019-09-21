describe('Bowling', function() {
  var bowlingCard
  beforeEach(function() {
     bowlingCard = new BowlingCard();
  });

  it('allows a user to enter the score for the current frame', function() {
    bowlingCard.enterScore(['frameOne','rollOne',4]);
    expect(bowlingCard.scores[0][2]).toEqual(4);
  });

});
