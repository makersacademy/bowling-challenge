const BowlingGame = require ('./bowlingGame')

describe ('Bowling game', () => {
  test ('Creates a game', () => {
    const game = new BowlingGame();
  });
  test ('Can roll a gutter game', () => {
    const game = new BowlingGame();
    for (let i=0; i<20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  })
})