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

    beforeEach(function() {
      player.roll(5);
      player.roll(1);
      player.roll(7);
      player.roll(3);
      player.roll(10);
      player.roll(1);
      player.roll(2);
      player.roll(3);
    });

    it("calculates normal scores", function() {
      expect(game.basicScore()).toEqual(32);
    });

    it("calculates spares", function() {
      expect(game.spares()).toEqual(10);
    });

    it("calculates strikes", function() {
      expect(game.strikes()).toEqual(3);
    });

    it("calculates general score", function() {
      expect(game.generalScore()).toEqual(45);
    });

  });

  describe("tell about progress", function() {

    it("tells the game is in progress", function() {
      player.roll(5);
      player.roll(1);
      expect(game.isInProgress()).toEqual(true);
    });

    it("tells the game is not in progress", function() {
      player.roll(1);
      player.roll(1); // round 1
      player.roll(1);
      player.roll(1); // round 2
      player.roll(1);
      player.roll(1); // round 3
      player.roll(1);
      player.roll(1); // round 4
      player.roll(1);
      player.roll(1); // round 5
      player.roll(1);
      player.roll(1); // round 6
      player.roll(1);
      player.roll(1); // round 7
      player.roll(1);
      player.roll(1); // round 8
      player.roll(1);
      player.roll(1); // round 9
      player.roll(1);
      player.roll(1); // round 10
      player.roll(1);
      expect(game.isInProgress()).toEqual(false);
    });

  });

});
