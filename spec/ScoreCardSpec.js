describe('ScoreCard', function() {

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it('can score 2 balls', function() {
    scoreCard.scoreRound(4, 3);
    expect(scoreCard.currentScore).toEqual(7);
  });

  it('can score 2 rounds', function() {
    scoreCard.scoreRound(4, 5);
    scoreCard.scoreRound(4, 5);
    expect(scoreCard.currentScore).toEqual(18);
  });

  it('can record previous balls', function() {
    scoreCard.scoreRound(1, 2);
    scoreCard.scoreRound(3, 4);
    expect(scoreCard.scoreArray[1]).toEqual([1, 2, 3,3,'']);
  });

  it('can recognise strikes', function() {
    scoreCard.scoreRound(10, 0);
    scoreCard.scoreRound(6, 3);
    expect(scoreCard.scoreArray[1][4]).toEqual('strike');
  });

  it('can recognise an invalid score', function() {
    expect(function() { scoreCard.scoreRound(9, 2); })
                    .toThrowError('Score not possible');
  });

  it('can only allows 10 rounds', function() {
    for (var i = 0; i < 10; i++) {
      scoreCard.scoreRound(2, 4);
    };

    expect(function() { scoreCard.scoreRound(2, 4); })
                    .toThrowError('Game over');
  });

  it('it allows 1 extra ball if round 10 is a spare', function() {
    for (var i = 0; i < 9; i++) {
      scoreCard.scoreRound(8, 1);
    };

    scoreCard.scoreRound(9, 1);
    expect(scoreCard.bonusBalls).toEqual(1);
  });

  it('allows 2 extra balls if round 10 is a strike', function() {
    for (var i = 0; i < 9; i++) {
      scoreCard.scoreRound(8, 1);
    };

    scoreCard.scoreRound(10, 0);
    expect(scoreCard.bonusBalls).toEqual(2);
  });

  it('can score a spare', function() {
    scoreCard.scoreRound(9, 1);
    scoreCard.scoreRound(8, 1);
    expect(scoreCard.currentScore).toEqual(27);
  });

  it('can score a strike followed by an ordinary round', function() {
    scoreCard.scoreRound(10, 0);
    scoreCard.scoreRound(8, 1);
    expect(scoreCard.currentScore).toEqual(28);
  });

  it('can score a strike followed by a strike round', function() {
    for (var i = 0; i < 6; i++) {
      scoreCard.scoreRound(10, 0);
    };

    expect(scoreCard.currentScore).toEqual(120);
  });

  it('can score a perfect round', function() {
    for (var i = 0; i < 10; i++) {
      scoreCard.scoreRound(10, 0);
    };

    expect(scoreCard.bonusBalls).toEqual(2);
    scoreCard.scoreRound(10, 0);
    scoreCard.scoreRound(10, 0);
    expect(scoreCard.currentScore).toEqual(300);
  });

  it('only allows 2 bonus balls after almost perfect round', function() {
    for (var i = 0; i < 10; i++) {
      scoreCard.scoreRound(10, 0);
    };

    scoreCard.scoreRound(9, 1);
    expect(scoreCard.currentScore).toEqual(289);
    expect(function() { scoreCard.scoreRound(10, 0); })
                    .toThrowError('Game over');
  });
});
