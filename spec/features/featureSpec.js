describe("Feature", function() {

  var game;
  game = new Game();

  it("adds 2 frames' scores (no strikes or spares)", function() {
    game.calculateFrameTotal(3, 5);
    game.checkAllScores();
    game.calculateFrameTotal(10, 0);
    expect(game.checkAllScores()).toEqual([8, 10]);
  })

});
