describe('Bowling Game', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe('when a gutter game', function() {
    it('scores 0', function() {
      for (var i = 0; i < 20; i++) {
        bowlingGame.roll(0);
      }
      expect(bowlingGame.score).toBe(0);
    });
  });
});
