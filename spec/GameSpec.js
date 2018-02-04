'use strict';


describe("Game", function() {
  var game;

  beforeEach(function() {
    game =  new Game();
  });

  describe("When a game starts", function() {
    it("should start with a score of 0", function() {
      expect(game.calculateScore()).toEqual(0);
    });

    it("should start with a tally of 0 frames", function() {
      expect(game.frametally).toEqual(0);
    });
  });
});
