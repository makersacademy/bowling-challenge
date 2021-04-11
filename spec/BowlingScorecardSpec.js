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

    it("receives end of game after 10 frames are completed", function() {
      let i = 1
      while (i < 20 ) {
        testScorecard.enterRoll(4)
        i++
      }

      expect(testScorecard.enterRoll(4)).toEqual("End of Game");
    });

    // still need to check for invalid scores on the second roll
    // will need to test end game functionality as well
  });

  describe("#currentScore", function() {
    it("tells you your current scores so far, after 1st throw", function() {
      testScorecard.enterRoll(5)

      expect(testScorecard.currentScore()).toEqual(5)
    })
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

    it("tells you if you score a strike", function() {
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(4)
      testScorecard.enterRoll(10)

      expect(testScorecard.generateScorecardInfo()).toEqual(STRIKE_THROW_SCORECARD)
    })

    it("tells you if you score a spare", function() {
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(4)
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(5)

      expect(testScorecard.generateScorecardInfo()).toEqual(SPARE_THROW_SCORECARD)
    })

    it("gives you bonus points if you get a spare", function() {
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(4)
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(5)

      expect(testScorecard.generateScorecardInfo()).toEqual(SPARE_BONUS_THROW_SCORECARD)
    })

    it("gives you bonus points if you get a strike", function() {
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(4)
      testScorecard.enterRoll(10)
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(5)

      expect(testScorecard.generateScorecardInfo()).toEqual(STRIKE_BONUS_THROW_SCORECARD)
    })

    it("gives you bonus points if you multiple strikes", function() {
      testScorecard.enterRoll(10)
      testScorecard.enterRoll(10)
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(5)

      expect(testScorecard.generateScorecardInfo()).toEqual(DOUBLE_STRIKE_BONUS_THROW_SCORECARD)
    })

    it("gives you a full game with 3 frames in 10th frame if you have 12 strikes in a row", function() {
      let i = 1
      while (i < 13 ) {
        testScorecard.enterRoll(10)
        i++
      }

      expect(testScorecard.generateScorecardInfo()).toEqual(ALL_STRIKE_THROW_SCORECARD)
    })

    it("gives you a full game with 3 frames in 10th frame if you have 9 strikes in a row, then a spare", function() {
      let i = 1
      while (i < 10 ) {
        testScorecard.enterRoll(10)
        i++
      }
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(5)
      testScorecard.enterRoll(5)

      expect(testScorecard.generateScorecardInfo()).toEqual(SOLUTION_ALT_THREE_THROW_SCORECARD)
    })



    const FIRST_THROW_SCORECARD = [{ frame: 1, firstRoll: 5, secondRoll: "", strike: false, spare: false, total: 5 }]
    const SECOND_THROW_SCORECARD = [
      { frame: 1, firstRoll: 5, secondRoll: 4, strike: false, spare: false, total: 9 },
      { frame: 2, firstRoll: "", secondRoll: "", strike: false, spare: false, total: 9 }
    ]
    const FOURTH_THROW_SCORECARD = [
      { frame: 1, firstRoll: 5, secondRoll: 4, strike: false, spare: false, total: 9 },
      { frame: 2, firstRoll: 4, secondRoll: 4, strike: false, spare: false, total: 17 },
      { frame: 3, firstRoll: "", secondRoll: "", strike: false, spare: false, total: 17 }
    ]
    const STRIKE_THROW_SCORECARD = [
      { frame: 1, firstRoll: 5, secondRoll: 4, strike: false, spare: false, total: 9 },
      { frame: 2, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 19 },
      { frame: 3, firstRoll: "", secondRoll: "", strike: false, spare: false, total: 19 }
    ]
    const SPARE_THROW_SCORECARD = [
      { frame: 1, firstRoll: 5, secondRoll: 4, strike: false, spare: false, total: 9 },
      { frame: 2, firstRoll: 5, secondRoll: '/', strike: false, spare: true, total: 19 },
      { frame: 3, firstRoll: "", secondRoll: "", strike: false, spare: false, total: 19 }
    ]
    const SPARE_BONUS_THROW_SCORECARD = [
      { frame: 1, firstRoll: 5, secondRoll: 4, strike: false, spare: false, total: 9 },
      { frame: 2, firstRoll: 5, secondRoll: '/', strike: false, spare: true, total: 24 },
      { frame: 3, firstRoll: 5, secondRoll: "", strike: false, spare: false, total: 29 }
    ]
    const STRIKE_BONUS_THROW_SCORECARD = [
      { frame: 1, firstRoll: 5, secondRoll: 4, strike: false, spare: false, total: 9 },
      { frame: 2, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 29 },
      { frame: 3, firstRoll: 5, secondRoll: "/", strike: false, spare: true, total: 39 },
      { frame: 4, firstRoll: "", secondRoll: "", strike: false, spare: false, total: 39 }
    ]
    const DOUBLE_STRIKE_BONUS_THROW_SCORECARD = [
      { frame: 1, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 25 },
      { frame: 2, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 45 },
      { frame: 3, firstRoll: 5, secondRoll: "/", strike: false, spare: true, total: 55 },
      { frame: 4, firstRoll: "", secondRoll: "", strike: false, spare: false, total: 55 }
    ]
    const ALL_STRIKE_THROW_SCORECARD = [
      { frame: 1, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 30 },
      { frame: 2, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 60 },
      { frame: 3, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 90 },
      { frame: 4, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 120 },
      { frame: 5, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 150 },
      { frame: 6, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 180 },
      { frame: 7, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 210 },
      { frame: 8, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 240 },
      { frame: 9, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 270 },
      { frame: 10, firstRoll: 'X', secondRoll: 'X', thirdRoll: 10, strike: true, spare: false, total: 300 }
    ]
    const SOLUTION_ALT_THREE_THROW_SCORECARD = [
      { frame: 1, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 30 },
      { frame: 2, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 60 },
      { frame: 3, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 90 },
      { frame: 4, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 120 },
      { frame: 5, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 150 },
      { frame: 6, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 180 },
      { frame: 7, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 210 },
      { frame: 8, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 235 },
      { frame: 9, firstRoll: 'X', secondRoll: "", strike: true, spare: false, total: 255 },
      { frame: 10, firstRoll: 5, secondRoll: '/', thirdRoll: 5, strike: false, spare: true, total: 270 }
    ]
  });
});
