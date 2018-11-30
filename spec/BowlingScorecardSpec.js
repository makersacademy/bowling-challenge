describe('BowlingScorecard', function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new BowlingScorecard();
    scorecard.enterPlayer('Matt');
  });
  it('can store the scores of the bowls', function(){
    scorecard.enterBowl(5);
    expect(scorecard.scores.frame1['bowl1']).toEqual(5);
  });
});
