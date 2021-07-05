describe("Checker:", function() {
  var checker;

  beforeEach(function() {
    checker = new Checker();
  });

  describe("#standard checks:", function() {
    it("returns true on a Strike", function() {
      expect(checker.strikeCheck(10)).toEqual(true);
      expect(checker.strikeCheck(0, 5)).toEqual(false);
    });
    it("returns true on a Spare", function() {
      expect(checker.spareCheck(7, 3)).toEqual(true);
      expect(checker.spareCheck(0, 10)).toEqual(true);
      expect(checker.spareCheck(5, 5)).toEqual(true);
    });
  });

  describe("#firstRolls:", function() {
    it("returns true on a Strike/Spare", function() {
      expect(checker.firstRollStrikeOrSpare(10, 0, 1)).toEqual(true);
      expect(checker.firstRollStrikeOrSpare(7, 3, 1)).toEqual(true);
      expect(checker.firstRollStrikeOrSpare(5, 5, 2)).toEqual(false);
      expect(checker.firstRollStrikeOrSpare(5, 2, 1)).toEqual(false);
    });
  });

  describe("#lastRolls:", function() {
    it("returns true if currentRollisStrikeorSpare", function() {
      expect(checker.currentRollStrikeOrSpare(10, 0)).toEqual(true);
      expect(checker.currentRollStrikeOrSpare(5, 5)).toEqual(true);
      expect(checker.currentRollStrikeOrSpare(0, 5)).toEqual(false);
    });
    it("returns true if previous score was a Strike and current isn't", function() {
      expect(checker.lastRollStrikeThisRollNot(10, 5)).toEqual(true);
      expect(checker.lastRollStrikeThisRollNot(5, 5)).toEqual(false);
      expect(checker.lastRollStrikeThisRollNot(0, 10)).toEqual(false);
    });
    it("returns true if previous two rolls were Strikes and current isn't", function() {
      expect(checker.lastTwoStrikesThisRollNot(10, 10, 5)).toEqual(true);
      expect(checker.lastTwoStrikesThisRollNot(10, 10, 10)).toEqual(false);
      expect(checker.lastTwoStrikesThisRollNot(10, 0, 10)).toEqual(false);
    });
    it("returns true on last three rolls were Strikes", function() {
      expect(checker.tripleStrike(10, 10, 10)).toEqual(true);
      expect(checker.tripleStrike(10, 10, 5)).toEqual(false);
      expect(checker.tripleStrike(10, 0, 10)).toEqual(false);
    });
  });
});
