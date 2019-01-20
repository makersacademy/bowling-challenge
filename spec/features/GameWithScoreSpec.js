describe('Game features', function() {
  let game = new Game;

  it('a game can be played and scored without spares or strikes', function() {
    for (let i = 0; i < 10; i++) {
      game.bowl(1, 1);
    };

    expect(game.finalScore).toEqual(20);
  });
});
