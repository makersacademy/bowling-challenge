describe('Game', () => {
  beforeEach( () => {
    game = new Game();
  });

  describe('On initialize', () => {
    it('has started', () => {
      expect(game).toBeDefined();
      expect(game.score).toEqual(0);
    });
    it('has no frames', () => {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#throwBowl', () => {
    it('adds the thrown bowls and result to the this.frames array', () => {
      game.throwBowl(5,5);
      expect(game.frames).toEqual([{firstBowl: 5,secondBowl: 5,outcome: '/',total: 10}]);
    });
  });
  describe('#frameOutcome', () => {
    it('returns the correct outcome for a spare', () => {
      expect(game.frameOutcome([5,5])).toEqual('/');
    });
    it('returns the correct outcome for a strike', () => {
      expect(game.frameOutcome([10,0])).toEqual('X');
    });
    it('returns the correct outcome for a open', () => {
      expect(game.frameOutcome([3,6])).toEqual('O');
    });
  });

  describe('#strikeBonus', () => {
    it('correctly calculates the strike bonus when had an open frame afterwards', () => {
      game.throwBowl(10,0);
      game.throwBowl(3,2);
      game.throwBowl(0,0);
      expect(game.strikeBonus(0)).toEqual(5);
    })
    it('correctly calculates the strike bonus when there are two strikes than an open frame afterwards', () => {
      game.throwBowl(10,0);
      game.throwBowl(10,0);
      game.throwBowl(3,0);
      expect(game.strikeBonus(0)).toEqual(13);
    })
    it('correctly calculates the strike bonus when there are three strikes in a row', () => {
      game.throwBowl(10,0);
      game.throwBowl(10,0);
      game.throwBowl(10,0);
      expect(game.strikeBonus(0)).toEqual(20);
    });
  });

  describe('#spareBonus', () => {
    it('correctly calculates the spare bonus', () => {
      game.throwBowl(5,5);
      game.throwBowl(4,4);
      expect(game.spareBonus(0)).toEqual(4);
    });
  });

  describe('#isCompleted', () => {
    it('identifies whether the game is completed', () => {
      game.throwBowl(5,3);
      expect(game.isCompleted()).toBe(false);
    });
  });
});