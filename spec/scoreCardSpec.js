describe('ScoreCard', function() {
  var scorecard;


  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  it('calculates the score on ball1 on a normal turn', function() {
    scorecard.calculateScore(1, 3, false, false);
    expect(scorecard.score).toEqual(3);
  });

  it('calculates the score on ball2 on a normal turn', function() {
    scorecard.calculateScore(2, 5, false, false);
    expect(scorecard.score).toEqual(5);
  });

  it('calculates the score on ball1 when player has a spare', function() {
    scorecard.calculateScore(1,3,true,false);
    expect(scorecard.score).toEqual(6);
  });

  it('calculates the score on ball2 when player has a spare', function() {
    scorecard.calculateScore(2,5,true,false);
    expect(scorecard.score).toEqual(5);
  });

  it('calculates the score on ball1 when player has a strike', function() {
    scorecard.calculateScore(1,3,false, true);
    expect(scorecard.score).toEqual(6);
  });

  it('calculates the score on ball2 when player has a strike', function() {
    scorecard.calculateScore(2, 5, false, true);
    expect(scorecard.score).toEqual(10);
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
