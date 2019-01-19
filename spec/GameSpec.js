describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("starts with a score of 0", function() {
    expect(game.overallScore).toEqual(0);
  });

  it("calculates the final score of all the frames", function() {
    for (var i = 0; i < 9; i++) { game.framesScores[i] = 0 };
     expect(game.calculateOverallScore()).toEqual(0);
  });

});
