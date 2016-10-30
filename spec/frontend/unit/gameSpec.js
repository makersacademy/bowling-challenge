describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("should initialize with a score of 0", function() {
    expect(game._overallScore).toEqual(0)
  });

});
