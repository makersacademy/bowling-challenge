describe("Feature tests", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("calculates the player's score", function() {
    game.enterPins(5);
    expect(game.checkScore()).toEqual(5);
  });

  it("the game has an end", function() {
    game.enterPins(4);
    expect(function() {game.enterPins(5);}).toThrow("The game is over");
  });
});
