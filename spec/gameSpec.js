'use strict';

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('hits 2 pins', () => {
    for(let i = 0; i < 1; i++ ) {
      game.hit();
    }
    expect(game.hit()).toEqual(2)
  });
});