'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('creates a game', function() {
    expect(game).toBeDefined();
  });

  it('can record a roll', function() {
    expect(game.recordRoll(8)).toEqual(8);
  });

});
