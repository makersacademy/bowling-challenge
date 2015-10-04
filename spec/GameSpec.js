describe("Game", function() {
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
    rollMany(1, 5);
    rollMany(1, 2);
    expect(game.scoreBoard[0]).toEqual({roll1: 5, roll2: 2, frameTotal: 7})
  });

  it("can roll a gutter game", function() {
    rollMany(20, 0);
    expect(game.totalScore()).toEqual(0);
  });


});
