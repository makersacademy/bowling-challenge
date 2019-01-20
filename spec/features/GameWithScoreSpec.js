describe('Game features', function() {
  let game;

  beforeEach(function () {
    game = new Game()
  });

  it('a game can be played and scored without spares or strikes', function() {
    for (let i = 0; i < 20; i++) {
      game.bowl(1, 1);
    };

    expect(game.isOver).toBe(true);
    expect(game.finalScore).toEqual(20);
  });
});
