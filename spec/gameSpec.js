describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("defaults", function() {
    it("has a total score of 0", function() {
      expect(game.checkScore()).toEqual(0);
    });

    xit("has a round in progress", function() {
      expect(game.round.).to
    });
  });

  it("throws an exception if the pins entered is not valid", function() {
    expect(function() {game.enterPins(15);}).toThrow("Invalid number of pins entered");
  });

  xit("can tell if the game is in progress", function() {

  });

  // it("calculates the player's score", function() {
  //   game.enterPins(9);
  //   expect(game.checkScore()).toEqual(9);
  // });
  //
  // it("it ends after 1 round", function() {
  //   game.enterPins(3);
  //   game.enterPins(1);
  //   expect(function() {game.enterPins(5);}).toThrow("The game is over");
  // });
});
