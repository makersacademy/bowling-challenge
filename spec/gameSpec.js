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

describe('#score', function() {
    beforeEach(function() {
      game.roll(2);
      game.roll(4);
    });

    it('shows empty score after a strike', function() {
      game.roll(10);
      expect(game.score(2)).toEqual('');
    });

    it('shows empty score after a spare', function() {
      game.roll(4);
      game.roll(6);
      expect(game.score(2)).toEqual('');
    });

    it('shows empty score after a strike followed by one roll', function() {
      game.roll(10);
      game.roll(4);
      expect(game.score(3)).toEqual('');
    })

    it('shows score after normal frame', function() {
      expect(game.score(1)).toEqual(6);
    });

    it('shows score after a normal frame and counts previous bonuses', function() {
      game.roll(10);
      game.roll(3);
      game.roll(5);
      expect(game.score(3)).toEqual(32);
    });

    it('shows score of previous round with strike when next two are rolled', function() {
      game.roll(10);
      game.roll(3);
      game.roll(4);
      expect(game.score(2)).toEqual(23);
    });
  });
});
