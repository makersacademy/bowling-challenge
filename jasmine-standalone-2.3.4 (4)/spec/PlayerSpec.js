describe("Player", function() {
  var player;
  var game;

  beforeEach(function() {
    player = new Player();
    game = new Game();
    spyOn(window, 'alert');
  });

  it("has a zero score at the beginning", function() {
    expect(player.score).toEqual(0);
  });

  it("plays a game", function() {
    player.newGame(game);
    expect(player.currentGame).toEqual(game);
  });

  it("gets alert when game is over", function() {
    player.newGame(game);
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
    player.roll(0); //
    player.roll(0); //
    expect(window.alert).toHaveBeenCalledWith("Game is over")
  });

});
