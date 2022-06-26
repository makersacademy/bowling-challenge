const Game = require('../game');

describe('Game', () => {
  it('initialises with Frame 1 Roll 1, and total score as 0', () => {
    const game = new Game();
    expect(game.getFrame()).toBe(1);
    expect(game.getRoll()).toBe(1);
    expect(game.getPinsRolled()).toStrictEqual([[], [], [], [], [], [], [], [], [], []]);
    expect(game.getTotalScore()).toBe(0);
    expect(game.getContinue()).toBe(true);
  });
})