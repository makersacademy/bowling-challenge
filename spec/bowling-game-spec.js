describe('Bowling Game', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe('calculates scores', function() {
    it('for a gutter game', function() {
      for (var i = 0; i < 20; i++) {
        bowlingGame.roll(0);
      }
      expect(bowlingGame.score).toBe(0);
    });
    it("for all 1's", function() {
      for (var i = 0; i < 20; i++) {
        bowlingGame.roll(1);
      }
      expect(bowlingGame.score).toBe(20);
    });
  });
});
