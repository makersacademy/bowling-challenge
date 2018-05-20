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

  var rollSpare = function() {
    game.roll(5);
    game.roll(5);
  };

  var rollStrike = function() {
    game.roll(10);
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

    it('for a spare', function() {
      rollSpare();
      game.roll(2);
      rollMany(17, 0);
      expect(game.getScore()).toBe(14);
    });

    it('for a strike', function() {
      rollStrike();
      game.roll(3);
      game.roll(4);
      rollMany(16, 0);
      expect(game.getScore()).toBe(24);
    });

    it('for a maximum score', function() {
      rollMany(12, 10);
      expect(game.getScore()).toBe(300);
    });
  });
});
