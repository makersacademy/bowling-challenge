describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game;
  });

  it('is unfinished at the beginning', function() {
    expect(game.isOver).toBe(false);
  });

  it('game.bowl changes the current roll', function() {
    game.bowl(0);
    expect(game.currentRoll).toBe(2);
  });

  it('game.status checks if game has ended', function() {
    game.gameStatus();
    expect(game.isOver).toBe(false)
  });

  it('game.gameOver() will say when the game is over', function() {
    game.gameOver(true);
    expect(game.isOver).toBe(true);
  });
});
