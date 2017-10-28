'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('initializes the game score as 0', function() {
    expect(game.getCurrentScore()).toEqual(0);
  });

  it('initializes the frame count as 1', function() {
    expect(game.getCurrentFrame()).toEqual(1);
  });

  it('increases score when points are won', function() {
    game.scoreUpdate(7)
    expect(game.getCurrentScore()).toEqual(7);
  });

});
