describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("scores a gutter game as zero", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.getCurrentScore()).toEqual(0);
  });

  it("scores a one point game as one", function() {
    game.roll(1);
    for (var i = 0; i < 19; i++) {
      game.roll(0);
    }
    expect(game.getCurrentScore()).toEqual(1);
  });

  it("scores a game where there is one point per frame as ten", function() {
    for (var i = 0; i < 10; i++) {
      game.roll(1);
      game.roll(0);
    }
    expect(game.getCurrentScore()).toEqual(10);
  });

  it("scores a game where there are two points per frame as twenty", function() {
    for (var i = 0; i < 10; i++) {
      game.roll(1);
      game.roll(1);
    }
    expect(game.getCurrentScore()).toEqual(20);
  });
});
