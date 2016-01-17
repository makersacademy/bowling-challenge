describe("Feature tests", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("playing a game", function() {
    it("the game ends after 10 rounds", function() {
      for(var i = 0; i < 20; i++) {
        game.enterPins(4);
      }
      expect(function() {game.enterPins(2);}).toThrow("The game is over");
    });
  });

  describe("getting the score", function() {
    it("returns the running totals for each round", function() {
      game.enterPins(1);
      game.enterPins(8);
      game.enterPins(2);
      game.enterPins(3);
      game.enterPins(5);
      game.enterPins(3);
    expect(game.getScore()).toEqual([9, 14, 22]);
    });

    it("returns the correct final score for successive strikes", function() {
      for(var i = 0; i < 12; i++) {
        game.enterPins(10);
      }
      expect(game.getScore().pop()).toEqual(300);
    });

    it("returns the correct score for a 'typical' game", function() {
      game.enterPins(1);
      game.enterPins(9);
      game.enterPins(8);
      game.enterPins(0);
      game.enterPins(2);
      game.enterPins(3);
      game.enterPins(7);
      game.enterPins(2);
      game.enterPins(0);
      game.enterPins(0);
      game.enterPins(10);
      game.enterPins(10);
      game.enterPins(1);
      game.enterPins(9);
      game.enterPins(5);
      game.enterPins(0);
      game.enterPins(1);
      game.enterPins(4);
      expect(game.getScore().pop()).toEqual(106);
    });
  });
});
