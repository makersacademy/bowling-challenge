describe("Game", function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
    player = new Player();
  });

  it("has an empty array of rolls at the beginning", function() {
    expect(game.scores).toEqual([]);
  });

  it("has empty array of frames at the beginning", function() {
    expect(game.frames).toEqual([]);
  });

  it("adds rolls to rolls", function() {
    player.newGame(game);
    player.roll(5);
    player.roll(6);
    expect(game.scores).toEqual([5, 6]);
  });

  it("adds frames to frames", function() {
    player.newGame(game);
    player.roll(5);
    player.roll(6);
    player.roll(7);
    player.roll(7);
    player.roll(7);
    expect(game.frames).toEqual([1, 1, 2, 2, 3]);
  });

  it("adds hashes to hashes", function() {
    player.newGame(game);
    player.roll(5);
    player.roll(6);
    player.roll(7);
    expect(game.pairs).toEqual([{1:5}, {1:6}, {2:7}])
  });

  it("returns last frame", function() {
    player.newGame(game);
    player.roll(5);
    player.roll(6);
    player.roll(7);
    player.roll(7);
    player.roll(7);
    expect(game._currentFrame()).toEqual(3);
  });

});
