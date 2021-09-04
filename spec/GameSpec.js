describe('Game', () => {
  beforeEach(() => {
    scoreCard = new ScoreCardDouble;
    game = new Game(scoreCard);
  });

  it('has a scorecard', () => {
    expect(game.scoreCard).toEqual(scoreCard);
  });

  it('lets you make a first roll', () => {
    game.roll(3);

    expect(game.scoreCard.getFrameNumber(1).firstRoll).toEqual(3);
  });

  it('lets you make a second roll', () => {
    game.roll(3);
    game.roll(5);

    expect(game.scoreCard.getFrameNumber(1).firstRoll).toEqual(3);
    expect(game.scoreCard.getFrameNumber(1).secondRoll).toEqual(5);
  });

  it('adds new frames appropriately', () => {
    game.roll(3);
    game.roll(5);
    game.roll(4);
    game.roll(6);
    game.roll(10);
    game.roll(2);

    console.log(game.scoreCard)

    expect(game.scoreCard.getFrameNumber(1).firstRoll).toEqual(3);
    expect(game.scoreCard.getFrameNumber(1).secondRoll).toEqual(5);
    expect(game.scoreCard.getFrameNumber(2).firstRoll).toEqual(4);
    expect(game.scoreCard.getFrameNumber(2).secondRoll).toEqual(6);
    expect(game.scoreCard.getFrameNumber(3).firstRoll).toEqual(10);
    expect(game.scoreCard.getFrameNumber(4).firstRoll).toEqual(2);
  });

  describe('the score function', () => {
    it('calculates the correct score for a single incomplete frame', () => {
      game.roll(3);

      expect(game.score()).toBe(3);
    });

    it('calculates the correct score for a single boring frame', () => {
      game.roll(3);
      game.roll(5);

      expect(game.score()).toBe(8);
    });

    // it('calculates the correct score for a spare', () => {
    //   game.roll(5);
    //   game.roll(5);
    //   game.roll(5);
    //   game.roll(0);

    //   expect(game.score()).toBe(20);
    // });
  });
});
