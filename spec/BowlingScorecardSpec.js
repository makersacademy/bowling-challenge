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

    it("receives a roll from the user which is over 10 and it rejects it as an invalid roll", function() {
      expect(testScorecard.enterRoll(11)).toEqual("Invalid score entered, score must be between 0 and 10.");
    });

    it("receives a roll from the user which is under 0 and it rejects it as an invalid roll", function() {
      expect(testScorecard.enterRoll(-1)).toEqual("Invalid score entered, score must be between 0 and 10.");
    });

    it("receives a roll from the user which is not a number and it rejects it as an invalid roll", function() {
      expect(testScorecard.enterRoll('s')).toEqual("Invalid score entered, score must be between 0 and 10.");
    });

    // still need to check for invalid scores on the second roll
    // will need to test end game functionality as well
  });

  describe("#generateScorecardInfo", function() {
    it("tells you your scores so far, after 1st throw", function() {
      testScorecard.enterRoll(5)
      expect(testScorecard.generateScorecardInfo()).toEqual(FIRST_THROW_SCORECARD)
    });

    it("tells you your scores so far, after 2nd throw", function() {
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(4)
      expect(testScorecard.generateScorecardInfo()).toEqual(SECOND_THROW_SCORECARD)
    });

    FIRST_THROW_SCORECARD = [{ frame: 1, first_roll: 5, second_roll: null }]
    SECOND_THROW_SCORECARD = [{ frame: 1, first_roll: 5, second_roll: 4 }]
  });
});
