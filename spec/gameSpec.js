'use strict';

describe('Game', function() {

  var game;
  var bowl;
  var lastFrame;

  beforeEach(function() {
    game = new Game();
    bowl = jasmine.createSpyObj('bowl', ['._currentGo']);
  });

  it('a player can roll two balls for their turn', function() {
    expect(game.bowl()).not.toBeNull();
  });

      it('player gets a strike', function() {
      game.bowl(10,0);
      expect(game.strike()).toEqual(game.PINS);
      });

  it('keeps a record of the score', function() {
    expect(game.playerScore()).not.toBeNull();
  });

    it('player gets a spare', function() {
      game.bowl(8,2);
      expect(game.spare()).toEqual(game.PINS);
    });

    it('player fails to knock over all pins', function() {
      game.bowl(8,1);
      expect(game.open()).not.toEqual(game.PINS);
    });

    // it('calls final frame function when 9 games have been playes', function() {
    //   game._frame.length = 8;
    //   expect(game.lastFrame()).toHaveBeenCalled();
    // });
});
