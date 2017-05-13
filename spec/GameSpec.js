"use strict";

describe("A Game", function() {

  var game;

  beforeEach(function() {
      game = new Game();
  });


  describe("::new", function() {
    it("creates a new Game instance", function() {
      expect(game instanceof Game).toBe(true);
    });
  });

  describe("#roll", function() {
    it("a zero game", function() {
      for (var i = 0; i < 20; i++) {
        game.roll();
      }
      expect(game.score()).toEqual(0);
    });

  });


});
