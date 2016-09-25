describe('Game feature tests', function () {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function playRound() {
      game.newRound();
      game.bowl(); //first bowl
      game.bowl(); // second bowl
  }

  it('creates a new round', function() {
    game.newRound();
    expect(game.currentRound).not.toEqual(null);
  });

  it('creates a new round with two rolls', function() {
    playRound();

    expect(game.rounds.length).toEqual(1);
  });

  it('runs through a game with multiple rolls', function() {
    playRound();
    playRound();
    playRound();

    expect(game.rounds.length).toEqual(3);
  });

  it('alerts you when you try to play after the game is over.', function() {
    spyOn(window, 'alert');

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
    expect(window.alert).toHaveBeenCalledWith("The game is over! Refresh the page to play again.");
  });

  // it("plays a regular game from start to finish", function() {
  //
  // });


});
