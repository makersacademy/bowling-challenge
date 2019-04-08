// this requires strict use of javascript in testing. 
"use strict";

// creating the scorecard object before each test. 
describe("Frame", function () {
  var frame;
  beforeEach(function() {
    frame = new Frame(0,0,0)
  });

  describe(".roll", function() {
    it("Expects the frame to be complete if 2 balls are guttered", function () {
      for (var i = 0; i < 2; i++)
        scorecard.roll(0);
      expect(scorecard.frameComplete).toEqual(true);
    });
  });

  describe(".frameScore", function() {
    it("Returns a score for the frame", function() {
      for (var i = 0; i < 2; i++)
        scorecard.roll(0);
      expect(this.frameScore).toEqual(0);
    });
  });

  describe(".frameComplete", function () {
    it("lets us known when the game is complete", function() {
      expect(this.frameComplete).toBe(false);
      this.roll(2)
      expect(this.frameComplete).toBe(false);
      this.roll(6)
      expect(this.frameComplete).toBe(true);
    });
  });
});
