describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('starts a new game when created', function () {
    expect(game.returnScore()).toEqual(0);
  });

  it('can score a gutter game', function () {
    for (var i = 1; i <= 20; i++); {
      game.roll(0);
    }
    expect(game.returnScore()).toEqual(0)
  });
});