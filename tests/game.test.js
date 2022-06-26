const Game = require('../game');

describe('initialisation', () => {
  it('initialises with Frame 1 Roll 1, and total score as 0', () => {
    const game = new Game();
    expect(game.frame()).toBe(1);
    expect(game.roll()).toBe(1);
    expect(game.pins_rolled()).toStrictEqaul([[], [], [], [], [], [], [], [], [], []]);
    expect(game.total_score()).toBe(0);
    expect(game.continue()).tobe(true);
  });
})