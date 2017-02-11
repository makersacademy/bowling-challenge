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

    it("Returns a value between 0 and available pins for a roll", function(){
      game.bowl();
      expect(game.getRoll()).toBeGreaterThan(-1);
      expect(game.getRoll()).toBeLessThan(11);
      game.frame = [7];
      game.bowl();
      expect(game.getRoll()).toBeGreaterThan(-1);
      expect(game.getRoll()).toBeLessThan(4);
    });

    it("Knows when a frame is full", function(){
      game.frame = [5, 4];
      expect(game.isFrameFull()).toEqual(true);
      game.frame = [5];
      expect(game.isFrameFull()).toEqual(false);
      game.frame = [10]
      expect(game.isFrameFull()).toEqual(true);
    });
    it("Can return the last frame completed", function(){
      game.scoreBoard = [[1,2], [3,5], [8,1]];
      expect(game.lastFrameBowled()).toEqual([8,1]);
    });
  });

  describe("Game scoring", function(){

    it("Knows how to add the current roll score to the current frame", function(){
      game.roll = 10;
      game.frame = [];
      game.addToFrame();
      expect(game.getFrame()).toEqual([10])
    });
    it("Knows when a frame is a strike or spare", function(){
      game.frame = [10];
      expect(game.isStrike()).toEqual(true);
      expect(game.isSpare()).toEqual(false);
      game.frame = [1, 9];
      expect(game.isSpare()).toEqual(true);
      expect(game.isStrike()).toEqual(false);
      game.frame = [1];
      expect(game.isSpare()).toEqual(false);
      expect(game.isStrike()).toEqual(false);
      game.frame = [1,3];
      expect(game.isSpare()).toEqual(false);
      expect(game.isStrike()).toEqual(false);
    });
    it("Can add a completed frame to the scoreboard", function(){
      game.frame = [7, 2];
      game.addFrameToBoard();
      expect(game.scoreBoard).toEqual([[7,2]])
    });
    it("Can add the values in a frame to return a score", function(){
      game.frame = [2,3];
      expect(game.sumFrame()).toEqual(5);
    });
    it("Can calculate the total score", function(){
      game.scoreBoard = [[1,3], [2,5], [10, 10]];
      expect(game.returnTotalScore()).toEqual(31);
    });

  });
