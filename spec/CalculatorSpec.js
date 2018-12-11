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

    it("works out the score for a strike", function() {
      scorer.addScore(5);
      scorer.addScore(5);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([])
      scorer.addScore(5);
      calculator.scoreGame();
      expect(calculator.eachScore).toEqual([15])
    })
  })

})
