describe("Feature tests", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("allows the player to enter the number of pins knocked down", function() {
    game.enterPins(1);
    game.enterPins(7);
    expect(game.checkScore()).toEqual(8);
  });

  it("calculates the player's score", function() {
    game.enterPins(5);
    expect(game.checkScore()).toEqual(5);
  });

  it("the game ends after 3 rounds", function() {
    game.enterPins(4);
    game.enterPins(1);
    game.enterPins(4);
    game.enterPins(1);
    game.enterPins(4);
    game.enterPins(1);
    expect(function() {game.enterPins(2);}).toThrow("The game is over");
  });
});
