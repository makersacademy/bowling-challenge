describe('Game', function() {
  beforeEach( function() {
    game = new Game();
  });

  describe('On initialize', function() {
    it('has started', function() {
      expect(game).toBeDefined();
      expect(game.score).toEqual(0);
    });
    it('has no frames', function() {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#throwBowl', function() {
    it('adds the thrown bowls and result to the this.frames array', function() {
      game.throwBowl(5,5);
      expect(game.frames).toEqual([{firstBowl: 5,secondBowl: 5,outcome: '/',total: 10}]);
    });
  });
  describe('#frameOutcome', function() {
    it('returns the correct outcome for a spare', function() {
      expect(game.frameOutcome([5,5])).toEqual('/');
    });
    it('returns the correct outcome for a strike', function() {
      expect(game.frameOutcome([10,0])).toEqual('X');
    });
    it('returns the correct outcome for a open', function() {
      expect(game.frameOutcome([3,6])).toEqual('O');
    });
  });

  describe('#strikeBonus', function() {
    it('correctly calculates the strike bonus when had an open frame afterwards', function() {
      game.throwBowl(10,0);
      game.throwBowl(3,2);
      game.throwBowl(0,0);
      expect(game.strikeBonus(0)).toEqual(5);
    })
    it('correctly calculates the strike bonus when there are two strikes than an open frame afterwards', function() {
      game.throwBowl(10,0);
      game.throwBowl(10,0);
      game.throwBowl(3,0);
      expect(game.strikeBonus(0)).toEqual(13);
    })
    it('correctly calculates the strike bonus when there are three strikes in a row', function() {
      game.throwBowl(10,0);
      game.throwBowl(10,0);
      game.throwBowl(10,0);
      expect(game.strikeBonus(0)).toEqual(20);
    });
  });

  describe('#spareBonus', function() {
    it('correctly calculates the spare bonus', function() {
      game.throwBowl(5,5);
      game.throwBowl(4,4);
      expect(game.spareBonus(0)).toEqual(4);
    });
  });
});