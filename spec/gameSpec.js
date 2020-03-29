'use strict';

describe('Game', () => {
  let game;

  beforeEach( () => {
    game = new Game;
  })

  it ('can have a gutter game', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(0);
  })

})
