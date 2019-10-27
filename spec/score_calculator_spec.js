describe("ScoreCalculator", function() {
  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
    game1 = [
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
    framePerTurn = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10, 10]
    rollPerTurn = [1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 3]
    pinsPerTurn = [3, 4, 10, 1, 2, 10, 5, 5, 10, 10, 10, 10, 10, 10, 10]
    normalScore = [7, 10, 3, 10, 10, 10, 10, 10, 10, 30]
    bonusTurns = ["normal", "normal", "Strike", "normal", "normal", "Strike",
      "normal", "Split", "Strike", "Strike", "Strike", "Strike",
      "Strike", "Strike", "Strike"]
  });

  describe('calculateScore', function() {
    it('calculates the total score for each frame', function() {
      scoreCalculator.calculateScore(game1);
      //expect(scoreCalculator.frameScores).toEqual([7,13,3,20,20,30,30,30,30,30]);
    });
  });

  describe('calculateNormalScore', function() {
    it('calculates the score of each frame without bonus points', function() {
      scoreCalculator.calculateNormalScore(framePerTurn, pinsPerTurn);
      expect(scoreCalculator.frameScores).toEqual(normalScore);
    });
  });

  describe('isbonusTurn', function() {
    it('describes if a turn was a strike, split or normal turn', function() {
      scoreCalculator.isbonusTurn(pinsPerTurn, rollPerTurn);
      expect(scoreCalculator.bonusTurns).toEqual(bonusTurns);
    });
  });
  describe('calculateBonusScore', function() {
    it('calculates the bonus points of a turn', function() {
      // scoreCalculator.calculateBonusScore(pinsPerTurn, framePerTurn);
      //expect().toEqual();
    });
  });
});
