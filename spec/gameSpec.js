'use strict';

describe('Game', function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game('Nutbrown');
    player = game.getPlayer();
  });

  describe('constructor', function() {
    it('has ten frames', function() {
      expect(game.getFrames().length).toEqual(10);
    });

    it('the current frame is 1', function() {
      expect(game.getCurrentFrame()).toEqual(1);
    });

    it('has the player', function() {
      expect(player.getName()).toEqual('Nutbrown');
    });
  });
});
