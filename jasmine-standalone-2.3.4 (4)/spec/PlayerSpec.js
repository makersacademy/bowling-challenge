describe("Player", function() {
  var player;
  var game;

  beforeEach(function() {
    player = new Player();
    game = new Game();
  });

  it("has a zero score at the beginning", function() {
    expect(player.score).toEqual(0);
  });

  it("plays a game", function() {
    player.play(game);
    expect(player.currentGame).toEqual(game);
  });

});
