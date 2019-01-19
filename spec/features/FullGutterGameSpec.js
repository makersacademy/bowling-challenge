describe('Scorecard', function() {
  let game;

  beforeEach(function () {
    game = new Game()
  });

  it('a user scores 0 for a full gutter game', function () {
    for (let i = 0; i < 20; i++) {
      game.bowl(0);
    };

    expect(game.isOver).toBe(true);
    expect(game.finalScore).toEqual(0);
  });
});
