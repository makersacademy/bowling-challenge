describe("BowlingScorecard", function() {
  const BowlingScorecard = require('../src/BowlingScorecard.js');
  var testScorecard;

  beforeEach(function() {
    testScorecard = new BowlingScorecard();
  })

  describe("#enterRoll", function() {
    it("receives a roll from the user and processes it, returning the score", function() {
      expect(testScorecard.enterRoll(5)).toEqual(5);
    });
  });
});
