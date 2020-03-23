describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Gutter game", function() {
    rollMany(20, 0)
    expect(game.score()).toBe(0);
  });

  it("All ones", function() {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it("One spare", function() {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(16);
  });

  it("One strike", function() {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  });

  it("Perfect game", function() {
    rollMany(12, 10);
    expect(game.score()).toBe(300);
  });

  function rollMany(rolls, pins) {
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }
});
