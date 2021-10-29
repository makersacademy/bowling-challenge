const Bowling = require('./bowling')

let game;
beforeEach(() => {
  game = new Bowling();
});

describe('Bowling', () => {

  it('should return a score of 0 for a game of all zeros (guttergame)', () => {
    rollMany(0, 20);
    expect(game.score).toEqual(0);
  });
  it('should return a score of 20 for a game of all ones', () => {
    rollMany(1, 20);
    expect(game.score).toEqual(20);
  })
});

function rollMany(pins, rolls) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}