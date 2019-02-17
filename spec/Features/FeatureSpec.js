describe("Game Scorecard", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should return total score as 0 for a gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.inputBallValue(0);
    };
    expect(game.showTotalPoints()).toEqual(0);
  });

  it("should not be possible to start an 11th frame", function(){
    for (var i = 0; i < 20; i++) {
      game.inputBallValue(0);
    };
    expect(function() {game.inputBallValue(0);} ).toThrow(new Error("You have completed ypur scorecard - start a new game."));
  });

  it("should return total score for a non-gutter game", function() {
    var scoreArray = [3, 4, 7, 2, 5, 4, 3, 2, 0, 7, 6, 2, 1, 3, 6, 2, 8, 1, 6, 0]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(72)
  });

});
