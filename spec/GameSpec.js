describe("Bowling Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function rollMany (n, pins) {
    for (var i = 0; i < n; i++) {
      game.roll(pins)
    }
  }

  it("can roll down pins for each frame", function() {
    rollMany(2, 5);
    expect(game.frameScores).toEqual([5,5]);
  });

  it("can roll a gutter game", function() {
    game.roll(20, 0);
    expect(game.totalScore).toEqual(0);
  });

});
