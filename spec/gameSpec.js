describe("Game", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it("Starts with 10 pins", function() {
      expect(game.defaultPins).toBe(10);
    });

  it("Starts with 0 points", function() {
    expect(game.defaultPoints).toBe(0);
  });

describe("#roll", function () {
  it('chooses a random score out of 10', function() {
    expect(Game.roll).not.toBe(null);
  });
  });
});
