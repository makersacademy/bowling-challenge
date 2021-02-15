describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe("score", function () {
    it("can return 0 if all fail", function () {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toBe(0);
    });

    it("can return score of 20 if all 1", function () {
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).toBe(20);
    });

    it("can return a spare", function () {
      game.roll(5);
      game.roll(5);
      game.roll(4);
      for (var i = 0; i < 17; i++) {
        game.roll(0);
      }
      expect(game.score()).toBe(18);
    });

    it("can return a strike", function () {
      game.roll(10);
      game.roll(5);
      game.roll(4);
      for (var i = 0; i < 16; i++) {
        game.roll(0);
      }
      expect(game.score()).toBe(28);
    });
  });
});
