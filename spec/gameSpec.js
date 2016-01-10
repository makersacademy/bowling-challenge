describe("Bowling", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("allows a player to start a new game", function() {
    expect(game).toBeDefined();
  });

  it("lets the player enter the number of pins knocked down", function() {
    expect(game.enterPins(5)).toBeDefined();
  });

  it("throws an exception if the pins entered is not a number between 0 and 10", function() {
    expect(function() {game.enterPins(15);}).toThrow("Invalid number of pins entered");
  });
});
