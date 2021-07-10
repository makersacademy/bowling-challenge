'use strict';

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('hits 2 pins', () => {
    expect(game.hit()).toEqual(2)
  });
});