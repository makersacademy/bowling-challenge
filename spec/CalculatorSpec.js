'use strict';

describe("Calculator", function() {
  var calculator;
  var scorer;

  beforeEach(function() {
    calculator = new Calculator();
    scorer = new Scorer();
    calculator.currentGame = scorer;
  })

  describe("scoreFrame", function() {
    it("works out the score for all frames into an array", function() {
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([])
      scorer.addScore(1);
      scorer.addScore(2);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([3])
      scorer.addScore(3);
      scorer.addScore(4);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([3, 7])
    })

    it("works out the score for a spare", function() {
      scorer.addScore(5);
      scorer.addScore(5);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([])
      scorer.addScore(5);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([15])
    })

    it("works out the score for a strike", function() {
      scorer.addScore(10);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([])
      scorer.addScore(5);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([])
      scorer.addScore(4);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([19, 9])
    })

    it("works out the score for a full game rolling 1 each time", function() {
      for (var i = 0; i < 20; i++) { scorer.addScore(1) }
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([2,2,2,2,2,2,2,2,2,2])
    })

    it("works out the score for a full game of strikes", function() {
      for (var i = 0; i < 12; i++) { scorer.addScore(10) }
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([30,30,30,30,30,30,30,30,30,30]);
    })

  })

  describe("totalScore", function() {
    it("shows 0 when there's no bowling done yet", function() {
      expect(calculator.calcTotalScore()).toEqual(0)
    })

    it("shows 1 when there's 2 bad shots played", function() {
      scorer.addScore(1);
      scorer.addScore(0);
      calculator.scoreGame();
      expect(calculator.calcTotalScore()).toEqual(1)
    })

    it("works out the total score for a game of nearly all strikes", function() {
      for (var i = 0; i < 11; i++) { scorer.addScore(10) }
      scorer.addScore(9);
      calculator.scoreGame();
      expect(calculator.calcTotalScore()).toEqual(299)
    })
  })

})
