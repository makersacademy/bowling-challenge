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

    it('calculates the correct score for a game containing a spare', () => {
      game.roll(5);
      game.roll(5);
      game.roll(5);
      game.roll(2);

      expect(game.score()).toBe(22);
    });

    it('calculates the correct score for a game containing a strike', () => {
      game.roll(10);
      game.roll(5);
      game.roll(2);

      expect(game.score()).toBe(24);
    });

    it('calculates the correct score for a game containing consecutive strikes', () => {
      game.roll(10);
      game.roll(10);
      game.roll(5);
      game.roll(2);

      expect(game.score()).toBe(49);
    });

    it('calculates the correct score for a perfect game', () => {
      for (let i = 0; i < 12; i++) { game.roll(10) }

      expect(game.score()).toBe(300);
    });

    it('calculates the correct score for an example game', () => {
      let scores = [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6]
      
      scores.forEach((score) => game.roll(score))

      expect(game.score()).toBe(133);
    });
  });
});
