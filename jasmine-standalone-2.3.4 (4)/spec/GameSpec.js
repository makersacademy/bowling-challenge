describe("Game", function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
    player = new Player();
    player.newGame(game);
  });

  describe("beginning of the game", function() {

    it("has an empty array of rolls at the beginning", function() {
      expect(game.rolls).toEqual([]);
    });

    it("has empty array of frames at the beginning", function() {
      expect(game.frames).toEqual([]);
    });
  });

  describe("many-rolls game - rolls, frames and pairs", function() {

    beforeEach(function() {
      player.roll(5);
      player.roll(6);
      player.roll(7);
      player.roll(8);
    });

    it("adds rolls to rolls", function() {
      expect(game.rolls).toEqual([5, 6, 7, 8]);
    });

    it("adds frames to frames", function() {
      expect(game.frames).toEqual([1, 1, 2, 2]);
    });

    it("adds hashes to hashes", function() {
      expect(game.pairs).toEqual([{1:5}, {1:6}, {2:7}, {2:8}])
    });

    it("returns last frame", function() {
      expect(game._currentFrame()).toEqual(2);
    });
  });

  describe("many-rolls game - counting score", function() {

    it("calculates normal scores", function() {
      player.roll(5);
      player.roll(1);
      player.roll(7);
      player.roll(2);
      expect(game.basicScore()).toEqual(15);
    });
  });

});
