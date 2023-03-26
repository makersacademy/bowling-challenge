const Game = require('./Game');

describe('Roll', () => {
  it ('adds the number of pins knocked down to the rolls array', () => {
    const newGame = new Game;
    newGame.roll(5);
    expect(newGame.rolls).toEqual([5]);
  });

describe('score' () => {
  it('scores a gutter game', () => {
    const game = new BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });
})
});