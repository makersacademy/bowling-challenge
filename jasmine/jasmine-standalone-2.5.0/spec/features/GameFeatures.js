describe('Game feature tests', function () {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function playRound() {
      game.newRound();
      game.firstRoll();
      game.secondRoll();
  }

  it('creates a new round', function() {
    game.newRound();
    expect(game.currentRound).not.toEqual(null);
    console.log(game.currentRound);
  });

  it('creates a new round with two rolls', function() {
    playRound();
    console.log(game.currentRound);
    expect(game.currentRound.firstRoll).not.toEqual(null);

    if (game.currentRound.strike === true) {
      expect(game.currentRound.secondRoll).toEqual(null);
    } else {
      expect(game.currentRound.secondRoll).not.toEqual(null);
    }
    expect(game.rounds.length).toEqual(1);
    console.log(game);
  });

  it('runs through a game with multiple rolls', function() {
    playRound();
    playRound();
    playRound();

    expect(game.rounds.length).toEqual(3);
    console.log(game);
  });

  it('runs through an entier game', function() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();


  });


});
