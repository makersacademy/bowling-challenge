describe("Game Scorecard", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should return total score as 0 for a gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.inputBowl(0);
    };
    expect(game.showTotalPoints()).toEqual(0);
  });

  it("should start with frame count equalling 0", function() {
    expect(game.showFrameCount()).toEqual(0);
  });

  it("should start with ball number equalling 1", function() {
    expect(game.showFrameCount()).toEqual(0);
  });

  it("should start with a scorecard as an empty array", function() {
    expect(game.showScorecard()).toEqual([]);
  });

});
