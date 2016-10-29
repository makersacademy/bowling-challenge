describe("Game", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it("Starts with 10 pins", function() {
      expect(game.defaultPins).toBe(10);
    });
  });
