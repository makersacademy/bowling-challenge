describe('Game', () => {
  beforeEach(() => {
    scoreCard = new ScoreCardDouble;
    game = new Game(scoreCard);
  });

  it('has a scorecard', () => {
    expect(game.scoreCard).toEqual(scoreCard);
  });
});
