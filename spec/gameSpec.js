describe('Bowling Game', function() {

  it('can roll gutter game', function () {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can knock down one pin in all 20 bowls', function() {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.bowl(1);
    }
    expect(game.score()).toEqual(20);
  });
});
