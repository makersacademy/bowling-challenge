describe("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe("#frames", function() {
    it("starts on frame number 1", function() {
      expect(game._frameNumber).toEqual(1)
    });
    it("increments the frame number between rounds", function() {
      game.nextRound();
      expect(game._frameNumber).toEqual(2)
    });
    it("ends the game after 10 frames", function() {
      for (var i = 1; i < 11; i++) {
        game.nextRound()
      };
      expect(function() { game.nextRound() }).toThrowError("Game Over!")
    });
  });
});
