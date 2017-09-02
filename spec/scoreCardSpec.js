describe('ScoreCard', function() {
  var scorecard;


  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  it('calculates the score for a normal turn', function() {
    scorecard.calculateScore(3,5,false,false);
    expect(scorecard.score).toEqual(8);
  });

  it('calculates the score when player has a spare', function() {
    scorecard.calculateScore(3,5,true,false);
    expect(scorecard.score).toEqual(11);
  });

  it('calculates the score when player has a strike', function() {
    scorecard.calculateScore(3,5,false,true);
    expect(scorecard.score).toEqual(16);
  });

  it('records a total score', function() {
    scorecard.recordScore(8);
    scorecard.recordScore(7);
    scorecard.calcTotal();
    // console.log(scorecard.results);
    expect(scorecard.total).toEqual(15);
    expect(scorecard.results).toEqual([8,7]);
  });

});
