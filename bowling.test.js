const BowlingGame = require('./bowling');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('should return 0 for a game of all zeros', () => {
    rollMany(0, 20);

    expect(game.score).toEqual(0);
  });

  it('should return 20 for a game of all ones', () => {
    rollMany(1, 20);

    expect(game.score).toEqual(20);
  });

  it('should return the correct score when a spare is rolled', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);

    expect(game.score).toEqual(16);
  });

  function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i += 1) {
      game.roll(pins);
    }
  }
});
