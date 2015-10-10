describe('ScoreCard', function() {

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it('should be able to score 2 balls', function() {
    scoreCard.ball1 = 3;
    scoreCard.ball2 = 2;
    scoreCard.scoreRound();
    expect(scoreCard.currentScore).toEqual(5);
  });

  it('should be able to score 2 rounds', function() {
    scoreCard.ball1 = 3;
    scoreCard.ball2 = 2;
    scoreCard.scoreRound();
    scoreCard.ball1 = 9;
    scoreCard.ball2 = 0;
    scoreCard.scoreRound();
    expect(scoreCard.currentScore).toEqual(14);
  });

  it('should inc the number of round ', function() {
    scoreCard.ball1 = 3;
    scoreCard.ball2 = 2;
    scoreCard.scoreRound();
    expect(scoreCard.currentRound).toEqual(2);
  });

  it('should not allow a ball to score over 10', function() {
    scoreCard.ball1 = 11;
    scoreCard.ball2 = 3;
    scoreCard.scoreRound();
    expect(scoreCard.message).toEqual('Ball value too great');
  });

  it('should not allow a two balls to score over 10', function() {
    scoreCard.ball1 = 9;
    scoreCard.ball2 = 3;
    scoreCard.scoreRound();
    expect(scoreCard.message).toEqual('Not a valid score');
  });

  it('should recognise a strike', function() {
    scoreCard.ball1 = 10;
    scoreCard.ball2 = 0;
    scoreCard.scoreRound();
    expect(scoreCard.message).toEqual('Strike');
  });

  it('should recognise a spare', function() {
    scoreCard.ball1 = 9;
    scoreCard.ball2 = 1;
    scoreCard.scoreRound();
    expect(scoreCard.message).toEqual('Spare');
  });

  it('should stop at round 10 and score equal score', function() {
    for (i = 0; i < 10; i++) {
      scoreCard.ball1 = 3;
      scoreCard.ball2 = 2;
      scoreCard.scoreRound();
    }

    scoreCard.ball1 = 3;
    scoreCard.ball2 = 2;
    expect(scoreCard.scoreRound()).toEqual('Game over');
    expect(scoreCard.currentScore).toEqual(50);
    console.log(scoreCard.scoreArray);
  });

  it('should correctly score a spare', function() {
    scoreCard.ball1 = 5;
    scoreCard.ball2 = 5;
    scoreCard.scoreRound();
    scoreCard.ball1 = 9;
    scoreCard.ball2 = 0;
    scoreCard.scoreRound();
    expect(scoreCard.currentScore).toEqual(28);
  });

  xit('should score 10 spares', function() {
    for (i = 0; i < 10; i++) {
      scoreCard.ball1 = 9;
      scoreCard.ball2 = 1;
      scoreCard.scoreRound();
    }

    scoreCard.ball1 = 9;
    scoreCard.ball2 = 1;
    expect(scoreCard.scoreRound()).toEqual('Game over');
    expect(scoreCard.currentScore).toEqual(190);
    console.log(scoreCard.scoreArray);
  });

});
