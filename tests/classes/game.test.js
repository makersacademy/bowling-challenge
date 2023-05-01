const Game = require('../../src/classes/game');
// const Scorecard = require('../src/classes/scorecard.js');

describe('Game', () => {
  test('creates a new game', () => {
    const game = new Game();
    
    expect(game.scorecard).toBeInstanceOf(Scorecard);
    expect(game.scorecard.frames.length).toBe(0);
    expect(game.currentFrame).toBe(0);
    expect(game.frameCount).toBe(0);
  });
});