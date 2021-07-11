'use strict';

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('hits 2 pins', () => {
    expect(game.hit(2)).toEqual(2)
  });

  it('hits a strike', () => {
    expect(game.hit(10)).toEqual(10)
  });

  it('hits a gutter game', () => {
    for (let i = 0; i < 20; i++) {
      game.hit(0);
    }
    expect(game.score).toEqual(0)
  })
});