describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('starts with a score of zero', function() {
    expect(game.getScore()).toEqual(0)
  })

  it('returns the score of the current game', function () {
    game.bowl(1);
    expect(game.getScore()).toEqual(1)
  })

  it('records a completed frame', function () {
    game.bowl(2);
    game.bowl(3);
    expect(game._frames.length).toEqual(1)
  })

  it('can score a gutter game', function () {
    gutterGame();
    expect(game.getScore()).toEqual(0)
  })

  it('can score a scoring game', function() {
    scoringGame();
    expect(game.getScore()).toEqual(20)
  })

  var scoringGame = function () {
    for (var i = 0; i < 20; i++) {
      game.bowl(1)
    }
  }

  var gutterGame = function () {
    for (var i = 0; i < 20; i++) {
      game.bowl(0)
    }
  }
});