xdescribe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("defaults", function() {
    it("is in progress", function() {
      expect(game.isGameInProgress()).toBe(true);
    });

    it("consists of 10 rounds", function() {
      expect(game.NUMBER_OF_ROUNDS).toEqual(10);
    });
  });

  describe("ending the game", function() {
    it("ends after 10 rounds", function() {
      for(var i = 0; i < 20; i++) {
        game.enterPins(5);
      }
      expect(game.isGameInProgress()).toBe(false);
      expect(function() {game.enterPins(5);}).toThrow("The game is over");
    });
  });

  describe("keeping track of the rounds", function() {
    it("stores the completed rounds in the rounds array", function() {
      for(var i = 0; i < 4; i++) {
        game.enterPins(1);
      }
      expect(game.rounds.length).toEqual(2);
    });
  });

  describe("getting the score", function() {
    it("returns the running totals for each round", function() {
      game.enterPins(1);
      game.enterPins(2);
      game.enterPins(5);
      game.enterPins(3);
      game.enterPins(6);
      game.enterPins(3);
      expect(game.getScore()).toEqual([3, 11, 20]);
    });
  });
});
