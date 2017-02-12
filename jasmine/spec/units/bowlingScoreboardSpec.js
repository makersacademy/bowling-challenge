describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard(Frame,Roll);
  });

  it("can creat 10 frames", function() {
    expect(bowlingScoreboard.frames.length).toEqual(10);
  });

});
