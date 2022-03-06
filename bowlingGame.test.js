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
})