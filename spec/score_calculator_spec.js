describe("ScoreCalculator", function() {
  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
  });

  describe('calculate', function() {
    it('calculates the score each frame', function() {
      scoreCalculator.calculate([
        {frame: 1, roll: 1, pins: 3},
        {frame: 1, roll: 2, pins: 4},
        {frame: 2, roll: 1, pins: 10},
        {frame: 3, roll: 1, pins: 1},
        {frame: 3, roll: 2, pins: 2},
        {frame: 4, roll: 1, pins: 10},
        {frame: 5, roll: 1, pins: 10},
        {frame: 6, roll: 1, pins: 10},
        {frame: 7, roll: 1, pins: 10},
        {frame: 8, roll: 1, pins: 10},
        {frame: 9, roll: 1, pins: 10},
        {frame: 10, roll: 1, pins: 10},
        {frame: 10, roll: 2, pins: 10},
        {frame: 10, roll: 3, pins: 10}
      ]);
      expect(scoreCalculator.frameScores).toEqual([7,10,3,10,10,10,10,10,10,30]);
    });
  });
});
