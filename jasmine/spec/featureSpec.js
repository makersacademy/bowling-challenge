describe("", function() {
  var game;

  beforeEach(function() {
    game = new Game(new Bonus);
  });

  describe("Different games", function() {
    it("Total should equal 14", function() {
      game.roll(1,4)
      game.roll(4,5)
      expect(game.total).toEqual(14)
    });
    it("Total should equal 28", function() {
      game.roll(10)
      game.roll(4,5)
      expect(game.total).toEqual(28)
    });
  });
});
