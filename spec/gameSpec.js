describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe("score", function () {
    it("can return 0 if all fail", function () {
      for (var i; (i = 0); i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  });
});
