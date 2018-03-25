'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('can roll Gutter game', function() {
    for (var i = 0; i < 20 ; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });
});
