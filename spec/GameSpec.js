describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe("Should store the players score for each frame", function () {
    it("stores the first roll of the player in a frame", function () {
      game.roll(5);
      expect(game.frame).toEqual([5]);
    });
    it("stores the second roll of the player in a frame", function () {
      game.roll(5);
      game.roll(6);
      expect(game.frame).toEqual([5, 6]);
    });
    it("rolling a number greater than 10 throws an alert", function () {
      expect(game.roll(11)).toBe(alert("Score must be between 0-10"));
    });
  });

  describe("Store frames into the game instance variable", function () {
    it("stores the first frame into the game instance variable", function () {
      game.roll(5);
      game.roll(6);
      game.roll(7);
      expect(game.gameFrames).toEqual([[5, 6]]);
      expect(game.frame).toEqual([7]);
    });
  });
});
