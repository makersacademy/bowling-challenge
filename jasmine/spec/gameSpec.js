describe("Game", function () {
  let game;

  beforeEach(function () {
    game = new Game();
  });

  describe("can calculate the points of", function () {
    it("a simple frame", function () {
      game.add();
      game.frames[0].stRoll(4);
      game.frames[0].ndRoll(3);
      game.addPoints(0);
      expect(game.getPoints()).toEqual(7);
    });
    it("a spare followed by a simple frame", function () {
      game.add();
      game.frames[0].stRoll(5);
      game.frames[0].ndRoll(5);
      expect(game.addPoints(0)).toEqual(10);
      game.add();
      game.frames[1].stRoll(4);
      game.frames[1].ndRoll(3);
      expect(game.addPoints(1)).toEqual(21);
    });
    it("a strike followed by a simple frame", function () {
      game.add();
      game.frames[0].stRoll(10);
      expect(game.addPoints(0)).toEqual(10);
      game.add();
      game.frames[1].stRoll(4);
      game.frames[1].ndRoll(3);
      expect(game.addPoints(1)).toEqual(24);
      expect(game.frames[0].getTotal()).toEqual(17);
      expect(game.frames[1].getTotal()).toEqual(7);
    });
    it("two strikes in a row, and a simpe frame", function () {
      game.add();
      game.frames[0].stRoll(10);
      game.addPoints(0);
      game.add();
      game.frames[1].stRoll(10);
      expect(game.addPoints(1)).toEqual(30);
      game.add();
      game.frames[2].stRoll(3);
      game.frames[2].ndRoll(4);
      expect(game.addPoints(2)).toEqual(47);
    });
  });
});
