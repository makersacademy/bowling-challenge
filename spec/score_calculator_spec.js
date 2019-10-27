describe("ScoreCalculator", function() {
  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
    scoreCard1 = [
            {frame: 1, roll: 1, pins: 3},
            {frame: 1, roll: 2, pins: 4},
            {frame: 2, roll: 1, pins: 10},
            {frame: 3, roll: 1, pins: 1},
            {frame: 3, roll: 2, pins: 2},
            {frame: 4, roll: 1, pins: 10},
            {frame: 5, roll: 1, pins: 5},
            {frame: 5, roll: 2, pins: 5},
            {frame: 6, roll: 1, pins: 10},
            {frame: 7, roll: 1, pins: 10},
            {frame: 8, roll: 1, pins: 10},
            {frame: 9, roll: 1, pins: 10},
            {frame: 10, roll: 1, pins: 10},
            {frame: 10, roll: 2, pins: 10},
            {frame: 10, roll: 3, pins: 10}
            ]
    framePerTurn1 = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10, 10]
    rollPerTurn1 = [1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 3]
    pinsPerTurn1 = [3, 4, 10, 1, 2, 10, 5, 5, 10, 10, 10, 10, 10, 10, 10]
    normalScore1 = [7, 10, 3, 10, 10, 10, 10, 10, 10, 30]
    bonusTurns1 = ["normal", "normal", "Strike", "normal", "normal", "Strike",
                   "normal", "Split", "Strike", "Strike", "Strike", "Strike",
                   "Strike", "Strike", "Strike"]
    bonusScore1 = [7, 13, 3, 20, 20, 30, 30, 30, 30, 30]
  });

  describe('arrange', function() {
    it('calculates the total score for each frame', function() {
      scoreCalculator.arrange(scoreCard1);
      expect(scoreCalculator.framePerTurn).toEqual(framePerTurn1);
      expect(scoreCalculator.rollPerTurn).toEqual(rollPerTurn1);
      expect(scoreCalculator.pinsPerTurn).toEqual(pinsPerTurn1);
    });
  });

  describe('calculateScore', function() {
    it('calculates the total score for each frame', function() {
      scoreCalculator.calculateScore(scoreCard1);
      expect(scoreCalculator.frameScores).toEqual(bonusScore1);
      expect(scoreCalculator.score).toEqual(213);
    });
  });

  describe('calculateNormalScore', function() {
    it('calculates the score of each frame without bonus points', function() {
      scoreCalculator.framePerTurn = framePerTurn1;
      scoreCalculator.calculateNormalScore(pinsPerTurn1);
      expect(scoreCalculator.frameScores).toEqual(normalScore1);
    });
  });

  describe('isbonusTurn', function() {
    it('describes if a turn was a strike, split or normal turn', function() {
      scoreCalculator.rollPerTurn = rollPerTurn1;
      scoreCalculator.isbonusTurn(pinsPerTurn1);
      expect(scoreCalculator.bonusTurns).toEqual(bonusTurns1);
    });
  });

  describe('calculateBonusScore', function() {
    it('calculates the bonus points of each turn', function() {
      scoreCalculator.framePerTurn = framePerTurn1;
      scoreCalculator.pinsPerTurn = pinsPerTurn1;
      scoreCalculator.bonusTurns = bonusTurns1;
      scoreCalculator.frameScores = normalScore1;
      scoreCalculator.calculateBonusScore();
      expect(scoreCalculator.frameScores).toEqual(bonusScore1);
    });
  });

  describe('totalScore', function() {
    it('calculates the current total score of the game', function() {
      scoreCalculator.frameScores = bonusScore1;
      scoreCalculator.totalScore();
      expect(scoreCalculator.score).toEqual(213);
    });
  });

  describe('reset', function() {
    it('resets the calculator to avoid double entries from the ScoreCard', function() {
      scoreCalculator.calculateScore(scoreCard1);
      expect(scoreCalculator.score).toEqual(213);
      scoreCalculator.reset();
      expect(scoreCalculator.score).toEqual(0);
      expect(scoreCalculator.frameScores).toEqual([0,0,0,0,0,0,0,0,0,0]);
      expect(scoreCalculator.bonusTurns).toEqual([]);
      expect(scoreCalculator.framePerTurn).toEqual([]);
      expect(scoreCalculator.pinsPerTurn).toEqual([]);
      expect(scoreCalculator.rollPerTurn).toEqual([]);
    });
  });
});
