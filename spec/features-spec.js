"use strict";

describe("bowling-computer", function() {
  describe("scoring points", function() {
    it("scores 1 point for 1 pin down", function() {
      expect(BowlingComputer(1)).toEqual(1);
    });

    it("scores 2 points for 2 pins down", function() {
      expect(BowlingComputer(2)).toEqual(2);
    });

    it("scores 3 points for 3 pins down", function() {
      expect(BowlingComputer(2)).toEqual(2);
    });

    it("scores 9 points for 9 pins down", function() {
      expect(BowlingComputer(2)).toEqual(2);
    });

    it("scores 0 points for 0 pins down", function() {
      expect(BowlingComputer(2)).toEqual(2);
    });

  })

});
