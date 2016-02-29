describe('Scoring a complete game', function() {

  var game;

  beforeEach(function() {
    game = new Game(Frame);
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
      game.addRoll(0); //
      game.addRoll(10); // 13
      game.addRoll(3); //
      game.addRoll(7); // +12 = 25
      game.addRoll(2); //
      game.addRoll(2); // +4 = 29
      game.addRoll(0); //
      game.addRoll(0); // +0 = 29
      game.addRoll(10); // +29 = 58
      game.addRoll(10); // +20 = 78
      game.addRoll(9); //
      game.addRoll(1); // +20 98
      game.addRoll(10); // +20 118
      game.addRoll(4); //
      game.addRoll(6); // +15 133
      game.addRoll(5); //
      game.addRoll(5); // +11 144
      game.addRoll(1); //
      expect(game.totalScore).toContain(144);
      expect(game.totalScore).
        toEqual([13, 25, 29, 29, 58, 78, 98, 118, 133, 144])
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });
  });
});
