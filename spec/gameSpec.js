describe('Bowling Game', function() {
  beforeEach(function() {
    game = new Game();
  });

  it('can roll gutter game', function () {
    for (var i = 0; i < 20; i++) {
      game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can knock down one pin in all 20 bowls', function() {
    for (var i = 0; i < 20; i++) {
      game.bowl(1);
    }
    expect(game.score()).toEqual(20);
  });
});
