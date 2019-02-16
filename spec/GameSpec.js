describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should start with total points 0", function() {
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

  it("should create a Frame instance when the value of the first ball of a frame is given", function() {
    game.inputBallValue(0)
    expect(game.showScorecard().length).toEqual(1);
  });

});
