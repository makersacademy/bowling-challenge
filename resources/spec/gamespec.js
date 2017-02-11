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

  describe("Game mechanics", function(){

    it("Returns a value between 0 and 10 for a roll", function(){
      game.bowl();
      expect(game.getRoll()).toBeGreaterThan(-1);
      expect(game.getRoll()).toBeLessThan(11);
    });
    it("Can add the values in a frame to return a score", function(){
      game.frame = [2,3];
      expect(game.sumFrame()).toEqual(5);
    });
    it("Knows how to add the current roll score to the current frame", function(){
      game.roll = 10;
      game.frame = []
      game.addToFrame();
      expect(game.getFrame()).toEqual([10])
    });
  });
