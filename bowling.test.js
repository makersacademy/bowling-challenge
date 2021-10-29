const Bowling = require('./bowling')

describe('Bowling', () => {

  it('should return a score of 0 for a game of all zeros (guttergame)', () => {
    const game = new Bowling();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });
  it('should return a score of 20 for a game of all ones', () => {
    const game = new Bowling();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score).toEqual(20);
  })
});