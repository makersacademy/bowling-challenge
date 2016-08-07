describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();

  });

  it("can play gutter game", function() {
    game.play(0);
    expect(game.score()).toBe(0);
  });

  it("can play all ones", function() {
    for(var i = 0; i < 20; i++) {
      game.play(1);
    }
    expect(game.score()).toBe(20);
  });
});
