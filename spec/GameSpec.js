describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("consists of frames", function() {
    it("with a gutter game", function() {
      game.registerRoll(0);
      expect(game.remainingPins()).toEqual(10);
    });

    it("with one registered roll", function() {
      game.registerRoll(7);
      expect(game.remainingPins()).toEqual(3);
    });

    it("with two registered rolls", function() {
      game.registerRoll(3);
      game.registerRoll(5);
      expect(game.remainingPins()).toEqual(2);
    });
  });

  describe("is over", function() {
    it("after 2 rolls", function() {
      game.registerRoll(3);
      game.registerRoll(2);
      expect(game.isOver()).toEqual(true);
    });

    it("after all the pins have been knocked down", function() {
      game.registerRoll(10);
      expect(game.isOver()).toEqual(true);
    });
  });

  describe("is not over", function() {
    it("after less than 2 rolls", function() {
      expect(game.isOver()).toEqual(false);
    });
  });
});