describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard(Player, Frame, Roll, Referee);
  });

  it("exists", function() {
    expect(function(){new BowlingScoreboard(Player, Frame, Roll, Referee)}).not.toThrow();
  });

});
