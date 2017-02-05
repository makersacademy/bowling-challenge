'use strict';

describe('Game', function() {

  var game;
  var bowl;
  var strike;

  beforeEach(function() {
    game = new Game();
    bowl = jasmine.createSpyObj('bowl', ['._currentGo']);
  });

  it('a player can roll two balls for their turn', function() {
    expect(game.bowl()).not.toBeNull();
  });

      it('player gets a strike', function() {
      game.bowl(10,0);
      expect(game._currentGo[0]).toEqual(game.PINS);
      });

  it('keeps a record of the score', function() {
    expect(game.playerScore()).not.toBeNull();
  });

    it('player gets a spare', function() {
      game.bowl(8,2);
      expect(game._currentScore).toEqual(game.PINS);
    });

    it('player fails to knock over all pins', function() {
      game.bowl(8,1);
      expect(game.open()).not.toEqual(game.PINS);
    });
});
