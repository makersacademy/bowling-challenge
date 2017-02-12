describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard(Object);
  });

  it("can creat 10 frames", function() {
    expect(bowlingScoreboard.frames.length).toEqual(10);
  });

});
