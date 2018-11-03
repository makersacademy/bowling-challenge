describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("scores a gutter game as 0", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.getCurrentScore()).toEqual(0);
  });

  it("scores a game with only 1 in first frame as 1", function() {
    game.roll(1);
    for (var i = 0; i < 19; i++) {
      game.roll(0);
    }
    expect(game.getCurrentScore()).toEqual(1);
  });

  fit("scores a perfect game as 300", function() {
    for (var i = 0; i < 10; i++) {
      game.roll(10);
    }
    game.roll(10);
    game.roll(10);
    expect(game.getCurrentScore()).toEqual(300);
  });
});
