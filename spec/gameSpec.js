describe ("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("starts with an empty list of frames by default", function() {
    expect(game.checkAllScores()).toEqual([]);
  });

  it("rolling adds a frame to frames array", function() {
    game.addFrameScore(10);
    expect(game.checkAllScores().length).toEqual(1);
  });

  it("adds the scores for 1 frame", function() {
    game.calculateFrameTotal(3, 3);
    expect(game.checkAllScores()[0]).toEqual(6)
  });



});
