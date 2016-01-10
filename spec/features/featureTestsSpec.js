xdescribe("Feature tests", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("calculates the player's score", function() {
    game.enterPins(5);
    expect(game.checkScore()).toEqual(5);
  });

  it("the game ends after 1 round", function() {
    game.enterPins(4);
    game.enterPins(1);
    expect(function() {game.enterPins(2);}).toThrow("The game is over");
  });
});
