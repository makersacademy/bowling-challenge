const Game = require('./game');

describe('Game class', () => {
  const game = new Game();

  it('prints the frame scores', () => {
    game.startGame();
    expect(game.frameCount).toBe(1);
  });


});