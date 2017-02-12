describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard();
  });

  it("holds 10 frames", function() {
    expect(bowlingScoreboard.frames.length).toEqual(10);
  });

});
