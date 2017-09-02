describe('ScoreCard', function() {
  var scorecard;


  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  it('calculates the score for a normal turn', function() {
    expect(scorecard.calculateScore(3,5,false,false)).toEqual(8);
  });

  it('calculates the score when player has a spare', function() {
    expect(scorecard.calculateScore(3,5,true,false)).toEqual(11);
  });

  it('calculates the score when player has a strike', function() {
    expect(scorecard.calculateScore(3,5,false,true)).toEqual(16);
  });

});
