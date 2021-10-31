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
  it('should calculate a strike correctly', () => {
    game.roll(10) // strike
    game.roll(1) // part of strike bonus calculation
    rollMany(0, 17) // remaining rolls are gutter balls
    // above combination of balls should give a score of (10+1)+1 = 12
    expect(game.score).toEqual(12);
  })
  it('should calculate the 10th frame correctly (all strikes)', () => {
    rollMany(0, 18) // first 18 rolls are gutter balls
    game.roll(10)
    game.roll(10)
    game.roll(10)
    // 10 points for first strike then 20 for the bonus
    expect(game.score).toEqual(30);
  })
  it('should calculate the 10th frame correctly (spare then strike)', () => {
    rollMany(0, 18) // first 18 rolls are gutter balls
    game.roll(1)
    game.roll(9) // spare
    game.roll(10) // strike
    // 10 points for spare then 10 for the bonus
    expect(game.score).toEqual(20);
  })
  it('should return a score of 300 for a perfect game', () => {
    rollMany(10,12) // two extra strikes for 10th frame
    expect(game.score).toEqual(300);
  })
});

function rollMany(pins, rolls) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}