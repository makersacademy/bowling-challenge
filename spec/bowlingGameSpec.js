describe("Bowling Game", function() {
  var game;
  game = new BowlingGame();
  it("should start the game on 0 points", function() {
    expect(game.currentTotal).toEqual(0)
  })
})
