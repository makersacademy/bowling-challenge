describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game()
  });

  it("allows a person to record a gutter game", function() {
    for (i=0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.getCurrentScore()).toEqual(0);
  });

  it("allows a person to record a normal score, no bonuses", function() {
    for (i=0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.getCurrentScore()).toEqual(20);
  });

  it("tracks the frame and roll number", function() {
    for (i=0; i < 6; i++) {
      game.roll(1);
    }
    expect(game.getCurrentFrame()).toEqual(4);
    expect(game.getCurrentRoll()).toEqual(1);
  });

  it("saves how many pins were knocked over on each roll", function() {
    game.roll(4);
    // scoreCard = [{frame: 1, roll: 1, pins: 4}]
    var result = game.scoreCard.first.pins
    expect(result).toEqual(4);
  });
});
