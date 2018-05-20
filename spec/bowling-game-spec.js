describe('Bowling Game', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  var rollMany = function(rolls, pins) {
    var total = 0;
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  describe('calculates scores', function() {
    it('for a gutter game', function() {
      rollMany(20, 0);
      expect(game.getScore()).toBe(0);
    });

    it("for all 1's", function() {
      rollMany(20, 1);
      expect(game.getScore()).toBe(20);
    });
  });
});
