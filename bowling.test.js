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
  it('should calculate a spare correctly', () => {
    game.roll(9)
    game.roll(1) // spare
    game.roll(1) // part of spare bonus calculation
    rollMany(0, 17) // remaining rolls are gutter balls
    // above combination of balls should give a score of (9+1+1)+1 = 12
    expect(game.score).toEqual(12);
  })
});

function rollMany(pins, rolls) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}