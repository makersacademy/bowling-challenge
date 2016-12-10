describe("Bowling Game", function() {
  var game;
  game = new BowlingGame();
  it("should start the game on 0 points", function() {
    expect(game.currentTotal).toEqual(0)
  })

  it("should start on the first frame", function() {
    expect(game.currentFrame).toEqual(1)
  })
})
