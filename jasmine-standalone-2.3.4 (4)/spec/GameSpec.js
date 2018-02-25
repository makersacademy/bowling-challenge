describe("Game", function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
    player = new Player();
    player.newGame(game);
  });

  describe("beginning of the game", function() {

    it("has empty array of frames", function() {
      expect(game.frames).toEqual([]);
    });

    it("has empty array of pairs", function() {
      expect(game.pairs).toEqual([]);
    });
  });

  describe("many-rolls basic game", function() {

    beforeEach(function() {
      player.roll(5);
      player.roll(6);
      player.roll(7);
      player.roll(8);
    });

    it("adds frames to frames", function() {
      expect(game.frames).toEqual([1, 1, 2, 2]);
    });

    it("adds objects to pairs", function() {
      expect(game.pairs).toEqual([{1:5}, {1:6}, {2:7}, {2:8}])
    });

    it("returns last frame", function() {
      expect(game._currentFrame()).toEqual(2);
    });
  });

  describe("many-rolls game - counting score", function() {

    beforeEach(function() {
      player.roll(4);
      player.roll(4); //
      player.roll(5);
      player.roll(3); //
      player.roll(4);
      player.roll(5); //
      player.roll(5);
      player.roll(5); //
      player.roll(10); //
      player.roll(0);
      player.roll(1); //
      player.roll(7);
      player.roll(3); //
      player.roll(6);
      player.roll(4); //
      player.roll(10); //
      player.roll(3);
      player.roll(3); //
    });

    it("calculates basic scores", function() {
      expect(game.basicScore()).toEqual(82);
    });

    it("calculates spares", function() {
      expect(game.spares()).toEqual(26);
    });

    it("calculates strikes", function() {
      expect(game.strikes()).toEqual(7);
    });

    it("calculates general score", function() {
      expect(game.generalScore()).toEqual(115);
    });

  });

  describe("strike in the endgame calculated properly", function() {
    it("calculates strikes", function() {
      player.roll(4);
      player.roll(4); //
      player.roll(5);
      player.roll(3); //
      player.roll(4);
      player.roll(5); //
      player.roll(5);
      player.roll(5); //
      player.roll(10); //
      player.roll(0);
      player.roll(1); //
      player.roll(7);
      player.roll(3); //
      player.roll(6);
      player.roll(2);
      player.roll(10);
      player.roll(10);
      player.roll(10);
      player.roll(2); //
      expect(game.strikes()).toEqual(33);
    });
  });

  describe("spares in the endgame calculated properly", function() {
    it("calculates spares", function() {
      player.roll(0);
      player.roll(0); //
      player.roll(0);
      player.roll(0); //
      player.roll(0);
      player.roll(0); //
      player.roll(0);
      player.roll(0); //
      player.roll(0);
      player.roll(0); //
      player.roll(0);
      player.roll(0); //
      player.roll(0);
      player.roll(0); //
      player.roll(0);
      player.roll(0); //
      player.roll(0);
      player.roll(0); //
      player.roll(8);
      player.roll(2); //
      player.roll(1); //
      expect(game.spares()).toEqual(1);
    });
  });

  describe("tell about progress", function() {

    it("tells the game is in progress - normal case", function() {
      player.roll(5);
      player.roll(1);
      expect(game.isInProgress()).toEqual(true);
    });

    it("tells the game is not in progress - normal case", function() {
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
      expect(game.isInProgress()).toEqual(false);
    });

    it("tells the game is in progress - edge spare case", function() {
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
      player.roll(9);
      player.roll(1); // round 10
      expect(game.isInProgress()).toEqual(true);
    });

    it("tells the game is in progress - edge strike case", function() {
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
      player.roll(10);
      player.roll(2); // round 10
      expect(game.isInProgress()).toEqual(true);
    });

  });

});
