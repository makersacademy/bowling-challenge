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
    it("Adds 0 to array if strike on first roll", function(){
      game.frame = [10];
      game.completeStrike();
      expect(game.frame).toEqual([10,0]);
    });
    it("Knows if there are any more rolls left in the game", function(){
      game.scoreBoard = [[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]];
      expect(game.nextFrame()).toEqual("GAME FINISHED");
      game.scoreBoard = [[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[10,0]];
      expect(game.nextFrame()).toEqual("2 BONUS ROLLS");

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
      var frame = [10, 0];
      expect(game.isStrike(frame)).toEqual(true);
      expect(game.isSpare(frame)).toEqual(false);
      var frame = [1, 9];
      expect(game.isSpare(frame)).toEqual(true);
      expect(game.isStrike(frame)).toEqual(false);
      var frame = [1];
      expect(game.isSpare(frame)).toEqual(false);
      expect(game.isStrike(frame)).toEqual(false);
      var frame = [1,3];
      expect(game.isSpare(frame)).toEqual(false);
      expect(game.isStrike(frame)).toEqual(false);
    });

    it("Can add a completed frame to the scoreboard", function(){
      game.frame = [7, 2];
      game.addFrameToBoard();
      expect(game.scoreBoard).toEqual([[7,2]])
    });

    it("Can add the values in a frame to return a score", function(){
      var frame = [2,3];
      expect(game.sumFrame(frame)).toEqual(5);
    });

    it("Can calculate the total score", function(){
      game.scoreBoard = [[1,3], [2,5], [10]];
      expect(game.returnTotalScore()).toEqual(21);
    });

    it("Can add bonus points if the previous frame was a strike or spare", function(){
      game.scoreBoard = [[1,4], [10,0]];
      game.frame = [7,2]
      game.addFrameToBoard();
      expect(game.returnTotalScore()).toEqual(33);
      game.scoreBoard = [[1,4], [2, 8]]
      game.frame = [3, 4]
      game.addFrameToBoard();
      expect(game.returnTotalScore()).toEqual(25);
      game.scoreBoard = [[1,4],[3,4]]
      game.frame = [10]
      game.addFrameToBoard();
      expect(game.returnTotalScore()).toEqual(22);
    });

  });
