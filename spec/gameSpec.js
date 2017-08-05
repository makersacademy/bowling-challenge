'use strict';

describe('Game', function() {
  var game;
  var player;
  var frame;

  beforeEach(function() {
    game = new Game('Nutbrown');
    player = game.getPlayer();
    frame = game.getFrames()[game.getCurrentFrame()];
  });

  describe('constructor', function() {
    it('has ten frames', function() {
      expect(game.getFrames().length).toEqual(10);
    });

    it('the current frame is 1', function() {
      expect(game.getCurrentFrame()).toEqual(0);
    });

    it('has the player', function() {
      expect(player.getName()).toEqual('Nutbrown');
    });
  });

  describe('receive roll', function() {
    describe('open frame', function() {
      beforeEach(function() {
        game.receiveRoll(6);
        game.receiveRoll(3);
      });

      it('updates the first roll', function() {
        expect(frame.getFirstRoll()).toEqual(6);
      });

      it('updates the second roll', function() {
        expect(frame.getSecondRoll()).toEqual(3);
      });

      it('updates the current frame', function() {
        expect(game.getCurrentFrame()).toEqual(1);
      });
    });
  });
});
