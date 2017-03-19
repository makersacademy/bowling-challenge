describe ("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("starts with an empty list of frames by default", function() {
    expect(game.checkAllScores()).toEqual([]);
  })

  it("rolling adds a frame to frames array", function() {
    game.roll(10);
    expect(game.checkAllScores().length).toEqual(1);
  })
});
