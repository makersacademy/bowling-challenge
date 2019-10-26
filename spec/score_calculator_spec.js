describe("ScoreCalculator", function() {
  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
  });

  describe('calculate', function() {
    it('calculates the score each frame', function() {
      scoreCalculator.calculate([
        {frame: 1, roll: 1, pins: 4},
        {frame: 1, roll: 2, pins: 5}
      ]);

    });
  });
});
