describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  describe("playing", function() {

    it("calculates the score of a roll", function() {
      game.roll(3, 4);
      expect(game.totalScore).toBe(7);
    });

    it("keeps track of frames", function() {
      game.roll(1, 2);
      expect(game.currentFrameNumber).toBe(2)
    });

    it("has only ten frames", function() {
      for (i = 0; i < 11; i++) {
        game.roll(1, 2);
      }
      game.roll(1, 1)
      expect(game.playing).toBe(false);
    });

    it("you cannot roll when game is over", function() {
      for (i = 0; i < 11; i++) {
        game.roll(1, 0)
      }
      game.roll(4, 5)
      expect(game.totalScore).toBe(10);
    });

  });

  describe("spares", function() {

    it("can score a spare", function() {
      game.roll(5, 5);
      game.roll(4, 4);
      expect(game.totalScore).toBe(22);
    })

    it("can score two spares", function() {
      game.roll(5, 5);
      game.roll(6, 4);
      game.roll(1, 2);
      expect(game.totalScore).toBe(30)
    });
  });

  describe("strikes", function() {
    it("can score a strike", function() {
      game.roll(10, 0);
      game.roll(4, 3);
      expect(game.totalScore).toBe(24);
    });

    it("can score two strikes in a row", function() {
      game.roll(10, 0);
      game.roll(10, 0);
      game.roll(1, 2);
      expect(game.totalScore).toBe(37)
    });
  });
  describe("final frame", function() {

    it("if strike, has 2 more rolls", function() {
      for (i = 0; i < 10; i++) {
        game.roll(0, 0)
      }
      game.roll(10, 0)
      game.roll(1, 2)
      expect(game.bonusRolls).toBe(true)
    });

    it("if strike, gets more points ", function() {
      for (i = 0; i < 10; i++) {
        game.roll(0, 0)
      }
      game.roll(10, 0)
      game.roll(0, 1)
      expect(game.totalScore).toBe(11)

    });
  });

});