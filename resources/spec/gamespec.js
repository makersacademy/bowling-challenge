"use strict";

describe("Joe's Ten Pin Bowling Game", function(){
  var game;
});

  beforeEach(function() {
    game = new Game();
  });

  describe("Starting the game", function() {
    it("Game starts with an empty scoreboard", function(){
      expect(game.getFrame()).toEqual([]);
    });
    it("Game starts with current roll set to 0", function(){
      expect(game.getRoll()).toEqual(0);
    });
  });

  describe("Playing the game", function(){

    it("Returns a value between 0 and 10 for a roll", function(){
      game.bowl();
      expect(game.getRoll()).toBeGreaterThan(-1);
      expect(game.getRoll()).toBeLessThan(11);
    });
  });
