describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe("score", function () {
    it("can return 0", function () {
      expect(game.score()).toEqual(0);
    });
  });
});
