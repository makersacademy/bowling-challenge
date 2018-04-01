describe("", function() {
  var game;

  beforeEach(function() {
    game = new Game(new Bonus);
  });

  describe("Different games", function() {

    it("Total should equal 133", function() {
      game.roll(1,4)
      game.roll(4,5)
      game.roll(6,4)
      game.roll(5,5)
      game.roll(10)
      game.roll(0,1)
      game.roll(7,3)
      game.roll(6,4)
      game.roll(10)
      game.roll(2,8,6)
      expect(game.total).toEqual(133)
    });

    it("Total should equal 28", function() {
      game.roll(10)
      game.roll(4,5)
      expect(game.total).toEqual(28)
    });

  });
});
