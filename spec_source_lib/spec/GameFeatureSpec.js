describe("Game", function() {
  var game;
  var score;

  beforeEach(function() {
    game = new Game();
    score = new Frame(0, 0);
  });

  it("should return a score of 0 for a gutter game", function() {
    for ( var i = 0; i < 20; i++ ) {
    game.roll(score.score())
    }
    expect(game.currentScore()).toEqual(0);
  });

  it("should be complete after the 20 throws of a gutter game", function() {
    for ( var i = 0; i < 20; i++ ) {
    game.roll(score.score())
    }
    expect(game.gutterGame(20, 0)).toEqual(true);
  });

})
