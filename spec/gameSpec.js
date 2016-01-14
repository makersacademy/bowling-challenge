xdescribe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("defaults", function() {
    it("has a score of 0", function() {
      expect(game.checkScore()).toEqual(0);
    });

    it("is in progress", function() {
      expect(game.isGameInProgress()).toBe(true);
    });

    it("consists of 2 rounds", function() {
      expect(game.NUMBER_OF_ROUNDS).toEqual(2);
    });
  });

  it("does not allow an invalid entry of pins", function() {
    expect(function() {game.enterPins(15);}).toThrow("Invalid number of pins entered");
  });

  it("gives the player's score", function() {
    game.enterPins(9);
    expect(game.checkScore()).toEqual(9);
  });

  it("ends after 2 rounds", function() {
    game.enterPins(3);
    game.enterPins(1);
    game.enterPins(7);
    game.enterPins(2);
    //Note - the game only knows it's over when you try to play beyond the limits
    game.enterPins(8);
    expect(game.isGameInProgress()).toBe(false);
    //expect(function() {game.enterPins(5);}).toThrow("The game is over");
  });
});
