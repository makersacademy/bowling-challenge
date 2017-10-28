describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('can score a gutter game', function () {
    manyRolls(20, 0);
    expect(game.returnScore()).toEqual(0)
  });

  it('can score a game of rolls not including spares or strikes', function () {
    manyRolls(20, 1)
    expect(game.returnScore()).toEqual(20)
  })

  it('can score a game with one spare', function () {
    game.roll(9);
    game.roll(1);
    game.roll(3);
    manyRolls(17, 0);
    expect(game.returnScore()).toEqual(16)
  })

  it('can score a game with one strike', function () {
    game.roll(10);
    manyRolls(18,1);
    expect(game.returnScore()).toEqual(30)
  })

  it('can score a perfect game', function () {
    manyRolls(12,10);
    expect(game.returnScore()).toEqual(300)
  })

  var manyRolls = function (rolls, pins) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
});