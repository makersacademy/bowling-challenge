describe('Game', function() {
  let game;
  let currentRoll;

  beforeEach(function() {
    game = new Game;
  });

  it('is unfinished at the beginning', function() {
    expect(game.isOver).toBe(false);
  });

  it('game.roll cahnges the current roll', function() {
    game.roll(0);
    expect(game.currentRoll).toBe(2)
  });
});
