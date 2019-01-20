describe('Game features', function() {
  let game = new Game;

  it('game with spares, no 10th frame bonus', function() {
    for (let i = 0; i < 19; i++) {
      game.bowl(5, 5);
    };
    game.bowl(5, 4);

    expect(game.isOver).toBe(true);
    expect(game.finalScore).toEqual(144);

  })
})
