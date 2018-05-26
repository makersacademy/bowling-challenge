describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();

  });

  function rollMany(n, pins) {
    for (var i = 0; i < n; i++) {
      game.roll(pins)
    }
  };

  function rollSpare() {
    game.roll(4);
    game.roll(6);
  }

  describe("score", function() {
    it("scores gutter game", function() {
      rollMany(20, 0)
      expect(game.score()).toEqual(0);
    });

    it("scores a game where 1 pin is knocked in each roll", function() {
      rollMany(20, 1)
      expect(game.score()).toEqual(20)
    });

    it("scores a game with one spare", function() {
      rollSpare();
      game.roll(3);
      rollMany(17, 0);
      expect(game.score()).toEqual(16)
    });

    it("scores a game with one strike", function() {
      game.roll(10);
      game.roll(3);
      game.roll(4);
      rollMany(16, 0);
      expect(game.score()).toEqual(24);
    });
  });

  describe("isSpare", function() {
    it("returns true if frame is a spare", function() {
      rollSpare();
      expect(game.isSpare(0)).toBe(true);
    });
  });

});
