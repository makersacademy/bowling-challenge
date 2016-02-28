describe('Scoring a complete game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('games with repeating patterns', function() {
    it('perfect game, all strikes', function() {
      for (var i = 0; i < 12; i++) { game.addRoll(10); }
      expect(game.totalScore).toContain(300);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('game of all spares', function() {
      for (var i = 0; i < 10; i++) { game.addRoll(9); game.addRoll(1); }
      game.addRoll(9);
      expect(game.totalScore).toContain(190);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('gutter game, all 0s', function() {
      for (var i = 0; i < 20; i++) { game.addRoll(0); }
      expect(game.totalScore).toContain(0);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });

    it('normal game without bonuses', function() {
      for (var i = 0; i < 10; i++) { game.addRoll(1); game.addRoll(0); }
      expect(game.totalScore).toContain(10);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });
  });

  describe('Scoring a game of various combinations of rolls', function() {
    it('calculates the correct score', function() {
      game.addRoll(0); // 13
      game.addRoll(10); // 13
      game.addRoll(3); // 12
      game.addRoll(7); // 12
      game.addRoll(2); // 4
      game.addRoll(2); // 4
      game.addRoll(0); // 0
      game.addRoll(0); // 0
      game.addRoll(10); // 29 58
      game.addRoll(10); // 19 78
      game.addRoll(9); // 9 98
      game.addRoll(1); // 9 98
      game.addRoll(10); // 20 118
      game.addRoll(4); // 15 118
      game.addRoll(6); // 15 133
      game.addRoll(5); // 9 144
      game.addRoll(5); // 9 144
      game.addRoll(1); // 9 144
      expect(game.totalScore).toContain(144);
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });
  });
});
