describe('ScoreCard', function() {

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it('should be able to score 2 balls', function() {
    scoreCard.scoreRound(3, 2);
    expect(scoreCard.currentScore).toEqual(5);
  });

  it('should know how many more balls are possible', function() {
    expect(scoreCard.possibleBalls).toEqual(20);
  });

  it('should reduce the number of possible balls after each round', function() {
    scoreCard.scoreRound(3, 4);
    expect(scoreCard.possibleBalls).toEqual(18);
  });

  it ('should recognise a strike', function() {
    scoreCard.scoreRound(10, 0);
    expect(scoreCard.message).toEqual('Strike');
  });

});
