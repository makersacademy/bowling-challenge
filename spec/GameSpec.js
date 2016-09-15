'use-strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("At the start the game ...", function() {

    it("should have 10 pins", function() {
      expect(game.showPins()).toEqual(10);
    });

    it("should have 10 pins", function() {
      expect(game.showFramesToPlay()).toEqual(10)
    });

    it("should have 10 pins", function() {
      expect(game.showRollsRemaining()).toEqual(2);
    });

    it("should have 10 pins", function() {
      expect(game.showScore()).toEqual(0);
    });

  });

});
