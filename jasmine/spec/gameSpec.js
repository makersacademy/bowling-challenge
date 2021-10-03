'use strict';

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('starts with a score of 0', () => {
    expect(game.runningScore).toEqual(0);
  });

  it('adds the roll together', () => {
    game.roll(3, 4)
    expect(game.runningScore).toEqual(7);
  });

  it('adds all 10 rolls together', () => {
    for (let i = 0; i < 10; i++) {
      game.roll(3, 4);
    }
    expect(game.runningScore).toEqual(70);
  });

  it('gutter game equals zero', () => {
    for (let i = 0; i < 10; i++) {
      game.roll(0, 0);
    }
    expect(game.runningScore).toEqual(0);
  });

  it('calculates score for spare', () => {
    game.roll(5, 5);
    game.roll(4, 2);
    game.calculateSparePoints();
    expect(game.runningScore).toEqual(20)
  });

  it('calculates score for spare', () => {
    game.roll(10, 0);
    game.roll(4, 4);
    game.calculateStrikePoints();
    expect(game.runningScore).toEqual(26)
  });

});