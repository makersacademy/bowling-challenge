describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard();
  });

  // As a player
  // So I can play my game
  // I want my scoreboard to be created with 10 frames
  it("is made by 10 frames", function() {
    expect(bowlingScoreboard.frames.length).toEqual(10);
  });

});
