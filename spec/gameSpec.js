describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("throws an exception if the pins entered is not valid", function() {
    expect(function() {game.enterPins(15);}).toThrow("Invalid number of pins entered");
  });

  it("calculates the player's score", function() {
    game.enterPins(9);
    expect(game.checkScore()).toEqual(9);
  });

  it("it has an end", function() {
    game.enterPins(4);
    expect(function() {game.enterPins(5);}).toThrow("The game is over");
  });
});
