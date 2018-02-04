'use strict';


describe("Game", function() {
  var game;

  beforeEach(function() {
    game =  new Game();
  });

  describe("When scoring is started for a game", function() {
    it("should start with a score of 0", function() {
      expect(game.calculateScore()).toEqual(0);
    });
  });
});
