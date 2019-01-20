describe('Game features', function() {
  let game = new Game;

  it('Full game with strikes', function() {
    for (let i = 0; i < 9; i++) {
      game.bowl(10, 10);
    }
    game.bowl(10, 10, 10);

    expect(game.isOver).toBe(true);
    expect(game.finalScore).toEqual(300);
  })
})
