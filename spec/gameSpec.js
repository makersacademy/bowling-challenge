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
    game.updateScore();
    expect(game.returnScore()).toEqual(0)
  });

  it('can score a game of rolls not including spares or strikes', function () {
    game._rolls = [1,2,3,2,4,5,3,4,2,1,4,2,4,2,4,1,5,3,4,2];
    game.updateScore();
    expect(game.returnScore()).toEqual(58)
  })

  it('can score a game with one spare', function () {
    game._rolls = [1,9,3,2,4,5,3,4,2,1,4,2,4,2,4,1,5,3,4,2]
    game.updateScore();
    expect(game.returnScore()).toEqual(68)
  })

  it('can score a game with one strike', function () {
    game._rolls = [1,9,3,2,4,10,0,4,2,1,4,2,4,2,4,1,5,3,4,2]
    game.updateScore();
    expect(game.returnScore()).toEqual(76)
  })
});