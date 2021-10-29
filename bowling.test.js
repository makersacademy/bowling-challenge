const Bowling = require('./bowling')

describe('Bowling', () => {

  test('Guttergame: should return a score of 0 for a game of all zeros', () => {
    const game = new Bowling();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }

    expect(game.score).toEqual(0);
  });
});