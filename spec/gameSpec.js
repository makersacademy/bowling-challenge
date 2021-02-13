'use strict';

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('can roll all 0s', function() {
    for (var i = 0; i < 10; i++)
      game.roll(0)
    expect(game.score()).toEqual(0);
  })
})


// can roll all 0s
// can roll all spares
// can roll a strike
// can roll a normal game
// can roll all strikes
