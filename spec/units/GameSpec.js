describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game;
  });

  it('is unfinished at the bgeinning', function() {
    expect(game.isOver).toBe(false);
  });
});
