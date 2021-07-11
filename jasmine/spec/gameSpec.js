describe("Game", function () {
  let game;

  beforeEach(function () {
    game = new Game();
  });

  describe("can show the points of", function () {
    it("a regular frame", function () {
      game.add();
      game.frames[0].stRoll(4);
      game.frames[0].ndRoll(3);
      expect(game.frames[0].getTotal()).toEqual(7);
    });
    it("can store the points a regular frame", function () {
      game.add();
      game.frames[0].stRoll(4);
      game.frames[0].ndRoll(3);
      expect(game.getPoints(0)).toEqual(7);
    });
  });
});
