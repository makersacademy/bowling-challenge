describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard(Frame,Roll); // Would prefer this London style
  });

  describe("frames", function() {
    it("starts with 10 frames", function() {
      expect(bowlingScoreboard.frames.length).toEqual(10);
    });
  });

  describe("activeFrame()", function() {
    it("returns the frame object active at the moment", function() {
      expect(bowlingScoreboard.activeFrame()).toEqual(bowlingScoreboard.frames[0]);
    });
  });

  describe("nextRoll()", function() {
    it("switch to next roll", function() {
      expect(bowlingScoreboard.activeFrame().activeRoll()).toEqual(bowlingScoreboard.frames[0].rolls[0]);
      bowlingScoreboard.nextRoll();
      expect(bowlingScoreboard.activeFrame().activeRoll()).toEqual(bowlingScoreboard.frames[0].rolls[1]);
    });
    it("switch to next frame when there are no more pins in the current one", function() {
      expect(bowlingScoreboard.activeFrame().activeRoll()).toEqual(bowlingScoreboard.frames[0].rolls[0]);
      bowlingScoreboard.activeFrame().setKnockedDownPins(10);
      bowlingScoreboard.nextRoll();
      expect(bowlingScoreboard.activeFrame().activeRoll()).toEqual(bowlingScoreboard.frames[1].rolls[0]);
    });
  });

});
