describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Frame", function() {
    it("has a gutter game", function() {
      game.registerRoll(0);
      expect(game.remainingPins()).toEqual(10);
    });

    it("registers the first roll", function() {
      game.registerRoll(7);
      expect(game.remainingPins()).toEqual(3);
    });

    it("registers 2 rolls", function() {
      game.registerRoll(3);
      game.registerRoll(5);
      expect(game.remainingPins()).toEqual(2);
    });
  });
});