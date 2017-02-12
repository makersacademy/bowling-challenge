'use strict';

describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['testMethod']); //In order to create a mock with multiple spies, using jasmine.createSpyObj with an array of strings will return an object that has a property for each string that is a spy.
  });

  describe("- properties", function() {
    it('can record the number of frames played', function() {
      expect(game.framesInPlay).toEqual([]);
    });

    it("should record total score", function() {
      expect(game.totalScore).toEqual(0);
    });

  });

  describe("- bowling a ball", function() {
    it("should add a new frame on first bowl", function () {
      game.bowl(2);
      expect(game.framesInPlay.length).toEqual(1);
    });

    it("should add a second fram on thrid go, after two balls have been bowled", function() {
      game.bowl(2);
      game.bowl(5);
      game.bowl(6);
      expect(game.framesInPlay.length).toEqual(2);
    });

    it("should move to next frame if a strike is bowled", function() {
      game.bowl(10)
      game.bowl(1)
      expect(game.framesInPlay.length).toEqual(2);
    });
  });

  describe("- checking last frame", function() {
    it("should know if the last frame was a strike", function() {
      game.bowl(10)
      expect(game.framesInPlay.slice(-1)[0].isStrike).toEqual(true)
    });

    it("should know if the last frame was a spare", function() {
      game.bowl(5)
      game.bowl(5)
      expect(game.framesInPlay.slice(-1)[0].isSpare).toEqual(true)
      expect(game.framesInPlay.slice(-1)[0].isStrike).toEqual(false)
    });
  });

  describe("- checking for tenth frame", function() {
    it("should know if current frame in play is the tenth", function() {
      for (var i = 0; i < 10; i++) {
        game.bowl(10)
      };
      expect(game._isTenthFrame()).toEqual(true)
    });
  });

  describe("- resetting the game", function() {
    it("should throw an error if bowler has completed a perfect game and tries to bowl again", function() {
      for (var i = 0; i < 12; i++) {
        game.bowl(10)
      };
      expect(function(){ game.bowl(1); }).toThrowError("Your game is over, please reset if you would like to play again.")
    });

    it("should throw an error if bowler has completed an average game and tries to bowl again", function() {
      for (var i = 0; i < 20; i ++) {
        game.bowl(4)
      };
      expect(function(){ game.bowl(1); }).toThrowError("Your game is over, please reset if you would like to play again.")
    });

    it("should be able to reset game", function() {
      game.bowl(1)
      game.resetGame()
      expect(game.framesInPlay.length).toEqual(0)
    });
  });

  describe("- calculating the final score", function() {
    it("should return the correct final score for a perfect game", function() {
      for (var i = 0; i < 12; i++) {
        game.bowl(10)
      };
      expect(game.checkFinalScore()).toEqual("You scored 300, a perfect game!");
    });

    it("should return the correct final score for a gutter game", function() {
      for (var i = 0; i < 20; i++) {
        game.bowl(0)
      };
      expect(game.checkFinalScore()).toEqual("Your final score is 0 - Gutter game!");
    });

    it("should return the correct final score", function() {
      for (var i = 0; i < 20; i++) {
        game.bowl(4)
      };
      expect(game.checkFinalScore()).toEqual("Your final score is 80");
    });
  });
});
