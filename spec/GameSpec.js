describe("Player", function() {
  var player;

  beforeEach(function() {
    game = new Game();
  });

  it("Should start with a blank score", function() {
    expect(game._currentScore).toEqual(0);
  });

  it("Should start on frame 1", function() {
    expect(game._frame).toEqual(1)
  })

  it("Should accept score inputs", function() {
    game.inputScore(4)
    expect(game._currentScore).toEqual(4);
  });

  it("Should advance to the next frame after two normal score inputs", function() {
    game.inputScore(3)
    game.inputScore(4)
    expect(game._frame).toEqual(2)
  });

  it("Should add a score of 10 on a strike", function() {
    game.inputScore("strike")
    expect(game._currentScore).toEqual(10)
  });
});
