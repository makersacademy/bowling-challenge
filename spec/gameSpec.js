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

  function rollStrike() {
    game.roll(10)
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
      rollStrike();
      game.roll(3);
      game.roll(4);
      rollMany(16, 0);
      expect(game.score()).toEqual(24);
    });

    it("scores a perfect game", function() {
      rollMany(12, 10);
      expect(game.score()).toEqual(300);
    });

    it("scores mixed rolls game", function() {
      game.roll(4);
      game.roll(5);
      rollSpare();
      rollStrike();
      game.roll(1);
      game.roll(7);
      game.roll(9);
      game.roll(0);
      rollStrike();
      rollStrike();
      game.roll(9);
      game.roll(1);
      game.roll(9);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      expect(game.score()).toEqual(147);
    });
  });

  describe("isSpare", function() {
    it("returns true if frame is a spare", function() {
      rollSpare();
      expect(game.isSpare(0)).toBe(true);
    });
  });

  describe("isStrike", function() {
    it("returns true if frame is a strike", function() {
      game.roll(10);
      expect(game.isStrike(0)).toBe(true);
    })
  });

  describe("sumOfBallsInFrame", function() {
    it("returns a score for the regular frame", function() {
      game.roll(4);
      game.roll(3);
      expect(game.sumOfBallsInFrame(0)).toEqual(7)
    })
  });

  describe("spareBonus", function() {
    it("returns a bonus scores for spare", function() {
      rollSpare();
      game.roll(2);
      game.roll(4);
      expect(game.spareBonus(0)).toEqual(2);
    });
  })

  describe("strikeBonus", function() {
    it("returns a bonus scores for strike", function() {
      rollStrike();
      game.roll(3);
      game.roll(2);
      expect(game.strikeBonus(0)).toEqual(5);
    });
  });

  describe("currentScore", function() {
    it("returns current score for the regular frame", function () {
      game.roll(4);
      game.roll(4);
      expect(game.currentScore(0)).toEqual(8);
    });

    it("correctly calculates scores for each frame", function() {
      game.roll(5);
      game.roll(4);
      game.roll(3);
      game.roll(5);
      expect(game.currentScore(0)).toEqual(9);
      expect(game.currentScore(1)).toEqual(8);
    });

    it("returns current score for frame with strike", function() {
      game.roll(10);
      game.roll(10);
      game.roll(3);
      game.roll(4);
      expect(game.currentScore(0)).toEqual(23);
      expect(game.currentScore(1)).toEqual(17);
    });

    it("returns current score for frame with spare", function() {
      game.roll(5);
      game.roll(5);
      game.roll(4);
      game.roll(3);
      expect(game.currentScore(0)).toEqual(14);
    });
  });

  describe("countFrame", function() {
    it("count the frame for regural rolls", function() {
      game.roll(4);
      game.roll(3);
      expect(game.frameNumber).toEqual(1);
    });
    it("count the frame for strike", function() {
      game.roll(10);
      expect(game.frameNumber).toEqual(1);
    });
  });

});
