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
      expect(BowlingComputer(3)).toEqual(3);
    });

    it("scores 4 points for 4 pins down", function() {
      expect(BowlingComputer(4)).toEqual(4);
    });

    it("scores 5 points for 5 pins down", function() {
      expect(BowlingComputer(5)).toEqual(5);
    });

    it("scores 6 points for 6 pins down", function() {
      expect(BowlingComputer(6)).toEqual(6);
    });

    it("scores 7 points for 7 pins down", function() {
      expect(BowlingComputer(7)).toEqual(7);
    });

    it("scores 8 points for 8 pins down", function() {
      expect(BowlingComputer(8)).toEqual(8);
    });

    it("scores 9 points for 9 pins down", function() {
      expect(BowlingComputer(9)).toEqual(9);
    });

    it("scores 0 points for 0 pins down", function() {
      expect(BowlingComputer(0)).toEqual(0);
    });
  });
});
