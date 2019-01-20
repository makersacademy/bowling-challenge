describe('Game features', function() {
  let game = new Game;

  it('game with spares and 10th frame bonus', function() {
    for (let i = 0; i < 9; i++) {
      game.bowl(5, 5);
    };
    game.bowl(5, 5, 5);

    expect(game.isOver).toBe(true);
    expect(game.finalScore).toEqual(150);
  })
})
