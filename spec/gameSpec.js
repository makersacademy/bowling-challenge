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

  it("it ends after 1 round", function() {
    game.enterPins(3);
    game.enterPins(1);
    expect(function() {game.enterPins(5);}).toThrow("The game is over");
  });

  describe("A round", function() {
    it("has two rolls, which are both null initially", function() {
      expect(game.round.rollOne).toBe(null);
      expect(game.round.rollTwo).toBe(null);
    });

    it("stores the value of the first roll in roll1", function() {
      game.enterPins(4);
      expect(game.round.rollOne).toEqual(4);
    });

    it("stores the value of the second roll in roll2", function() {
      game.enterPins(4);
      game.enterPins(1)
      expect(game.round.rollTwo).toEqual(1);
    });
  });
});
