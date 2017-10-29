describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('starts with a score of zero', function() {
    expect(game._score).toEqual(0)
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

  it('ends after 10 rounds', function () {
    scoringGame();
    expect(function () { game.bowl(1) } ).toThrow(new Error('You\'re out of you\'re element Donny, no bowls left!'))
  })

  it('adds the next roll to a spare frame', function () {
    scoringGameWithSpare()
    game.addBonus()
    expect(game.getScore()).toEqual(29)
  })

  var scoringGameWithSpare = function () {
    game.bowl(2);
    game.bowl(8);
    for (var i = 0; i < 18; i++) {
      game.bowl(1)
    }
  }

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