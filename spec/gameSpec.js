describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe('#roll', function() {
    beforeEach(function() {
      game.roll(3);
    })

    it('registers a roll', function() {
      expect(game.gameRolls[0]).toEqual(3);
    });

    it('adds a frame', function() {
      expect(game.frames.length).toEqual(1);
    });

    it('adds a new frame when frame finished', function() {
      game.roll(2);
      game.roll(4);
      expect(game.frames.length).toEqual(2);
    });
  });

  describe('#intermediateScore', function() {
    beforeEach(function() {
      game.roll(2);
      game.roll(4);
    });

    it('shows empty score after a strike', function() {
      game.roll(10);
      expect(game.intermediateScore(2)).toEqual('');
    });

    it('shows empty score after a spare', function() {
      game.roll(4);
      game.roll(6);
      expect(game.intermediateScore(2)).toEqual('');
    });

    it('shows score after normal frame', function() {
      expect(game.intermediateScore(1)).toEqual(6);
    });
  });

  describe('#score', function() {
    beforeEach(function() {
      game.roll(2);
      game.roll(4);
      game.roll(5);
      game.roll(3);
    });

    it('shows score for a simple no bonus frames', function() {
      expect(game.score()).toEqual(14);
    });

    it('shows score for a game with a strike', function() {
      game.roll(10);
      game.roll(3);
      game.roll(5);
      expect(game.score()).toEqual(40);
    });
  });
});
