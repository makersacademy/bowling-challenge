describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("scores a gutter game as zero", function() {
    for (var i = 0; i < 20; i++) {
      game.addNewRoll(0);
    }
    expect(game.getCurrentScore()).toEqual(0);
  });

  it("scores a one point game as one", function() {
    game.addNewRoll(1);
    for (var i = 0; i < 19; i++) {
      game.addNewRoll(0);
    }
    expect(game.getCurrentScore()).toEqual(1);
  });

  it("scores a game where there is one point per frame as ten", function() {
    for (var i = 0; i < 10; i++) {
      game.addNewRoll(1);
      game.addNewRoll(0);
    }
    expect(game.getCurrentScore()).toEqual(10);
  });
});
