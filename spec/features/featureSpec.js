describe("Feature", function() {

  var game;
  game = new Game();

  it("adds 3 frames' scores", function() {
    game.calculateFrameTotal(3, 5);
    game.calculateFrameTotal(10); // strike
    game.calculateFrameTotal(2, 8); // spare
    expect(game.checkAllScores()).toEqual([8, "X", 10]);
  });

});
