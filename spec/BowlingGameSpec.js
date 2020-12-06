'use strict';

describe('bowling', () => {
  let game
  beforeEach( () => {
    game = new BowlingGame();
  });

  it('can roll a gutter game', () => {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can roll a game of ones', () => {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(4);
    for (var i = 0; i < 17; i++){
      game.roll(0);
    }
    expect(game.score()).toEqual(18)
  });

});
