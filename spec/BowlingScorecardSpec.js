describe("BowlingScorecard", function() {
  // const BowlingScorecard = require('../src/BowlingScorecard.js');
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

    it("receives a second roll from the user which is too high a number and it rejects it as an invalid roll", function() {
      testScorecard.enterRoll(6)
      expect(testScorecard.enterRoll(6)).toEqual("Invalid score entered, score must be between 0 and 4.");
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

    it("tells you your scores so far, after 4th throw", function() {
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(4)
      testScorecard.enterRoll(4)
      testScorecard.enterRoll(4)

      expect(testScorecard.generateScorecardInfo()).toEqual(FOURTH_THROW_SCORECARD)
    });

    const FIRST_THROW_SCORECARD = [{ frame: 1, firstRoll: 5, secondRoll: "" }]
    const SECOND_THROW_SCORECARD = [
      { frame: 1, firstRoll: 5, secondRoll: 4 },
      { frame: 2, firstRoll: "", secondRoll: "" }
    ]
    const FOURTH_THROW_SCORECARD = [
      { frame: 1, firstRoll: 5, secondRoll: 4 },
      { frame: 2, firstRoll: 4, secondRoll: 4 },
      { frame: 3, firstRoll: "", secondRoll: "" }
    ]
  });
});
