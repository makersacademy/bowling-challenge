const { it, expect } = require('@jest/globals');
const BowlingGame = require('./bowlingGame')

describe('BowlingGame', () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  })

  it('returns 0 as the final score for a guttter game', () => {
    for(let i = 0; i<20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  })

  it('returns 20 as the final score for a game of all 1 rolls', () => {
    for(let i = 0; i<20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  })

  it('can apply a spare correctly', () => {
    game.roll(4);
    game.roll(6);
    game.roll(3);
    game.roll(5);
    for(let i = 0; i<16; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(21);
  })
})